"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExternalLink, Plus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { isExternalUrl } from "@/lib/utils";
import { createCorrection, deleteCorrection } from "@/core/correction";

interface CorrectionSourceOption {
    id: string;
    label: string;
    isActive: boolean;
}

interface ExamPaperCorrectionItem {
    id: string;
    source: string;
    url: string;
    type: string;
    quality?: number | null;
    author?: string | null;
}

interface ExamPaperCorrectionsProps {
    examPaperId: string;
    corrections: ExamPaperCorrectionItem[];
    sources: CorrectionSourceOption[];
}

const correctionTypes = [
    { value: "pdf", label: "PDF" },
    { value: "video", label: "Vidéo" },
    { value: "html", label: "Page web" },
];

export const ExamPaperCorrections = ({
    examPaperId,
    corrections,
    sources,
}: ExamPaperCorrectionsProps) => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const activeSources = useMemo(
        () => sources.filter((source) => source.isActive),
        [sources]
    );
    const defaultSource = activeSources[0]?.label ?? "";

    const [source, setSource] = useState(defaultSource);
    const [url, setUrl] = useState("");
    const [type, setType] = useState("pdf");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!source) {
            toast.error("Sélectionne une source de correction");
            return;
        }
        if (!url) {
            toast.error("Renseigne une URL de correction");
            return;
        }

        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("examPaperId", examPaperId);
            formData.append("source", source);
            formData.append("url", url);
            formData.append("type", type);

            await createCorrection(formData);
            toast.success("Correction ajoutée");
            setUrl("");
            router.refresh();
        } catch (error) {
            if (error && typeof error === "object" && "digest" in error && String(error.digest).startsWith("NEXT_REDIRECT")) {
                throw error;
            }
            toast.error("Impossible d'ajouter la correction");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (correctionId: string) => {
        setDeletingId(correctionId);
        try {
            await deleteCorrection(correctionId, { examPaperId });
            toast.success("Correction supprimée");
            router.refresh();
        } catch (error) {
            if (error && typeof error === "object" && "digest" in error && String(error.digest).startsWith("NEXT_REDIRECT")) {
                throw error;
            }
            toast.error("Impossible de supprimer la correction");
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Corrections</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {corrections.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                        Aucune correction enregistrée pour ce sujet.
                    </p>
                ) : (
                    <div className="space-y-3">
                        {corrections.map((correction) => (
                            <div
                                key={correction.id}
                                className="flex flex-col gap-2 rounded-lg border border-border px-3 py-2 md:flex-row md:items-center md:justify-between"
                            >
                                <div className="space-y-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-sm font-semibold text-heading">
                                            {correction.source}
                                        </span>
                                        <Badge variant="outline" className="text-[10px] uppercase">
                                            {correction.type}
                                        </Badge>
                                        {correction.author && (
                                            <span className="text-xs text-muted-foreground">
                                                Par {correction.author}
                                            </span>
                                        )}
                                    </div>
                                    <a
                                        href={correction.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs text-fg-brand hover:underline"
                                    >
                                        {correction.url}
                                        {isExternalUrl(correction.url) && <ExternalLink className="h-3 w-3" />}
                                    </a>
                                </div>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleDelete(correction.id)}
                                    disabled={deletingId === correction.id}
                                >
                                    <Trash2 className="mr-1 h-4 w-4" />
                                    Supprimer
                                </Button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="rounded-lg border border-dashed border-border p-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                            <p className="text-sm font-semibold text-heading">
                                Ajouter une correction
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Sélectionne une source standardisée et colle le lien vers la correction.
                            </p>
                        </div>
                        {activeSources.length === 0 && (
                            <Link
                                href="/admin/correction-sources"
                                className="text-xs text-fg-brand hover:underline"
                            >
                                Gérer les sources
                            </Link>
                        )}
                    </div>

                    {activeSources.length === 0 ? (
                        <p className="mt-3 text-xs text-muted-foreground">
                            Ajoute d&apos;abord une source de correction active pour pouvoir créer une correction.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-4 grid gap-3 md:grid-cols-[1fr_2fr_1fr_auto]">
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    Source
                                </label>
                                <Select value={source} onValueChange={setSource}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionner une source" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {activeSources.map((item) => (
                                            <SelectItem key={item.id} value={item.label}>
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    URL
                                </label>
                                <Input
                                    type="url"
                                    placeholder="https://..."
                                    value={url}
                                    onChange={(event) => setUrl(event.target.value)}
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    Type
                                </label>
                                <Select value={type} onValueChange={setType}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {correctionTypes.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-end">
                                <Button type="submit" disabled={isSubmitting}>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Ajouter
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createRelease } from "@/actions/release/create-release";
import { CreateReleaseValues } from "@/types/release";
import { createReleaseSchema } from "@/lib/validation";
import Select from "@/components/ui/select";
import { updateRelease } from "@/actions/release/edit-release";
import FormSubmitButton from "@/components/ui/form-submit-button";

interface ReleaseFormProps {
    crudMode: "add" | "edit";
    formAction: any;
    initialData: {
        id?: string,
        artistId: string,
        releaseDate: string,
        releaseTypeId: string,
        title: string,
    },
    releaseTypes: {
        id: string,
        description: string,
    }[],
    artists: {
        id: string,
        name: string,
        shortName: string,
    }[]
}

export const ReleaseForm = ({
    artists,
    crudMode,
    formAction,
    initialData,
    releaseTypes
}: ReleaseFormProps) => {
    const form = useForm<CreateReleaseValues>({
        defaultValues: initialData,
        resolver: zodResolver(createReleaseSchema)
    });

    const onSubmit = async (values: CreateReleaseValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value as string);
            }
        });
        
        if (!initialData.id) {
            try {
                await createRelease(formData);
                toast.success("Sortie enregistrée");
                // // Reset the form after successful submission
                // form.reset();
            } catch (error) {
                toast.error("Erreur lors de l'enregistrement de la sortie");
                console.error("Error creating release type:", error);
            }
        } else {
            try {
                await updateRelease(initialData.id, formData);
                toast.success("Sortie mise à jour");
            } catch (error) {
                toast.error("Erreur lors de la modification de la sortie");
                console.error("Error updating release:", error);
            }
        }
    }

    const {
        handleSubmit,
        watch,
        trigger,
        control,
        setValue,
        setFocus,
        formState: { isSubmitting }
    } = form;

    return (
        <Form {...form}>
            <form
                action={formAction}
                className="w-full space-y-2"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormField
                    name="artistId"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel required>Artiste</FormLabel>
                            <FormControl>
                                <Select
                                    {...field}
                                >
                                    <option value="" hidden>Choisir une option</option>
                                    {artists && artists.map((artist) => (
                                        <option key={artist.id} value={artist.id}>{artist.name}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="title"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel required>Titre</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Drones, etc"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="releaseTypeId"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel required>Type de sortie</FormLabel>
                            <FormControl>
                                <Select
                                    {...field}
                                >
                                    <option value="" hidden>Choisir une option</option>
                                    {releaseTypes && releaseTypes.map((releaseType) => (
                                        <option key={releaseType.id} value={releaseType.id}>{releaseType.description}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="releaseDate"
                    control={control}
                    render={({ field }) => {
                        return (
                            <FormItem className="flex flex-col">
                                <FormLabel required>Date de sortie</FormLabel>
                                <FormControl>
                                    <Input
                                        type="date"
                                        placeholder="JJ/MM/AAAA"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="outline"
                        className="mr-4"
                    >
                        <Link href="/releases">Annuler</Link>
                    </Button>
                    <FormSubmitButton
                        crudMode={crudMode}
                        loading={isSubmitting}
                    />
                </div>
            </form>
        </Form>
    )
}
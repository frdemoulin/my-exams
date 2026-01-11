"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { createTheme } from "@/core/theme";
import { CreateThemeValues } from "@/core/theme";
import { createThemeSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface DomainThemeFormProps {
    domainId: string;
    domainLabel: string;
}

export const DomainThemeForm = ({ domainId, domainLabel }: DomainThemeFormProps) => {
    const router = useRouter();
    const form = useForm<CreateThemeValues>({
        defaultValues: {
            longDescription: "",
            shortDescription: "",
            description: "",
            domainId,
        },
        resolver: zodResolver(createThemeSchema),
    });

    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
        register,
    } = form;

    const onSubmit = async (values: CreateThemeValues) => {
        const formData = new FormData();
        formData.append("longDescription", values.longDescription);
        formData.append("shortDescription", values.shortDescription || "");
        formData.append("description", values.description || "");
        formData.append("domainId", domainId);

        await createTheme(formData, {
            redirectTo: null,
            revalidatePaths: [`/admin/domains/${domainId}`],
        });
        form.reset({
            longDescription: "",
            shortDescription: "",
            description: "",
            domainId,
        });
        router.refresh();
    };

    return (
        <Card>
            <CardHeader className="mb-2">
                <CardTitle>Ajouter un thème</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        className="w-full space-y-4"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input type="hidden" defaultValue={domainId} {...register("domainId")} />
                        <div className="text-sm text-muted-foreground">
                            Domaine : <span className="font-medium text-heading">{domainLabel}</span>
                        </div>
                        <FormField
                            name="longDescription"
                            control={control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description longue</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="shortDescription"
                            control={control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description courte</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description (optionnelle)</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Description détaillée"
                                            rows={4}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <Button type="submit" disabled={isSubmitting} className="gap-2">
                                <Plus className="h-4 w-4" />
                                Ajouter un thème
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

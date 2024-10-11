"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createTopic } from "@/actions/topic/create-topic";
import { CreateTopicValues } from "@/types/topic";
import { createTopicSchema } from "@/lib/validation";
import { updateTopic } from "@/actions/topic/edit-topic";
import FormSubmitButton from "@/components/ui/form-submit-button";

interface TopicFormProps {
    crudMode: "add" | "edit";
    formAction: any;
    initialData: {
        id?: string,
        longDescription: string,
        shortDescription: string,
    }
}

export const TopicForm = ({
    crudMode,
    formAction,
    initialData
}: TopicFormProps) => {
    const form = useForm<CreateTopicValues>({
        defaultValues: initialData,
        resolver: zodResolver(createTopicSchema)
    });

    const onSubmit = async (values: CreateTopicValues) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value as string);
            }
        });
        
        if (!initialData.id) {
            try {
                await createTopic(formData);
                toast.success("Thème enregistré");
                // // Reset the form after successful submission
                // form.reset();
            } catch (error) {
                toast.error("Erreur lors de l'enregistrement du thème");
                console.error("Error creating topic:", error);
            }
        } else {
            try {
                await updateTopic(initialData.id, formData);
                toast.success("Thème mis à jour");
            } catch (error) {
                toast.error("Erreur lors de la modification du thème");
                console.error("Error updating topic: ", error);
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
                    name="longDescription"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel required>Description longue</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Description"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField
                    name="shortDescription"
                    control={control}
                    render={({ field }) => {
                        return <FormItem>
                            <FormLabel required>Description courte</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Description"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <div className="mt-2 flex justify-end">
                    <Button
                        asChild
                        variant="outline"
                        className="mr-4"
                    >
                        <Link href="/admin/topics">Annuler</Link>
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

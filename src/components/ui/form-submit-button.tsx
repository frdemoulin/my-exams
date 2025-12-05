"use client";

import { Button } from "./button";
import { useCommonTranslations } from "@/hooks/use-translations";

interface FormSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    crudMode: "add" | "edit";
    loading: boolean;
}

export default function FormSubmitButton({
    crudMode,
    loading,
    ...props
}: FormSubmitButtonProps) {
    const common = useCommonTranslations();
    
    return (
        <Button
            type="submit"
            disabled={props.disabled || loading}
            {...props}
            variant="success"
        >
            {crudMode === "add" ? (
                loading ? `${common.loading}` : common.save
            ) : (
                loading ? `${common.loading}` : common.edit
            )}
        </Button>
    );
}

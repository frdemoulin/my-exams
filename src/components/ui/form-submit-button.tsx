"use client";

import { Button } from "./button";

interface FormSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    crudMode: "add" | "edit";
    loading: boolean;
}

export default function FormSubmitButton({
    crudMode,
    loading,
    ...props
}: FormSubmitButtonProps) {
    return (
        <Button
            type="submit"
            disabled={props.disabled || loading}
            {...props}
            variant={crudMode}
        >
            {crudMode === "add" ? (
                loading ? "Enregistrement..." : "Enregistrer"
            ) : (
                loading ? "Édition..." : "Éditer"
            )}
        </Button>
    );
}

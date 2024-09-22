import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TableTitle({
    title,
    buttonId,
    buttonLabel,
    buttonPath
}: {
    title: string,
    buttonId: string,
    buttonLabel: string,
    buttonPath: string,
}) {
    return (
        <div className="w-full flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-700">{title}</h1>
            <Button
                asChild
                variant="add"
            >
                <Link
                    href={buttonPath}
                    id={buttonId}
                >
                    {buttonLabel}
                </Link>
            </Button>
        </div>
    )
}

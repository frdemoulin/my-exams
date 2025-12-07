import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TableTitle({
    title,
    buttonId,
    buttonLabel,
    buttonPath
}: {
    title: string,
    buttonId?: string,
    buttonLabel?: string,
    buttonPath?: string,
}) {
    const showButton = buttonLabel && buttonPath;

    return (
        <div className="w-full flex justify-between items-baseline">
            <h1 className="text-2xl font-bold text-fg-brand">{title}</h1>
            {showButton ? (
                <Button
                    asChild
                    variant="success"
                >
                    <Link
                        href={buttonPath}
                        id={buttonId}
                    >
                        {buttonLabel}
                    </Link>
                </Button>
            ) : null}
        </div>
    )
}

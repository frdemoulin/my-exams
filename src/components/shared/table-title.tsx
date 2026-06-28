import { AddButton } from "@/components/shared/add-button";

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
                <AddButton href={buttonPath} id={buttonId}>
                    {buttonLabel}
                </AddButton>
            ) : null}
        </div>
    )
}

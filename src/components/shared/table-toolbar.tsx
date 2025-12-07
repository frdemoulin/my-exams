import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type TableToolbarProps = {
  title: string;
  pageFrom: number;
  pageTo: number;
  totalCount: number;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  addHref: string;
  addLabel: string;
  children?: React.ReactNode;
};

export function TableToolbar({
  title,
  pageFrom,
  pageTo,
  totalCount,
  placeholder,
  value,
  onChange,
  addHref,
  addLabel,
  children,
}: TableToolbarProps) {
  return (
    <div className="mb-4 flex flex-col gap-4 rounded-base border border-default bg-neutral-primary-soft p-4 shadow-xs">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h1 className="text-xl font-extrabold leading-tight text-fg-brand md:text-2xl">{title}</h1>
        <Button asChild size="sm" className="font-semibold gap-2">
          <Link href={addHref}>
            <Plus className="h-4 w-4" />
            {addLabel}
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="text-sm text-body">
          Affichage <span className="font-semibold text-heading">{pageFrom}</span> à{" "}
          <span className="font-semibold text-heading">{pageTo}</span> sur{" "}
          <span className="font-semibold text-heading">{totalCount}</span> entrées
        </div>

        <div className="flex w-full flex-col gap-2 md:flex-1 md:flex-row md:items-center md:justify-end md:gap-3">
          <div className="relative w-full md:max-w-[50%] md:flex-1">
            <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-muted-foreground">
              <Search className="h-4 w-4" />
            </span>
            <input
              className="h-10 w-full rounded-base border border-default bg-neutral-primary-soft ps-10 pe-3 text-sm text-body placeholder:text-body/70 shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand focus:ring-offset-1"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          {children ? <div className="flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}

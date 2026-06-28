import Link from "next/link";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AddButtonProps = Omit<ButtonProps, "children" | "variant" | "asChild"> & {
  children: React.ReactNode;
  href?: React.ComponentProps<typeof Link>["href"];
};

function FlowbitePlusIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-4 w-4 shrink-0", className)}
    >
      <path d="M10 4.75a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H5.5a.75.75 0 0 1 0-1.5h3.75V5.5a.75.75 0 0 1 .75-.75Z" />
    </svg>
  );
}

export function AddButton({
  children,
  className,
  href,
  ...props
}: AddButtonProps) {
  const content = (
    <>
      <FlowbitePlusIcon />
      {children}
    </>
  );

  if (href) {
    return (
      <Button
        asChild
        variant="success"
        className={cn("font-semibold", className)}
        {...props}
      >
        <Link href={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button
      variant="success"
      className={cn("font-semibold", className)}
      {...props}
    >
      {content}
    </Button>
  );
}

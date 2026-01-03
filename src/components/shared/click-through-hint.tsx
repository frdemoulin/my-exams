import { MousePointerClick } from 'lucide-react';

type ClickThroughHintProps = {
  text: string;
};

export function ClickThroughHint({ text }: ClickThroughHintProps) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-fg-brand">
        <MousePointerClick className="h-3 w-3" aria-hidden="true" />
      </span>
      {text}
    </span>
  );
}

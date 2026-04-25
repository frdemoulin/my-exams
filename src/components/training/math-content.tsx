import Image from 'next/image';
import katex from 'katex';
import 'katex/contrib/mhchem';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';

type MathContentProps = {
  value: string;
  className?: string;
};

type Segment =
  | { type: 'text'; value: string }
  | { type: 'math'; value: string; displayMode: boolean }
  | { type: 'image'; alt: string; src: string };

const isSafeImageSource = (value: string) => {
  return value.startsWith('/');
};

const parseImageSegment = (value: string, startIndex: number) => {
  if (!value.startsWith('![', startIndex)) return null;

  const altEnd = value.indexOf('](', startIndex + 2);
  if (altEnd < 0) return null;

  const srcEnd = value.indexOf(')', altEnd + 2);
  if (srcEnd < 0) return null;

  const alt = value.slice(startIndex + 2, altEnd).trim() || 'Illustration';
  const src = value.slice(altEnd + 2, srcEnd).trim();

  if (!src || !isSafeImageSource(src)) {
    return null;
  }

  return {
    segment: {
      type: 'image' as const,
      alt,
      src,
    },
    nextCursor: srcEnd + 1,
  };
};

const parseMathSegments = (value: string): Segment[] => {
  const segments: Segment[] = [];
  let cursor = 0;

  while (cursor < value.length) {
    const blockStart = value.indexOf('$$', cursor);
    const inlineStart = value.indexOf('$', cursor);
    const imageStart = value.indexOf('![', cursor);
    const nextStart = [blockStart, inlineStart, imageStart]
      .filter((index) => index >= 0)
      .sort((a, b) => a - b)[0];

    if (nextStart === undefined) {
      segments.push({ type: 'text', value: value.slice(cursor) });
      break;
    }

    if (nextStart > cursor) {
      segments.push({ type: 'text', value: value.slice(cursor, nextStart) });
    }

    if (nextStart === imageStart) {
      const imageSegment = parseImageSegment(value, nextStart);

      if (imageSegment) {
        segments.push(imageSegment.segment);
        cursor = imageSegment.nextCursor;
        continue;
      }
    }

    const isBlock = value.startsWith('$$', nextStart);
    const delimiter = isBlock ? '$$' : '$';
    const contentStart = nextStart + delimiter.length;
    const end = value.indexOf(delimiter, contentStart);

    if (end < 0) {
      segments.push({ type: 'text', value: value.slice(nextStart) });
      break;
    }

    segments.push({
      type: 'math',
      value: value.slice(contentStart, end),
      displayMode: isBlock,
    });
    cursor = end + delimiter.length;
  }

  return segments;
};

const renderText = (value: string) =>
  value.split('\n').map((line, index, lines) => (
    <Fragment key={`${index}-${line}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));

const shouldRenderAsBlockMath = (value: string, displayMode: boolean) => {
  if (displayMode) {
    return true;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return false;
  }

  const plusCount = (trimmedValue.match(/\+/g) ?? []).length;

  const hasReactionArrow =
    /\\(?:rightarrow|leftarrow|leftrightarrow|Rightarrow|to)\b|->|<=>/.test(
      trimmedValue
    ) || /\\ce\{.*(?:->|<=>).+\}/.test(trimmedValue);

  if (hasReactionArrow) {
    return false;
  }

  const relationCount = (trimmedValue.match(/=|\\approx|\\leq|\\geq|\\neq/g) ?? [])
    .length;

  if (relationCount === 0 || trimmedValue.length < 18) {
    return false;
  }

  const parenthesisCount = (trimmedValue.match(/\(/g) ?? []).length;
  const hasApproximation = /\\approx/.test(trimmedValue);

  return (
    relationCount > 1 || plusCount > 0 || parenthesisCount > 1 || hasApproximation
  );
};

const renderMath = (value: string, displayMode: boolean) => {
  const renderAsBlock = shouldRenderAsBlockMath(value, displayMode);
  const html = katex.renderToString(value, {
    displayMode: renderAsBlock,
    throwOnError: false,
    trust: false,
  });

  if (renderAsBlock) {
    return (
      <span
        className="my-3 block overflow-x-auto rounded-lg border border-border bg-neutral-primary-soft px-3 py-3 shadow-xs"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const renderImage = (alt: string, src: string) => {
  return (
    <span className="my-3 block overflow-hidden rounded-xl border border-border bg-background p-2">
      <span className="relative mx-auto block h-[220px] w-full max-w-3xl overflow-hidden rounded-lg md:h-[320px]">
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-contain"
        />
      </span>
      {alt ? (
        <span className="mt-2 block text-center text-xs text-muted-foreground">
          {alt}
        </span>
      ) : null}
    </span>
  );
};

export function MathContent({ value, className }: MathContentProps) {
  const segments = parseMathSegments(value);

  return (
    <span className={cn('leading-relaxed', className)}>
      {segments.map((segment, index) => (
        <Fragment key={`${segment.type}-${index}`}>
          {segment.type === 'text'
            ? renderText(segment.value)
            : segment.type === 'math'
              ? renderMath(segment.value, segment.displayMode)
              : renderImage(segment.alt, segment.src)}
        </Fragment>
      ))}
    </span>
  );
}

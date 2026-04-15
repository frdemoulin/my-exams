import katex from 'katex';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';

type MathContentProps = {
  value: string;
  className?: string;
};

type Segment =
  | { type: 'text'; value: string }
  | { type: 'math'; value: string; displayMode: boolean };

const parseMathSegments = (value: string): Segment[] => {
  const segments: Segment[] = [];
  let cursor = 0;

  while (cursor < value.length) {
    const blockStart = value.indexOf('$$', cursor);
    const inlineStart = value.indexOf('$', cursor);
    const nextStart = [blockStart, inlineStart]
      .filter((index) => index >= 0)
      .sort((a, b) => a - b)[0];

    if (nextStart === undefined) {
      segments.push({ type: 'text', value: value.slice(cursor) });
      break;
    }

    if (nextStart > cursor) {
      segments.push({ type: 'text', value: value.slice(cursor, nextStart) });
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

const renderMath = (value: string, displayMode: boolean) => {
  const html = katex.renderToString(value, {
    displayMode,
    throwOnError: false,
    trust: false,
  });

  if (displayMode) {
    return (
      <span
        className="my-3 block overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export function MathContent({ value, className }: MathContentProps) {
  const segments = parseMathSegments(value);

  return (
    <span className={cn('leading-relaxed', className)}>
      {segments.map((segment, index) => (
        <Fragment key={`${segment.type}-${index}`}>
          {segment.type === 'text'
            ? renderText(segment.value)
            : renderMath(segment.value, segment.displayMode)}
        </Fragment>
      ))}
    </span>
  );
}

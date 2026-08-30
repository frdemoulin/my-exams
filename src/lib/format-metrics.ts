export function formatCountMetric(
  value: number,
  total?: number | null,
): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "0";
  }
  const safeValue = Math.max(0, Math.round(value));
  if (typeof total === "number" && Number.isFinite(total) && total > 0) {
    const safeTotal = Math.round(total);
    return `${safeValue} / ${safeTotal}`;
  }
  return `${safeValue}`;
}

export function formatSingleDuration(seconds: number): string {
  if (typeof seconds !== "number" || !Number.isFinite(seconds) || seconds <= 0) {
    return "0 s";
  }
  const total = Math.round(seconds);
  const mins = Math.floor(total / 60);
  const secs = total % 60;

  if (mins === 0) {
    return `${secs} s`;
  }
  if (secs === 0) {
    return `${mins} min`;
  }
  const paddedSecs = String(secs).padStart(2, "0");
  return `${mins} min ${paddedSecs} s`;
}

export function formatDurationMetric(
  elapsedSeconds?: number | null,
  limitSeconds?: number | null,
): string {
  const safeElapsed =
    typeof elapsedSeconds === "number" && Number.isFinite(elapsedSeconds) && elapsedSeconds >= 0
      ? elapsedSeconds
      : null;

  if (safeElapsed === null) {
    return "";
  }

  const formattedElapsed = formatSingleDuration(safeElapsed);

  if (
    typeof limitSeconds === "number" &&
    Number.isFinite(limitSeconds) &&
    limitSeconds > 0
  ) {
    const formattedLimit = formatSingleDuration(limitSeconds);
    return `${formattedElapsed} / ${formattedLimit}`;
  }

  return formattedElapsed;
}

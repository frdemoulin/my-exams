"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";

interface ChapterQuizQuestionsExportButtonProps {
  disabled?: boolean;
  fallbackFilename: string;
  href: string;
}

const getFilenameFromDisposition = (contentDisposition: string | null) => {
  if (!contentDisposition) {
    return null;
  }

  const utf8Match = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
  if (utf8Match?.[1]) {
    return decodeURIComponent(utf8Match[1]);
  }

  const asciiMatch = contentDisposition.match(/filename=\"?([^\";]+)\"?/i);
  return asciiMatch?.[1] ?? null;
};

export function ChapterQuizQuestionsExportButton({
  disabled = false,
  fallbackFilename,
  href,
}: ChapterQuizQuestionsExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleClick = async () => {
    setIsExporting(true);

    try {
      const response = await fetch(href, {
        cache: "no-store",
        credentials: "same-origin",
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Export impossible");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const filename =
        getFilenameFromDisposition(response.headers.get("content-disposition")) ??
        fallbackFilename;
      const anchor = document.createElement("a");
      anchor.href = downloadUrl;
      anchor.download = filename;
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error(error);
      toast.error("Erreur pendant l'export Excel");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      disabled={disabled || isExporting}
      onClick={handleClick}
    >
      <Download className="h-4 w-4" />
      {isExporting ? "Export..." : "Exporter Excel"}
    </Button>
  );
}

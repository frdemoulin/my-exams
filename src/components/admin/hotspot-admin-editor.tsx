'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Target, MapPin, Image as ImageIcon, Info, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface HotspotAdminEditorProps {
  imageSrc: string;
  imageAlt: string;
  targetX: string;
  targetY: string;
  tolerance: string;
  targetLabel: string;
  onImageSrcChange: (value: string) => void;
  onImageAltChange: (value: string) => void;
  onTargetXChange: (value: string) => void;
  onTargetYChange: (value: string) => void;
  onToleranceChange: (value: string) => void;
  onTargetLabelChange: (value: string) => void;
  readOnly?: boolean;
}

export function HotspotAdminEditor({
  imageSrc,
  imageAlt,
  targetX,
  targetY,
  tolerance,
  targetLabel,
  onImageSrcChange,
  onImageAltChange,
  onTargetXChange,
  onTargetYChange,
  onToleranceChange,
  onTargetLabelChange,
  readOnly = false,
}: HotspotAdminEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverPoint, setHoverPoint] = useState<{ x: number; y: number } | null>(null);

  const numX = Number.parseFloat(targetX.replace(',', '.'));
  const numY = Number.parseFloat(targetY.replace(',', '.'));
  const numTol = Number.parseFloat(tolerance.replace(',', '.')) || 0.05;

  const hasValidTarget =
    Number.isFinite(numX) && numX >= 0 && numX <= 1 &&
    Number.isFinite(numY) && numY >= 0 && numY <= 1;

  const handleImageClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (readOnly || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const xRaw = (e.clientX - rect.left) / rect.width;
      const yRaw = (e.clientY - rect.top) / rect.height;

      const x = Math.max(0, Math.min(1, Math.round(xRaw * 10000) / 10000));
      const y = Math.max(0, Math.min(1, Math.round(yRaw * 10000) / 10000));

      onTargetXChange(String(x));
      onTargetYChange(String(y));
    },
    [readOnly, onTargetXChange, onTargetYChange]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (readOnly || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const xRaw = (e.clientX - rect.left) / rect.width;
      const yRaw = (e.clientY - rect.top) / rect.height;

      const x = Math.max(0, Math.min(1, Math.round(xRaw * 10000) / 10000));
      const y = Math.max(0, Math.min(1, Math.round(yRaw * 10000) / 10000));
      setHoverPoint({ x, y });
    },
    [readOnly]
  );

  const handleMouseLeave = useCallback(() => {
    setHoverPoint(null);
  }, []);

  return (
    <div className="space-y-5 rounded-xl border border-border bg-card p-4 md:p-5">
      <div className="flex items-center gap-2 pb-2 border-b border-border text-sm font-semibold text-heading">
        <Target className="w-4 h-4 text-brand" />
        <span>Configuration QZONE (Zone à pointer sur image)</span>
      </div>

      {/* Image URL & Description inputs */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="hotspot-image-src" className="text-xs font-semibold">
            URL de l&apos;image support *
          </Label>
          <div className="relative">
            <Input
              id="hotspot-image-src"
              value={imageSrc}
              onChange={(e) => onImageSrcChange(e.target.value)}
              placeholder="Ex: /uploads/mon-schema.png ou https://..."
              disabled={readOnly}
            />
          </div>
          <p className="text-[11px] text-muted-foreground">
            Lien relatif (dossier public/uploads) ou URL HTTP(S) absolue.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hotspot-image-alt" className="text-xs font-semibold">
            Texte alternatif / Légende
          </Label>
          <Input
            id="hotspot-image-alt"
            value={imageAlt}
            onChange={(e) => onImageAltChange(e.target.value)}
            placeholder="Ex. Représentation schématique d'une cellule"
            disabled={readOnly}
          />
        </div>
      </div>

      {/* Target parameters: X, Y, Tolerance, Label */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor="hotspot-target-x" className="text-xs font-semibold">
            Position X (0 à 1) *
          </Label>
          <Input
            id="hotspot-target-x"
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={targetX}
            onChange={(e) => onTargetXChange(e.target.value)}
            placeholder="0.50"
            disabled={readOnly}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hotspot-target-y" className="text-xs font-semibold">
            Position Y (0 à 1) *
          </Label>
          <Input
            id="hotspot-target-y"
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={targetY}
            onChange={(e) => onTargetYChange(e.target.value)}
            placeholder="0.50"
            disabled={readOnly}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hotspot-tolerance" className="text-xs font-semibold">
            Tolérance (Rayon 0.01-0.30)
          </Label>
          <Input
            id="hotspot-tolerance"
            type="number"
            step="0.01"
            min="0.01"
            max="0.30"
            value={tolerance}
            onChange={(e) => onToleranceChange(e.target.value)}
            placeholder="0.05"
            disabled={readOnly}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hotspot-target-label" className="text-xs font-semibold">
            Libellé de la zone (optionnel)
          </Label>
          <Input
            id="hotspot-target-label"
            value={targetLabel}
            onChange={(e) => onTargetLabelChange(e.target.value)}
            placeholder="Ex. Mitochondrie"
            disabled={readOnly}
          />
        </div>
      </div>

      {/* Visual Placement Picker & Preview */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium text-heading flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-brand" />
            Aperçu & Placement de la zone (Cliquez sur l&apos;image)
          </span>
          {hasValidTarget && (
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Cible définie à X: {Math.round(numX * 100)}%, Y: {Math.round(numY * 100)}% (Rayon: {Math.round(numTol * 100)}%)
            </span>
          )}
        </div>

        <div className="relative rounded-xl border border-border bg-gray-900/5 dark:bg-gray-900 overflow-hidden min-h-[160px] flex items-center justify-center">
          {!imageSrc.trim() ? (
            <div className="p-6 text-center text-xs text-muted-foreground flex flex-col items-center gap-2">
              <Info className="w-6 h-6 text-amber-500" />
              <span>Renseignez l&apos;URL d&apos;une image ci-dessus pour la prévisualiser et placer la zone cible.</span>
            </div>
          ) : (
            <div
              ref={containerRef}
              onClick={handleImageClick}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`relative w-full select-none ${
                readOnly ? 'cursor-default' : 'cursor-crosshair'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={imageAlt || 'Aperçu QZONE Admin'}
                className="w-full h-auto max-h-[450px] object-contain block mx-auto pointer-events-none rounded-lg"
              />

              {/* Expected Target Zone Circle & Marker */}
              {hasValidTarget && (
                <React.Fragment>
                  {/* Tolerance radius circle */}
                  <div
                    className="absolute rounded-full border-2 border-emerald-500 bg-emerald-500/25 pointer-events-none animate-pulse"
                    style={{
                      left: `${numX * 100}%`,
                      top: `${numY * 100}%`,
                      width: `${numTol * 200}%`,
                      height: `${numTol * 200}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                  {/* Center pin marker */}
                  <div
                    className="absolute z-20 pointer-events-none"
                    style={{
                      left: `${numX * 100}%`,
                      top: `${numY * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-600 border-2 border-white text-white flex items-center justify-center text-xs font-bold shadow-lg">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </React.Fragment>
              )}

              {/* Hover guide crosshair */}
              {!readOnly && hoverPoint && (
                <div
                  className="absolute z-10 pointer-events-none opacity-60"
                  style={{
                    left: `${hoverPoint.x * 100}%`,
                    top: `${hoverPoint.y * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="w-4 h-4 rounded-full border border-indigo-400 bg-indigo-400/20" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

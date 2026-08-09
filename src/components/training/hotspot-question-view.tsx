'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Target, RotateCcw, CheckCircle2, XCircle, MapPin, Info } from 'lucide-react';
import type {
  HotspotQuestion,
  HotspotPoint,
  EvaluationResult,
} from '@/core/questions/question.types';
import { QuestionFormatBadge } from '@/components/training/question-format-badge';

interface HotspotQuestionViewProps {
  question: HotspotQuestion;
  selectedPoint: HotspotPoint | null;
  onPointSelect?: (point: HotspotPoint | null) => void;
  readOnly?: boolean;
  evaluationResult?: EvaluationResult | null;
  showCorrection?: boolean;
}

export function HotspotQuestionView({
  question,
  selectedPoint,
  onPointSelect,
  readOnly = false,
  evaluationResult,
  showCorrection = false,
}: HotspotQuestionViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoverPoint, setHoverPoint] = useState<HotspotPoint | null>(null);

  const imageSrc = question.image?.src || '';
  const imageAlt = question.image?.alt || question.statement || 'Support visuel QZONE';
  const expectedZones = question.expectedZones || [];
  const defaultTolerance = question.defaultTolerance ?? 0.03;

  const handleImageClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      if (readOnly || !onPointSelect || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      const xRaw = (clientX - rect.left) / rect.width;
      const yRaw = (clientY - rect.top) / rect.height;

      // Clamp between 0 and 1
      const x = Math.max(0, Math.min(1, Math.round(xRaw * 10000) / 10000));
      const y = Math.max(0, Math.min(1, Math.round(yRaw * 10000) / 10000));

      onPointSelect({ x, y });
    },
    [readOnly, onPointSelect]
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

  const handleClearPoint = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!readOnly && onPointSelect) {
        onPointSelect(null);
      }
    },
    [readOnly, onPointSelect]
  );

  const isCorrect = evaluationResult?.status === 'correct';
  const isIncorrect = evaluationResult?.status === 'incorrect';

  return (
    <div className="space-y-4">
      {/* Question Header & Instructions */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
        <QuestionFormatBadge format="QZONE" />
        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          <Target className="w-3.5 h-3.5 text-indigo-500" />
          <span>Pointez la zone demandée sur le support visuel.</span>
        </div>
      </div>

      {/* Interactive Image Container */}
      <div className="relative rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-900/5 dark:bg-gray-900 overflow-hidden shadow-xs">
        {!imageSrc ? (
          <div className="p-8 text-center text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center gap-2">
            <Info className="w-8 h-8 text-amber-500" />
            <span>Aucune image associée à cette question QZONE.</span>
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
            style={{ touchAction: 'none' }}
          >
            {/* Base Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-auto max-h-[550px] object-contain block mx-auto pointer-events-none rounded-lg"
            />

            {/* Target Zones Overlay in Correction Mode */}
            {showCorrection &&
              expectedZones.map((zone) => {
                const tol = zone.tolerance ?? defaultTolerance;
                const leftPct = zone.x * 100;
                const topPct = zone.y * 100;

                return (
                  <React.Fragment key={zone.id || `zone-${zone.x}-${zone.y}`}>
                    {/* Expected Zone Target Radius Circle */}
                    <div
                      className="absolute rounded-full border-2 border-emerald-500 bg-emerald-500/20 pointer-events-none animate-pulse"
                      style={{
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                        width: `${tol * 200}%`,
                        height: `${tol * 200}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      title={zone.label || 'Zone attendue'}
                    />

                    {/* Expected Zone Center Pin */}
                    <div
                      className="absolute w-5 h-5 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-md font-bold text-[10px] pointer-events-none z-20"
                      style={{
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      ✓
                    </div>
                  </React.Fragment>
                );
              })}

            {/* Selected Point Marker */}
            {selectedPoint && (
              <div
                className={`absolute z-30 pointer-events-none transition-transform duration-75 ${
                  showCorrection
                    ? isCorrect
                      ? 'text-emerald-500'
                      : 'text-rose-500'
                    : 'text-indigo-600'
                }`}
                style={{
                  left: `${selectedPoint.x * 100}%`,
                  top: `${selectedPoint.y * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="relative flex items-center justify-center">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg ${
                      showCorrection
                        ? isCorrect
                          ? 'bg-emerald-500 border-white text-white'
                          : 'bg-rose-500 border-white text-white'
                        : 'bg-indigo-600 border-white text-white animate-bounce'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  {/* Target crosshair lines */}
                  <div className="absolute w-8 h-[1.5px] bg-indigo-500/60 dark:bg-indigo-400/60" />
                  <div className="absolute h-8 w-[1.5px] bg-indigo-500/60 dark:bg-indigo-400/60" />
                </div>
              </div>
            )}

            {/* Hover Guide crosshair when active */}
            {!readOnly && hoverPoint && !selectedPoint && (
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

      {/* Control bar / Reset point button */}
      {!readOnly && selectedPoint && (
        <div className="flex items-center justify-between px-3 py-2 bg-indigo-50/60 dark:bg-indigo-950/30 rounded-lg border border-indigo-100 dark:border-indigo-900/50 text-xs">
          <span className="text-indigo-700 dark:text-indigo-300 font-medium flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-indigo-500" />
            Zone sélectionnée : ({Math.round(selectedPoint.x * 100)}%, {Math.round(selectedPoint.y * 100)}%)
          </span>
          <button
            type="button"
            onClick={handleClearPoint}
            className="flex items-center gap-1 px-2.5 py-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-md font-medium transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Réinitialiser le point
          </button>
        </div>
      )}

      {/* Correction details banner */}
      {showCorrection && (
        <div
          className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
            isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300'
              : isIncorrect
              ? 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300'
              : 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300'
          }`}
        >
          {isCorrect ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          ) : isIncorrect ? (
            <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
          ) : (
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <div className="font-semibold">
              {isCorrect
                ? 'Zone correcte !'
                : isIncorrect
                ? 'Zone incorrecte.'
                : 'Question non répondue.'}
            </div>
            {expectedZones.length > 0 && (
              <p className="opacity-90">
                La zone attendue est matérialisée par le cercle vert sur le support visuel.
                {expectedZones[0]?.label ? ` (${expectedZones[0].label})` : ''}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

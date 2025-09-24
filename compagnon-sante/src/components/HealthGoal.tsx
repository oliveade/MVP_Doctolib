"use client";
import { Plus } from "lucide-react";
export default function HealthGoal({
  title,
  step,
  progress = 0,
  onPrimary,
}: {
  title: string;
  step: string;
  progress?: number;
  onPrimary: () => void;
}) {
  return (
    <div className="rounded-2xl p-4 bg-[#F3547A] text-white shadow-md">
      <h3 className="font-semibold">Objectif santé</h3>
      <div className="mt-1 text-sm opacity-90">{title}</div>
      <div className="text-xs opacity-90">• {step}</div>

      <div className="mt-3">
        <p className="text-sm mb-1">Votre objectif santé progresse !</p>
        <div className="h-2 w-full bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button
        onClick={onPrimary}
        className="mt-3 inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-white text-[#F3547A] font-semibold"
      >
        <Plus className="h-5 w-5" />
        Prendre rendez-vous
      </button>
    </div>
  );
}

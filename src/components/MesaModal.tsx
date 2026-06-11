import React from "react";
import { Session } from "../types";

interface MesaModalProps {
  session: Session | null;
  onClose: () => void;
}

export default function MesaModal({ session, onClose }: MesaModalProps) {
  if (!session) return null;

  const parts = session.participants
    ? session.participants.split(";").map((p) => p.trim()).filter(Boolean)
    : [];

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const hasYoutube = session.youtube && session.youtube.startsWith("http");

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#d0e8dc] flex flex-col">
        {/* Header */}
        <div className="bg-[#1B4332] p-6 text-white sticky top-0 z-10 flex flex-col gap-3">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-base font-bold leading-snug pr-4">
              {session.title}
            </h2>
            <button
              onClick={onClose}
              className="bg-white/15 hover:bg-white/30 text-white rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer transition-colors text-sm shrink-0"
              title="Fechar"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {session.date && (
              <span className="bg-white/10 text-[#95D5B2] px-3 py-1 rounded-full font-medium">
                {session.date} {session.time ? ` · ${session.time}` : ""}
              </span>
            )}
            {session.local && (
              <span className="bg-white/10 text-[#95D5B2] px-3 py-1 rounded-full font-medium">
                📍 {session.local}
              </span>
            )}
            {session.af_pillar && (
              <span className="bg-white/5 text-[#B7E4C7] px-3 py-1 rounded-full font-medium">
                🌿 {session.af_pillar.split(";")[0]}
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {session.organizers && (
            <div>
              <h4 className="text-[11px] font-bold text-[#2D6A4F] uppercase tracking-wider mb-1">
                Organizadores
              </h4>
              <p className="text-sm text-gray-700 font-medium">
                {session.organizers}
              </p>
              {session.org_category && (
                <span className="inline-block bg-[#f0f7f3] text-[#1B4332] text-xs font-semibold px-2 py-0.5 mt-1.5 rounded-md border border-[#d0e8dc]">
                  {session.org_category}
                </span>
              )}
            </div>
          )}

          {session.sinopse && (
            <div>
              <h4 className="text-[11px] font-bold text-[#2D6A4F] uppercase tracking-wider mb-1">
                Sinopse
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed bg-[#f9fcfa] p-4 rounded-xl border border-[#e8f5e9]">
                {session.sinopse}
              </p>
            </div>
          )}

          {session.decisions && (
            <div>
              <h4 className="text-[11px] font-bold text-[#2D6A4F] uppercase tracking-wider mb-1">
                Decisões e Ações Futuras
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed bg-emerald-50/50 p-4 rounded-xl border border-[#d0e8dc]">
                {session.decisions}
              </p>
            </div>
          )}

          {session.cop30_pillars && (
            <div>
              <h4 className="text-[11px] font-bold text-[#2D6A4F] uppercase tracking-wider mb-1.5">
                Pilares COP30
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {session.cop30_pillars.split(";").map((pil, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f0f7f3] border border-[#d0e8dc] text-xs text-[#1B4332] py-1 px-3 rounded-full font-medium"
                  >
                    {pil.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {parts.length > 0 && (
            <div>
              <h4 className="text-[11px] font-bold text-[#2D6A4F] uppercase tracking-wider mb-2">
                Participantes ({parts.length})
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {parts.map((part, index) => (
                  <span
                    key={index}
                    className="bg-[#f0f7f3] border border-[#d0e8dc] rounded-full px-3 py-1 text-xs text-[#1B4332] font-medium"
                  >
                    {part}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasYoutube && (
            <div className="pt-2">
              <a
                href={session.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4A017] hover:bg-amber-600 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-colors shadow-sm shrink-0"
              >
                ▶ Assistir no YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

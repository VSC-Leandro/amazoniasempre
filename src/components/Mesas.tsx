import React, { useState, useMemo } from "react";
import { SESSIONS, THEMES } from "../data";
import { Session } from "../types";

interface MesasProps {
  onSelectSession: (session: Session) => void;
}

export default function Mesas({ onSelectSession }: MesasProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedLocal, setSelectedLocal] = useState("");
  const [selectedExtra, setSelectedExtra] = useState("");

  const filteredSessions = useMemo(() => {
    return SESSIONS.filter((session) => {
      const q = searchTerm.toLowerCase().trim();
      const text = `${session.title} ${session.organizers} ${session.participants}`.toLowerCase();
      
      const matchSearch = !q || text.includes(q);
      const matchTheme = !selectedTheme || session.af_pillar.includes(selectedTheme);
      const matchLocal = !selectedLocal || session.local === selectedLocal;
      const matchExtra =
        !selectedExtra ||
        (selectedExtra === "rel"
          ? session.relatoria?.toLowerCase().includes("sim")
          : session.youtube?.startsWith("http"));

      return matchSearch && matchTheme && matchLocal && matchExtra;
    });
  }, [searchTerm, selectedTheme, selectedLocal, selectedExtra]);

  return (
    <div className="space-y-6">
      {/* Search and Filters Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-3 bg-[#fdfdfd] p-4 rounded-xl border border-[#d0e8dc] shadow-xs">
        <div className="lg:col-span-2">
          <input
            id="srch"
            type="text"
            placeholder="🔍 Buscar por título, organizador ou participante…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-[#c0ddd0] rounded-lg px-3 py-2 outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] text-sm text-[#1B4332] bg-white transition-all"
          />
        </div>

        <div>
          <select
            id="fTheme"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="w-full border border-[#c0ddd0] rounded-lg px-3 py-2 outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] text-sm text-[#1B4332] bg-white transition-all"
          >
            <option value="">Todos os pilares</option>
            {THEMES.map((theme, i) => (
              <option key={i} value={theme}>
                {theme.length > 45 ? `${theme.slice(0, 45)}…` : theme}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            id="fLocal"
            value={selectedLocal}
            onChange={(e) => setSelectedLocal(e.target.value)}
            className="w-full border border-[#c0ddd0] rounded-lg px-3 py-2 outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] text-sm text-[#1B4332] bg-white transition-all"
          >
            <option value="">Todos os locais</option>
            <option value="Auditorio">Auditório</option>
            <option value="Chalet">Chalé</option>
          </select>
        </div>

        <div>
          <select
            id="fExtra"
            value={selectedExtra}
            onChange={(e) => setSelectedExtra(e.target.value)}
            className="w-full border border-[#c0ddd0] rounded-lg px-3 py-2 outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] text-sm text-[#1B4332] bg-white transition-all"
          >
            <option value="">Todos</option>
            <option value="rel">Com relatoria</option>
            <option value="yt">Com YouTube</option>
          </select>
        </div>
      </div>

      {/* Info summary */}
      <div className="flex justify-between items-center text-xs text-gray-500 font-medium px-1">
        <span>
          Mostrando <strong className="text-[#2D6A4F]">{filteredSessions.length}</strong> de{" "}
          <strong className="text-[#1B4332]">{SESSIONS.length}</strong> mesas disponíveis
        </span>
      </div>

      {/* Sessions Grid */}
      {filteredSessions.length === 0 ? (
        <div className="bg-white border border-[#d0e8dc] text-center p-12 rounded-xl">
          <div className="text-3xl mb-2">🔍</div>
          <h3 className="text-sm font-semibold text-[#1B4332] mb-1">Nenhuma mesa encontrada</h3>
          <p className="text-xs text-gray-400">Tente ajustar seus termos de pesquisa ou filtros.</p>
        </div>
      ) : (
        <div id="sessions-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSessions.map((session) => {
            const hasYt = session.youtube?.startsWith("http");
            const hasRel = session.relatoria?.toLowerCase().includes("sim");
            const pillar = session.af_pillar?.split(";")[0]?.trim() || "";

            return (
              <div
                key={session.id}
                onClick={() => onSelectSession(session)}
                className="bg-white border border-[#d0e8dc] rounded-xl p-4 cursor-pointer hover:shadow-md hover:translate-y-[-1px] active:translate-y-0 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-semibold text-xs text-[#1B4332] tracking-tight leading-snug line-clamp-3">
                      {session.title}
                    </h3>
                    <span className="text-[#95D5B2] text-sm shrink-0">›</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {session.date && (
                      <span className="text-[10px] bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md font-medium">
                        {session.date}
                      </span>
                    )}
                    {session.local && (
                      <span className="text-[10px] bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md font-medium">
                        {session.local}
                      </span>
                    )}
                    {pillar && (
                      <span className="text-[10px] bg-[#f0f7f3] border border-[#d0e8dc] text-[#1B4332] px-2 py-0.5 rounded-md font-semibold truncate max-w-[150px]">
                        {pillar}
                      </span>
                    )}
                    {hasYt && (
                      <span className="text-[10px] bg-red-50 border border-red-100 text-red-600 px-2 py-0.5 rounded-md font-semibold">
                        ▶ YouTube
                      </span>
                    )}
                    {hasRel && (
                      <span className="text-[10px] bg-emerald-50 border border-emerald-100 text-[#2D6A4F] px-2 py-0.5 rounded-md font-semibold">
                        📋 Relatado
                      </span>
                    )}
                  </div>
                </div>

                {session.organizers && (
                  <div className="text-[10px] text-gray-400 mt-4 border-t border-[#f0f7f3] pt-2 truncate font-medium">
                    Org: {session.organizers}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

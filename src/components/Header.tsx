import React from "react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  username: string;
  onLogout: () => void;
}

export default function Header({ activeTab, setActiveTab, username, onLogout }: HeaderProps) {
  return (
    <header className="bg-white border-b border-[#d0e8dc] py-4 shadow-xs sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Title and Badge */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">🌿</span>
          <div className="space-y-0.5">
            <h1 className="text-lg font-black text-[#1B4332] tracking-tight">
              Amazônia Sempre
            </h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Painel de Informações & Relatórios · COP30 Belém
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1.5 bg-[#f0f7f3] p-1 rounded-xl border border-[#d0e8dc]">
          <button
            onClick={() => setActiveTab("mesas")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "mesas"
                ? "bg-[#2D6A4F] text-white shadow-xs"
                : "text-[#1B4332] hover:bg-white/50"
            }`}
          >
            Mesas
          </button>
          <button
            onClick={() => setActiveTab("participantes")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "participantes"
                ? "bg-[#2D6A4F] text-white shadow-xs"
                : "text-[#1B4332] hover:bg-white/50"
            }`}
          >
            Participantes
          </button>
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "dashboard"
                ? "bg-[#2D6A4F] text-white shadow-xs"
                : "text-[#1B4332] hover:bg-white/50"
            }`}
          >
            Dashboard
          </button>
        </div>

        {/* User Info and Logout */}
        <div className="flex items-center gap-2 text-xs">
          <div className="text-right sr-only sm:block">
            <p className="text-[10px] text-gray-400 font-semibold uppercase">Conectado como</p>
            <p className="font-bold text-[#1B4332]">{username}</p>
          </div>
          <button
            id="logout"
            onClick={onLogout}
            className="bg-red-50 hover:bg-red-100/85 border border-red-200 text-red-650 px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-bold shrink-0 text-[11px]"
            title="Sair do painel"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

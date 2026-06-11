import React, { useState } from "react";
import {
  ORG_COUNT,
  INST_COUNT,
  PART_COUNT,
  INTERVIEWS,
  NETWORKS,
  DONORS,
  PUBS,
  PART_CAT,
  PART_CTY,
  ORG_CAT,
  ORG_CTY,
  AF_PILLARS,
  AF_SUBS,
  COP30_PIL
} from "../data";

export default function Dashboard() {
  const [activeSubTab, setActiveSubTab] = useState("geral");

  const renderGeral = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Participantes por Categoria (%)
          </h3>
          <div className="space-y-3.5">
            {Object.entries(PART_CAT).map(([name, val], idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-gray-700 font-semibold">
                  <span>{name}</span>
                  <span className="text-[#2D6A4F]">{val}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2D6A4F] h-full rounded-full transition-all duration-500"
                    style={{ width: `${val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Organizadores por Categoria (%)
          </h3>
          <div className="space-y-3.5">
            {Object.entries(ORG_CAT).map(([name, val], idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-gray-700 font-semibold">
                  <span>{name}</span>
                  <span className="text-[#2D6A4F]">{val}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#52B788] h-full rounded-full transition-all duration-500"
                    style={{ width: `${val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Participantes por País de Origem
          </h3>
          <div className="space-y-3">
            {Object.entries(PART_CTY).slice(0, 10).map(([name, val], idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-gray-600 font-medium">
                  <span className="truncate max-w-[200px]">{name}</span>
                  <span className="text-[#2D6A4F] font-bold">{val}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#74C69D] h-full rounded-full"
                    style={{ width: `${val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Organizadores por Sede da Entidade
          </h3>
          <div className="space-y-3">
            {Object.entries(ORG_CTY).slice(0, 10).map(([name, val], idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-gray-600 font-medium">
                  <span className="truncate max-w-[200px]">{name}</span>
                  <span className="text-[#2D6A4F] font-bold">{val}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#40916C] h-full rounded-full"
                    style={{ width: `${val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderTematica = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Pilares Amazon Forever (%)
          </h3>
          <div className="space-y-4">
            {AF_PILLARS.map((p, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-gray-700 font-semibold">
                  <span className="truncate max-w-[180px]" title={p.name}>
                    {p.name}
                  </span>
                  <span className="text-[#2D6A4F]">{p.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2D6A4F] h-full rounded-full"
                    style={{ width: `${p.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Sub-temas Amazon Forever (%)
          </h3>
          <div className="space-y-4">
            {AF_SUBS.map((p, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-gray-700 font-semibold">
                  <span className="truncate max-w-[180px]" title={p.name}>
                    {p.name}
                  </span>
                  <span className="text-[#52B788]">{p.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#52B788] h-full rounded-full"
                    style={{ width: `${p.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs md:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Pilares da COP30 Belém (%)
          </h3>
          <div className="space-y-3.5 max-h-[350px] overflow-y-auto pr-1">
            {COP30_PIL.map((p, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-gray-700 font-semibold">
                  <span className="truncate max-w-[180px]" title={p.name}>
                    {p.name}
                  </span>
                  <span className="text-[#1B4332]">{p.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#74C69D] h-full rounded-full"
                    style={{ width: `${p.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderEntidades = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Organizadores Frequentes (Nº Mesas)
          </h3>
          <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1">
            {ORG_COUNT.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#d0e8dc] transition-all"
              >
                <span className="text-xs text-gray-700 font-semibold truncate max-w-[200px]" title={item.name}>
                  {item.name}
                </span>
                <span className="bg-[#f0f7f3] text-[#1B4332] font-semibold text-xs px-2.5 py-1 rounded-full border border-[#d0e8dc]">
                  {item.count} {item.count === 1 ? "mesa" : "mesas"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Instituições Frequentes (Todos Papéis)
          </h3>
          <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1">
            {INST_COUNT.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#d0e8dc] transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-semibold text-[11px] w-5 text-right">{idx + 1}.</span>
                  <span className="text-xs text-gray-700 font-semibold truncate max-w-[180px]" title={item.name}>
                    {item.name}
                  </span>
                </div>
                <span className="bg-emerald-50 text-[#2D6A4F] font-semibold text-xs px-2 py-0.5 rounded-full border border-emerald-100">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs">
          <h3 className="text-sm font-bold text-[#1B4332] mb-4 border-b border-[#f0f7f3] pb-2">
            Participantes em Múltiplas Mesas (2+)
          </h3>
          <div className="space-y-2.5 max-h-[400px] overflow-y-auto pr-1">
            {PART_COUNT.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#d0e8dc] transition-all"
              >
                <span className="text-xs text-[#2D6A4F] font-semibold truncate max-w-[180px]">
                  {item.name}
                </span>
                <span className="bg-[#D4A017]/10 text-[#cda01b] font-bold text-xs px-2.5 py-0.5 rounded-full border border-[#D4A017]/20">
                  {item.count} mesas
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderRedes = () => {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#1B4332] border-b border-[#f0f7f3] pb-2 flex gap-1.5 items-center">
              <span>🏦</span> Redes de Finanças
            </h3>
            <div className="space-y-2">
              {NETWORKS.finance.map((net, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-xs text-gray-700 font-medium">
                  {net}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#1B4332] border-b border-[#f0f7f3] pb-2 flex gap-1.5 items-center">
              <span>📖</span> Redes de Política & Pesquisa
            </h3>
            <div className="space-y-2">
              {NETWORKS.policy.map((net, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 p-2.5 rounded-xl text-xs text-gray-700 font-medium">
                  {net}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#1B4332] border-b border-[#f0f7f3] pb-2 flex gap-1.5 items-center">
              <span>🤝</span> Parcerias Estratégicas
            </h3>
            <div className="space-y-2">
              {NETWORKS.strategic.map((net, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-xs text-gray-700 font-medium">
                  {net}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-[#1B4332] border-b border-[#f0f7f3] pb-2 flex gap-1.5 items-center">
            <span>📚</span> Publicações Lançadas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PUBS.map((pub, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-4 rounded-xl space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-gray-800 line-clamp-2 leading-relaxed">
                    {pub.title}
                  </h4>
                  <p className="text-[10px] text-gray-400">Editor: {pub.org}</p>
                </div>
                {pub.link && (
                  <div className="pt-2">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-[#2D6A4F] hover:text-[#1B4332] font-semibold text-[11px]"
                    >
                      Ver Publicação ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-2xl p-5 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-[#1B4332] border-b border-[#f0f7f3] pb-2">
            Doadores & Programas de Financiamento
          </h3>
          <div className="space-y-3.5 max-h-[400px] overflow-y-auto pr-1">
            {DONORS.map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h4 className="text-xs font-bold text-[#2D6A4F]">
                  {item.program}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  <strong className="text-gray-400 font-medium">Balanço / Parceiros:</strong> {item.partners}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderEntrevistas = () => {
    return (
      <div className="space-y-4 animate-fade-in">
        <div className="bg-emerald-50 text-[#1B4332] border border-emerald-100 p-4 rounded-2xl">
          <p className="text-xs leading-relaxed font-small">
            Mapeamento analítico de instituições e entrevistas de alta densidade técnica agrupadas pelos pilares da bioeconomia e cidades resilientes do programa <strong>Amazon Forever</strong>:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INTERVIEWS.map((intr, idx) => (
            <div key={idx} className="bg-white border border-[#d0e8dc] rounded-xl p-4 md:p-5 flex flex-col justify-between hover:shadow-xs transition-shadow">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="bg-[#f0f7f3] text-[#1B4332] text-[10px] font-bold px-2 py-0.5 rounded border border-[#d0e8dc] uppercase tracking-wider">
                    {intr.pillar.split(";")[0]}
                  </span>
                  <span className="text-gray-400 text-xs">#{idx + 1}</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-gray-800 leading-relaxed">
                    Event: "{intr.event}"
                  </h4>
                  <p className="text-xs text-gray-600 font-medium">
                    Instituição: <strong>{intr.institution}</strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#f0f7f3] text-[10px]">
                <span className="bg-[#fcf7ed] border border-[#f5ebdb] text-[#bda017] px-2 py-0.5 rounded-md font-medium">
                  {intr.category}
                </span>
                <span className="bg-[#f0f3fd] border border-[#e0e3fd] text-gray-500 px-2 py-0.5 rounded-md font-semibold">
                  {intr.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Analytics Main Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-1">
        <div className="bg-gradient-to-br from-emerald-550 to-emerald-25 border border-[#d0e8dc] rounded-xl p-4 text-center space-y-1.5">
          <div className="text-2xl">🌿</div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Mesas</p>
          <p className="text-2xl font-black text-[#1B4332]">126</p>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-xl p-4 text-center space-y-1.5 animate-fade-in">
          <div className="text-2xl">👥</div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Membros</p>
          <p className="text-2xl font-black text-[#2D6A4F]">481</p>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-xl p-4 text-center space-y-1.5">
          <div className="text-2xl">⚡</div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Entidades</p>
          <p className="text-2xl font-black text-[#1B4332]">206</p>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-xl p-4 text-center space-y-1.5">
          <div className="text-2xl">📋</div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Relatorias</p>
          <p className="text-2xl font-black text-[#2D6A4F]">Sim</p>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-xl p-4 text-center space-y-1.5">
          <div className="text-2xl">📺</div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Videos</p>
          <p className="text-2xl font-black text-[#2D6A4F]">YT</p>
        </div>

        <div className="bg-white border border-[#d0e8dc] rounded-xl p-4 text-center space-y-1.5 col-span-2 sm:col-span-1">
          <div className="text-2xl">🌍</div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Países</p>
          <p className="text-2xl font-black text-[#1B4332]">12+</p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#d0e8dc] pb-2">
        <button
          onClick={() => setActiveSubTab("geral")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === "geral"
              ? "bg-[#1B4332] text-white"
              : "text-[#2D6A4F] hover:bg-[#f0f7f3]"
          }`}
        >
          Visão Geral
        </button>
        <button
          onClick={() => setActiveSubTab("tematica")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === "tematica"
              ? "bg-[#1B4332] text-white"
              : "text-[#2D6A4F] hover:bg-[#f0f7f3]"
          }`}
        >
          Temática
        </button>
        <button
          onClick={() => setActiveSubTab("entidades")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === "entidades"
              ? "bg-[#1B4332] text-white"
              : "text-[#2D6A4F] hover:bg-[#f0f7f3]"
          }`}
        >
          Entidades
        </button>
        <button
          onClick={() => setActiveSubTab("redes")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === "redes"
              ? "bg-[#1B4332] text-white"
              : "text-[#2D6A4F] hover:bg-[#f0f7f3]"
          }`}
        >
          Redes & Doadores
        </button>
        <button
          onClick={() => setActiveSubTab("entrevistas")}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === "entrevistas"
              ? "bg-[#1B4332] text-white"
              : "text-[#2D6A4F] hover:bg-[#f0f7f3]"
          }`}
        >
          Mapeamento Técnico
        </button>
      </div>

      {/* Subtab Router Rendering */}
      <div>
        {activeSubTab === "geral" && renderGeral()}
        {activeSubTab === "tematica" && renderTematica()}
        {activeSubTab === "entidades" && renderEntShared().includes(activeSubTab) ? null : activeSubTab === "entidades" ? renderEntidades() : null}
        {activeSubTab === "redes" && renderRedes()}
        {activeSubTab === "entrevistas" && renderEntrevistas()}
      </div>
    </div>
  );

  function renderEntShared() {
    return ["none"];
  }
}

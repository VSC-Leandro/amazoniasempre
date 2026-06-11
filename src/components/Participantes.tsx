import React, { useState, useMemo } from "react";
import { PARTS } from "../data";

export default function Participantes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const categories = useMemo(() => {
    return [...new Set(PARTS.map((p) => p.category).filter(Boolean))].sort();
  }, []);

  const filteredParticipants = useMemo(() => {
    return PARTS.filter((p) => {
      const q = searchTerm.toLowerCase().trim();
      const text = `${p.name} ${p.institution} ${p.country}`.toLowerCase();
      
      const matchSearch = !q || text.includes(q);
      const matchCategory = !selectedCategory || p.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Reset pagination if search or filter changes
  const paginatedParticipants = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredParticipants.slice(start, start + itemsPerPage);
  }, [filteredParticipants, currentPage]);

  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage) || 1;

  const handlePageChange = (p: number) => {
    if (p >= 1 && p <= totalPages) {
      setCurrentPage(p);
    }
  };

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };

  const handleCategoryChange = (val: string) => {
    setSelectedCategory(val);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Search and Category Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#fdfdfd] p-4 rounded-xl border border-[#d0e8dc] shadow-xs">
        <div className="md:col-span-2">
          <input
            id="srch-parts"
            type="text"
            placeholder="🔍 Buscar participante por nome, instituição ou país…"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full border border-[#c0ddd0] rounded-lg px-3 py-2 outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] text-sm text-[#1B4332] bg-white transition-all"
          />
        </div>

        <div>
          <select
            id="fCat-parts"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full border border-[#c0ddd0] rounded-lg px-3 py-2 outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] text-sm text-[#1B4332] bg-white transition-all"
          >
            <option value="">Todas as categorias</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 font-medium px-1">
        <span>
          Mostrando <strong className="text-[#2D6A4F]">{filteredParticipants.length}</strong> de{" "}
          <strong className="text-[#1B4332]">{PARTS.length}</strong> participantes
        </span>
      </div>

      {/* Participants Table */}
      {filteredParticipants.length === 0 ? (
        <div className="bg-white border border-[#d0e8dc] text-center p-12 rounded-xl">
          <div className="text-3xl mb-2">🔍</div>
          <h3 className="text-sm font-semibold text-[#1B4332] mb-1">Nenhum participante encontrado</h3>
          <p className="text-xs text-gray-400">Tente ajustar seus termos de pesquisa ou filtros.</p>
        </div>
      ) : (
        <div className="bg-white border border-[#d0e8dc] rounded-2xl shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1B4332] text-white border-b border-[#112a1f]">
                  <th className="py-3 px-4 font-bold tracking-tight">Nome</th>
                  <th className="py-3 px-4 font-bold tracking-tight">Instituição</th>
                  <th className="py-3 px-4 font-bold tracking-tight">Categoria</th>
                  <th className="py-3 px-4 font-bold tracking-tight col-country">País</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eaf4ef]">
                {paginatedParticipants.map((p, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#f6fcf8] text-gray-700 transition-colors"
                  >
                    <td className="py-3 px-4 font-semibold text-[#1B4332]">
                      {p.name}
                    </td>
                    <td className="py-3 px-4 text-gray-600">
                      {p.institution || "-"}
                    </td>
                    <td className="py-3 px-4">
                      {p.category ? (
                        <span className="inline-block bg-[#f0f7f3] border border-[#d0e8dc] text-[#2D6A4F] font-semibold text-[10px] px-2.5 py-0.5 rounded-full">
                          {p.category}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-500 font-medium col-country">
                      {p.country || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Simple Elegant Pagination */}
          {totalPages > 1 && (
            <div className="bg-white border-t border-[#d0e8dc] py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-gray-400 font-medium">
                Página {currentPage} de {totalPages}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1.5 rounded-lg border border-[#c0ddd0] text-xs font-semibold text-[#1B4332] transition-colors ${
                    currentPage === 1
                      ? "opacity-40 cursor-not-allowed"
                      : "bg-white hover:bg-[#f0f7f3] cursor-pointer"
                  }`}
                >
                  Anterior
                </button>
                <div className="flex gap-1">
                  {[...Array(totalPages)].map((_, idx) => {
                    const pageNo = idx + 1;
                    // Render page button or ellipsis if page list is long
                    if (
                      pageNo === 1 ||
                      pageNo === totalPages ||
                      (pageNo >= currentPage - 1 && pageNo <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={idx}
                          onClick={() => handlePageChange(pageNo)}
                          className={`w-8 h-8 rounded-lg text-xs font-semibold flex items-center justify-center border transition-colors ${
                            currentPage === pageNo
                              ? "bg-[#2D6A4F] text-white border-[#2D6A4F]"
                              : "bg-white border-[#c0ddd0] text-[#1B4332] hover:bg-[#f0f7f3] cursor-pointer"
                          }`}
                        >
                          {pageNo}
                        </button>
                      );
                    } else if (
                      pageNo === currentPage - 2 ||
                      pageNo === currentPage + 2
                    ) {
                      return (
                        <span
                          key={idx}
                          className="w-8 h-8 flex items-center justify-center text-xs text-gray-400"
                        >
                          …
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1.5 rounded-lg border border-[#c0ddd0] text-xs font-semibold text-[#1B4332] transition-colors ${
                    currentPage === totalPages
                      ? "opacity-40 cursor-not-allowed"
                      : "bg-white hover:bg-[#f0f7f3] cursor-pointer"
                  }`}
                >
                  Próxima
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

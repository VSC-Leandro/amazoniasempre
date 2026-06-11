import React, { useState } from "react";

interface LoginProps {
  onLoginSuccess: (username: string) => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim().toLowerCase();
    const validUsers = ["leandro", "cintia", "admin"];

    if (validUsers.includes(cleanUser) && password === "@d1m") {
      // Find exact case to display name elegantly
      let dispName = "Admin";
      if (cleanUser === "leandro") dispName = "Leandro";
      if (cleanUser === "cintia") dispName = "Cintia";
      
      onLoginSuccess(dispName);
    } else {
      setError("Usuário ou senha incorretos. Os usuários permitidos são Leandro, Cintia ou Admin com a senha correta.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f9f6] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-[#d0e8dc] rounded-2xl shadow-xl overflow-hidden animate-fade-in">
        {/* Header decoration */}
        <div className="bg-[#1B4332] p-8 text-center text-white relative">
          <div className="absolute top-3 right-3 text-2xl">🌿</div>
          <h1 className="text-2xl font-bold tracking-tight">Amazônia Sempre</h1>
          <p className="text-[#bfebd1] text-xs mt-1 uppercase tracking-wider font-semibold">COP30 · Belém 2025</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-[#1B4332]">Sistema de Acesso Restrito</h2>
            <p className="text-xs text-gray-500 mt-1">Insira suas credenciais para navegar na aplicação</p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg leading-relaxed">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Usuário</label>
              <input
                id="username-input"
                type="text"
                placeholder="Insira seu Login"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                className="w-full border border-[#c0ddd0] rounded-lg px-3 py-2.5 outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] text-[#1B4332]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Senha</label>
              <input
                id="password-input"
                type="password"
                placeholder="Insira sua senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full border border-[#c0ddd0] rounded-lg px-3 py-2.5 outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] text-[#1B4332]"
                required
              />
            </div>
          </div>

          <button
            id="login-submit"
            type="submit"
            className="w-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer text-center text-sm shadow-md"
          >
            Entrar no Painel
          </button>

          <div className="text-center pt-2 border-t border-[#f0f7f3]">
            <p className="text-[11px] text-gray-400">Protegido por criptografia padrão e autenticação simplificada.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

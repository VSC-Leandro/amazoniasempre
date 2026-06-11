import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Mesas from "./components/Mesas";
import Participantes from "./components/Participantes";
import Dashboard from "./components/Dashboard";
import MesaModal from "./components/MesaModal";
import { Session } from "./types";

export default function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("mesas");
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  // Restore session from localStorage on initialization
  useEffect(() => {
    const savedUser = localStorage.getItem("amazonia_user");
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  const handleLoginSuccess = (user: string) => {
    localStorage.setItem("amazonia_user", user);
    setUsername(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("amazonia_user");
    setUsername(null);
    setActiveTab("mesas");
  };

  // If not logged in, show login page exclusively (no background app rendering)
  if (!username) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#f4f9f6] flex flex-col text-gray-800 antialiased font-sans transition-all">
      {/* Header with Nav Bar & Logout option */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        username={username}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 py-6 pb-12">
        {activeTab === "mesas" && (
          <div className="animate-fade-in">
            <Mesas onSelectSession={setSelectedSession} />
          </div>
        )}

        {activeTab === "participantes" && (
          <div className="animate-fade-in">
            <Participantes />
          </div>
        )}

        {activeTab === "dashboard" && (
          <div className="animate-fade-in">
            <Dashboard />
          </div>
        )}
      </main>

      {/* Overlays / Modals */}
      {selectedSession && (
        <MesaModal
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
        />
      )}
    </div>
  );
}

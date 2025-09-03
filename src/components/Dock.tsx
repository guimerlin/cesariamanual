"use client"

import { MessageCircle, Navigation, Package, Handshake, Search } from "lucide-react"
import type { AppKey } from "../lib/ui-store"

const apps = [
  { key: "conversas" as const, icon: MessageCircle, label: "Conversas", color: "#FF8C00" },
  { key: "navegacao" as const, icon: Navigation, label: "Navegação", color: "#FFD700" },
  { key: "produtos" as const, icon: Package, label: "Produtos", color: "#FF8C00" },
  { key: "convenios" as const, icon: Handshake, label: "Convênios", color: "#FFD700" },
]

export default function Dock({
  activeApp,
  onOpen,
  onOpenPalette,
}: {
  activeApp: AppKey
  onOpen: (key: Exclude<AppKey, "palette" | null>) => void
  onOpenPalette: () => void
}) {
  return (
    <div className="flex items-center gap-2 p-3 border-[3px] border-black bg-white shadow-[8px_8px_0_0_#000] rounded-xl">
      {apps.map((app) => {
        const Icon = app.icon
        const isActive = activeApp === app.key
        return (
          <button
            key={app.key}
            onClick={() => onOpen(app.key)}
            className={`
              w-14 h-14 rounded-xl border-[3px] border-black flex items-center justify-center
              transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#000]
              ${isActive ? "translate-y-[-2px] shadow-[4px_4px_0_0_#000]" : "shadow-[2px_2px_0_0_#000]"}
            `}
            style={{ backgroundColor: isActive ? app.color : "white" }}
            title={app.label}
          >
            <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-black"}`} />
          </button>
        )
      })}

      <div className="w-px h-8 bg-black mx-1" />

      <button
        onClick={onOpenPalette}
        className="w-14 h-14 rounded-xl border-[3px] border-black bg-white shadow-[2px_2px_0_0_#000] flex items-center justify-center transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#000]"
        title="Buscar (Cmd+K)"
      >
        <Search className="w-6 h-6" />
      </button>
    </div>
  )
}

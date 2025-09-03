"use client"

import { useEffect, useState } from "react"
import { MessageCircle, Navigation, Package, Handshake, RotateCcw } from "lucide-react"
import type { AppKey } from "../lib/ui-store"

const commands = [
  { key: "conversas" as const, icon: MessageCircle, label: "Seção de Conversas", color: "#FF8C00" },
  { key: "navegacao" as const, icon: Navigation, label: "Navegação do Sistema", color: "#FFD700" },
  { key: "produtos" as const, icon: Package, label: "Transferência de Produtos", color: "#FF8C00" },
  { key: "convenios" as const, icon: Handshake, label: "Consulta de Convênios", color: "#FFD700" },
]

export default function CommandPalette({
  open,
  onOpenChange,
  onAction,
  onReset,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAction: (key: Exclude<AppKey, "palette" | null>) => void
  onReset: () => void
}) {
  const [search, setSearch] = useState("")

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onOpenChange])

  useEffect(() => {
    if (!open) setSearch("")
  }, [open])

  const filtered = commands.filter((cmd) => cmd.label.toLowerCase().includes(search.toLowerCase()))

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50">
      <div className="w-full max-w-lg mx-4 border-[3px] border-black bg-white shadow-[10px_10px_0_0_#000] rounded-lg overflow-hidden">
        <div className="p-4 border-b-[3px] border-black" style={{ backgroundColor: "#FFF8DC" }}>
          <input
            type="text"
            placeholder="Buscar seções do manual..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border-[3px] border-black rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400"
            autoFocus
          />
        </div>

        <div className="max-h-80 overflow-auto">
          {filtered.map((cmd) => {
            const Icon = cmd.icon
            return (
              <button
                key={cmd.key}
                onClick={() => onAction(cmd.key)}
                className="w-full flex items-center gap-4 p-4 hover:bg-orange-50 border-b border-gray-200 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg border-[2px] border-black flex items-center justify-center"
                  style={{ backgroundColor: cmd.color }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold">{cmd.label}</span>
              </button>
            )
          })}

          <button
            onClick={onReset}
            className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 border-t-[2px] border-black transition-colors"
          >
            <div className="w-10 h-10 rounded-lg border-[2px] border-black bg-gray-200 flex items-center justify-center">
              <RotateCcw className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold">Resetar Manual</span>
          </button>
        </div>
      </div>
    </div>
  )
}

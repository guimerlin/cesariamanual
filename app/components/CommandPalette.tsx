"use client"

import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import type { AppKey } from "@/lib/ui-store"

export default function CommandPalette({
  open = false,
  onOpenChange = () => {},
  onAction = () => {},
  onReset = () => {},
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onAction?: (k: Exclude<AppKey, "palette" | null>) => void
  onReset?: () => void
}) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, onOpenChange])

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Digite um comando do Cesária App..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup heading="Abrir Seções">
          <CommandItem onSelect={() => onAction("conversas")}>📱 Abrir Seção de Conversas</CommandItem>
          <CommandItem onSelect={() => onAction("navegacao")}>🧭 Abrir Navegação do Sistema</CommandItem>
          <CommandItem onSelect={() => onAction("produtos")}>📦 Abrir Transferência de Produtos</CommandItem>
          <CommandItem onSelect={() => onAction("convenios")}>🤝 Abrir Consulta de Convênios</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Sistema">
          <CommandItem
            onSelect={() => {
              onReset()
            }}
          >
            🔄 Resetar Manual do Cesária
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

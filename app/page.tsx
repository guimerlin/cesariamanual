"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import { useUIStore, type AppKey } from "@/lib/ui-store"
import Eyes from "./components/Eyes"
import Dock from "./components/Dock"
import DesktopWindow from "./components/Window"
import CommandPalette from "./components/CommandPalette"

type WindowSpec = {
  key: Exclude<AppKey, "palette" | null>
  title: string
  content: React.ReactNode
}

function ConversasContent() {
  return (
    <div className="p-5 md:p-6">
      <h1 className="font-black leading-none text-4xl md:text-5xl mb-6" style={{ color: "#FF8C00" }}>
        Seção de Conversas
      </h1>
      <div className="space-y-6">
        <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ONLINEOFF-LINE-wPjQ8hywcgKj7lX2m07zOhza6HoqSE.png"
            alt="Interface de conversas do Cesária App mostrando lista de chats e área de mensagens"
            className="w-full h-auto border-2 border-gray-300 rounded mb-4"
          />
        </div>

        <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#FFD700" }}>
            Lista de Chats
          </h2>
          <p className="text-lg mb-3">
            Na tela inicial, você encontrará uma lista de todos os chats disponíveis. Cada item representa uma conversa
            com uma loja ou conta específica, ou um grupo.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-semibold">Status online indicado por ponto verde</span>
          </div>
        </div>

        <div className="p-4 border-[3px] border-black shadow-[6px_6px_0_0_#000]" style={{ backgroundColor: "#FFF8DC" }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#FF8C00" }}>
            Chat Geral - Todas as Lojas
          </h2>
          <p className="text-lg mb-3">
            Grupo onde todas as lojas podem enviar mensagens simultaneamente. Essencial para avisos importantes e
            comunicados gerais.
          </p>
          <div className="p-3 border-2 border-red-500 bg-red-50 rounded">
            <span className="font-bold text-red-700">⚠️ Mensagens urgentes geram alerta visual e sonoro</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
            <h3 className="text-xl font-bold mb-2" style={{ color: "#FFD700" }}>
              Envio Normal (Enter)
            </h3>
            <p>Digite sua mensagem e pressione 'Enter'. Sem notificações sonoras.</p>
          </div>
          <div
            className="p-4 border-[3px] border-black shadow-[6px_6px_0_0_#000]"
            style={{ backgroundColor: "#FFE4B5" }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: "#FF8C00" }}>
              Envio Urgente
            </h3>
            <p>Clique no botão 'Urgente'. Gera notificação sonora e sobrepõe o aplicativo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavegacaoContent() {
  return (
    <div className="p-5 md:p-6">
      <h1 className="font-black leading-none text-4xl md:text-5xl mb-6" style={{ color: "#FF8C00" }}>
        Navegação do Sistema
      </h1>
      <div className="space-y-6">
        <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ONLINEOFF-LINE%20%281%29-SR7dCOWkGLZB3Mo2mUUD1gPWzoCrs1.png"
            alt="Interface mostrando o botão de menu hambúrguer para acessar a barra de navegação"
            className="w-full h-auto border-2 border-gray-300 rounded mb-4"
          />
        </div>

        <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#FFD700" }}>
            Barra de Tarefas
          </h2>
          <p className="text-lg mb-4">
            A barra de tarefas é o principal meio de navegação dentro do Cesária App, permitindo o acesso rápido a
            diferentes seções e funcionalidades.
          </p>

          <div className="grid gap-4">
            <div
              className="flex items-center gap-4 p-3 border-2 border-gray-300 rounded"
              style={{ backgroundColor: "#FFF8DC" }}
            >
              <div className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold">☰</div>
              <span className="text-lg">Menu hambúrguer no canto superior direito</span>
            </div>

            <div className="p-3 border-2 border-blue-500 bg-blue-50 rounded">
              <span className="font-bold text-blue-700">💡 Dica: Pressione F1 no teclado para abrir a barra</span>
            </div>
          </div>
        </div>

        <div className="p-4 border-[3px] border-black shadow-[6px_6px_0_0_#000]" style={{ backgroundColor: "#FFE4B5" }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#FF8C00" }}>
            Páginas Disponíveis
          </h2>
          <div className="grid gap-3">
            <div className="p-3 border-2 border-black bg-white font-semibold">📱 PÁGINA DE CONVERSAS</div>
            <div className="p-3 border-2 border-black bg-white font-semibold">📦 PÁGINA DE PRODUTOS</div>
            <div className="p-3 border-2 border-black bg-white font-semibold">🤝 PÁGINA DE CONVÊNIOS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProdutosContent() {
  return (
    <div className="p-5 md:p-6">
      <h1 className="font-black leading-none text-4xl md:text-5xl mb-6" style={{ color: "#FF8C00" }}>
        Transferência de Produtos
      </h1>
      <div className="space-y-6">
        <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ONLINEOFF-LINE%20%283%29-ERL3tjn0yzB2ONugN7PUxgRhNccOZO.png"
            alt="Interface de busca de produtos mostrando como pesquisar e solicitar produtos"
            className="w-full h-auto border-2 border-gray-300 rounded mb-4"
          />
        </div>

        <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
          <p className="text-lg mb-4">
            Ferramenta para gerenciar estoque e disponibilidade de itens entre diferentes lojas. Permite pesquisar
            produtos e solicitar transferências automáticas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div
            className="p-4 border-[3px] border-black shadow-[6px_6px_0_0_#000]"
            style={{ backgroundColor: "#FFF8DC" }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: "#FFD700" }}>
              1. Digite o Nome
            </h3>
            <p>Na barra de pesquisa, digite o nome do produto. Use termos amplos se não tiver certeza.</p>
          </div>

          <div
            className="p-4 border-[3px] border-black shadow-[6px_6px_0_0_#000]"
            style={{ backgroundColor: "#FFE4B5" }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: "#FF8C00" }}>
              2. Use Código de Barras
            </h3>
            <p>Para pesquisa mais precisa, utilize o código de barras. Clique na barra e use o scanner.</p>
          </div>

          <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
            <h3 className="text-xl font-bold mb-2" style={{ color: "#FFD700" }}>
              3. Pressione Enter
            </h3>
            <p>Após digitar ou escanear, pressione Enter para iniciar a pesquisa.</p>
          </div>
        </div>

        <div className="p-4 border-[3px] border-black shadow-[6px_6px_0_0_#000]" style={{ backgroundColor: "#FFF8DC" }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#FF8C00" }}>
            Solicitação de Produtos
          </h2>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ONLINEOFF-LINE%20%284%29-gjrryyUBCiVr3bbJvoNLLFtDzpbbfM.png"
            alt="Modal de solicitação de produtos mostrando informações do produto e opções de resposta"
            className="w-full h-auto border-2 border-gray-300 rounded mb-4"
          />
          <p className="text-lg mb-4">
            Uma caixa de diálogo aparecerá quando uma solicitação for feita para sua loja com todas as informações
            necessárias.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 border-2 border-green-500 bg-green-50 rounded text-center">
              <span className="font-bold text-green-700">✅ Enviar para</span>
              <p className="text-sm mt-1">Confirma e realiza a transferência automática</p>
            </div>
            <div className="p-3 border-2 border-red-500 bg-red-50 rounded text-center">
              <span className="font-bold text-red-700">❌ Rejeitar</span>
              <p className="text-sm mt-1">Cancela a solicitação sem transferir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ConveniosContent() {
  return (
    <div className="p-5 md:p-6">
      <h1 className="font-black leading-none text-4xl md:text-5xl mb-6" style={{ color: "#FF8C00" }}>
        Consulta de Convênios
      </h1>
      <div className="space-y-6">
        <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
          <p className="text-lg mb-4">
            Ferramenta essencial para gerenciar informações financeiras relacionadas a clientes e débitos pendentes em
            diferentes lojas.
          </p>
        </div>

        <div className="p-4 border-[3px] border-black shadow-[6px_6px_0_0_#000]" style={{ backgroundColor: "#FFF8DC" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#FFD700" }}>
            Pesquisando Convênios
          </h2>

          <div className="grid gap-4">
            <div className="flex items-center gap-4 p-3 border-2 border-gray-300 rounded bg-white">
              <div
                className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold"
                style={{ backgroundColor: "#FFE4B5" }}
              >
                1
              </div>
              <div>
                <span className="font-bold">Digite o Nome do Cliente</span>
                <p className="text-sm">Nome completo ou parte do nome na barra de pesquisa</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 border-2 border-gray-300 rounded bg-white">
              <div
                className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold"
                style={{ backgroundColor: "#FFE4B5" }}
              >
                2
              </div>
              <div>
                <span className="font-bold">Pesquisar ou Pressione Enter</span>
                <p className="text-sm">Clique em 'Pesquisar' ou pressione Enter para buscar</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 border-2 border-gray-300 rounded bg-white">
              <div
                className="w-8 h-8 border-2 border-black flex items-center justify-center font-bold"
                style={{ backgroundColor: "#FFE4B5" }}
              >
                3
              </div>
              <div>
                <span className="font-bold">Visualize os Resultados</span>
                <p className="text-sm">Sistema exibe débitos pendentes nas outras lojas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-[3px] border-black shadow-[6px_6px_0_0_#000]" style={{ backgroundColor: "#FFE4B5" }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: "#FF8C00" }}>
            💰 Controle Financeiro
          </h3>
          <p className="text-lg">
            Esta funcionalidade otimiza o processo de verificação de convênios e ajuda a manter um controle financeiro
            mais rigoroso entre as lojas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  const [openApps, setOpenApps] = useState<Exclude<AppKey, "palette" | null>[]>(["conversas"])
  const [paletteOpen, setPaletteOpen] = useState(false)
  const setActiveApp = useUIStore((s) => s.setActiveApp)
  const activeApp = useUIStore((s) => s.activeApp)

  useEffect(() => {
    setActiveApp("conversas")
  }, [setActiveApp])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (paletteOpen) {
          setPaletteOpen(false)
          setActiveApp(null)
          return
        }
        if (openApps.length > 0) {
          const top = openApps[openApps.length - 1]
          closeApp(top)
          return
        }
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [paletteOpen, openApps])

  const windows: WindowSpec[] = useMemo(
    () => [
      { key: "conversas", title: "Seção de Conversas", content: <ConversasContent /> },
      { key: "navegacao", title: "Navegação do Sistema", content: <NavegacaoContent /> },
      { key: "produtos", title: "Transferência de Produtos", content: <ProdutosContent /> },
      { key: "convenios", title: "Consulta de Convênios", content: <ConveniosContent /> },
    ],
    [],
  )

  function openApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => {
      if (prev.includes(app)) {
        const without = prev.filter((a) => a !== app)
        return [...without, app]
      }
      return [...prev, app]
    })
    setActiveApp(app)
  }

  function closeApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => prev.filter((a) => a !== app))
    setActiveApp((s) => {
      return null
    })
  }

  function focusApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => {
      const without = prev.filter((a) => a !== app)
      return [...without, app]
    })
    setActiveApp(app)
  }

  function resetAll() {
    setOpenApps(["conversas"])
    setPaletteOpen(false)
    setActiveApp("conversas")
  }

  return (
    <main className="fixed inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#FFF8DC", // Warm cream background
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,140,0,0.1) 0, rgba(255,140,0,0.1) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(90deg, rgba(255,140,0,0.1) 0, rgba(255,140,0,0.1) 1px, transparent 1px, transparent 8px)
          `,
          backgroundSize: "8px 8px, 8px 8px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,215,0,0.3) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <Eyes activeApp={activeApp ?? null} />

      <div className="absolute inset-0 z-10">
        {windows
          .filter((w) => openApps.includes(w.key))
          .map((w) => {
            const zIndex = 100 + openApps.indexOf(w.key)
            return (
              <DesktopWindow
                key={w.key}
                appKey={w.key}
                title={w.title}
                zIndex={zIndex}
                onClose={() => closeApp(w.key)}
                onFocus={() => focusApp(w.key)}
              >
                {w.content}
              </DesktopWindow>
            )
          })}
      </div>

      <div className="absolute left-0 right-0 bottom-6 z-20 flex justify-center">
        <Dock
          activeApp={activeApp ?? null}
          onOpen={(k) => openApp(k)}
          onOpenPalette={() => {
            setPaletteOpen(true)
            setActiveApp("palette")
          }}
        />
      </div>

      <CommandPalette
        open={paletteOpen}
        onOpenChange={(o) => {
          setPaletteOpen(o)
          if (!o) setActiveApp(null)
          if (o) setActiveApp("palette")
        }}
        onAction={(k) => {
          openApp(k)
          setPaletteOpen(false)
        }}
        onReset={resetAll}
      />
    </main>
  )
}

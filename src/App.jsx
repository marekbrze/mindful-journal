import { useState } from 'react'
import { useEntries } from './hooks/useEntries'
import { EntryForm } from './components/EntryForm'
import { History } from './components/History'
import { Flame, BookOpen, PenLine } from 'lucide-react'

function NavTab({ active, onClick, icon: Icon, label, badge }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className="relative flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold transition-all duration-200 rounded-xl min-h-[48px]"
      style={{
        background: active ? 'var(--surface-raised)' : 'transparent',
        color: active ? 'var(--primary)' : 'var(--text-subtle)',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <Icon size={16} aria-hidden="true" />
      <span>{label}</span>
      {badge > 0 && (
        <span
          className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
          style={{ background: 'var(--primary)', color: 'white' }}
          aria-label={`${badge} wpisów`}
        >
          {badge}
        </span>
      )}
    </button>
  )
}

export default function App() {
  const [view, setView] = useState('form')
  const { entries, addEntry, deleteEntry } = useEntries()

  const handleSave = (data) => {
    addEntry(data)
    setTimeout(() => setView('history'), 1900)
  }

  return (
    <div
      className="min-h-dvh flex flex-col"
      style={{ background: 'var(--background)' }}
    >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        style={{ background: 'var(--primary)', color: 'white' }}
      >
        Przejdź do treści
      </a>

      {/* Header */}
      <header
        className="sticky top-0 z-30 px-4 py-3 flex items-center gap-3"
        style={{
          background: 'oklch(0.97 0.018 145 / 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'var(--primary)' }}
          aria-hidden="true"
        >
          <Flame size={16} color="white" />
        </div>
        <div className="flex-1 min-w-0">
          <h1
            className="text-base leading-tight"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)' }}
          >
            Ognisko
          </h1>
          <p className="text-xs leading-tight" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-sans)' }}>
            Dziennik NVC
          </p>
        </div>
      </header>

      {/* Navigation tabs */}
      <nav
        role="tablist"
        aria-label="Nawigacja"
        className="sticky top-[57px] z-20 mx-4 mt-3 rounded-xl p-1"
        style={{
          background: 'var(--primary-softer)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div className="flex gap-1">
          <NavTab
            active={view === 'form'}
            onClick={() => setView('form')}
            icon={PenLine}
            label="Nowy wpis"
          />
          <NavTab
            active={view === 'history'}
            onClick={() => setView('history')}
            icon={BookOpen}
            label="Historia"
            badge={entries.length}
          />
        </div>
      </nav>

      {/* Main content */}
      <main
        id="main-content"
        role="tabpanel"
        className="flex-1 px-4 py-4 pb-8 w-full mx-auto"
        style={{ maxWidth: 680 }}
      >
        {view === 'form' && (
          <EntryForm onSave={handleSave} />
        )}
        {view === 'history' && (
          <History entries={entries} onDelete={deleteEntry} />
        )}
      </main>

      {/* Footer */}
      <footer className="px-4 py-4 text-center" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <p
          className="text-xs italic"
          style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-serif)' }}
        >
          Tabela z Ogniskiem — Mateusz Gola (2024) · NVC
        </p>
      </footer>
    </div>
  )
}

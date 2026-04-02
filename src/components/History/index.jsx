import { EntryCard } from './EntryCard'
import { BookOpen } from 'lucide-react'

export function History({ entries, onDelete }) {
  if (entries.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 rounded-2xl py-16 px-8 text-center"
        style={{
          background: 'var(--surface-raised)',
          border: '1.5px dashed var(--border)',
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: 'var(--primary-soft)' }}
          aria-hidden="true"
        >
          <BookOpen size={26} style={{ color: 'var(--primary)' }} />
        </div>
        <div>
          <h3
            className="text-lg mb-1"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)' }}
          >
            Brak wpisów
          </h3>
          <p className="text-sm max-w-xs" style={{ color: 'var(--text-muted)' }}>
            Twoje wpisy refleksji pojawią się tutaj po zapisaniu pierwszego z nich.
          </p>
        </div>
      </div>
    )
  }

  return (
    <section aria-label="Historia wpisów">
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-lg"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)' }}
        >
          Historia wpisów
        </h2>
        <span
          className="text-sm px-3 py-1 rounded-full font-medium"
          style={{
            background: 'var(--primary-soft)',
            color: 'var(--primary)',
            border: '1px solid var(--border)',
          }}
        >
          {entries.length} {entries.length === 1 ? 'wpis' : entries.length < 5 ? 'wpisy' : 'wpisów'}
        </span>
      </div>

      <ul className="flex flex-col gap-3 list-none p-0 m-0">
        {entries.map(entry => (
          <li key={entry.id}>
            <EntryCard entry={entry} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </section>
  )
}

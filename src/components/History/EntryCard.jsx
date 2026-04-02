import { useState } from 'react'
import { ChevronDown, ChevronUp, Trash2, Clock } from 'lucide-react'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('pl-PL', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

function formatTime(iso) {
  const d = new Date(iso)
  return d.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })
}

function Row({ label, value }) {
  if (!value || (Array.isArray(value) && value.length === 0)) return null
  return (
    <div className="flex flex-col gap-1.5">
      <dt
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-sans)' }}
      >
        {label}
      </dt>
      <dd style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: '1.6' }}>
        {Array.isArray(value) ? (
          <div className="flex flex-wrap gap-1.5">
            {value.map(v => (
              <span
                key={v}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'var(--primary-soft)',
                  color: 'var(--primary)',
                  border: '1px solid var(--border)',
                }}
              >
                {v}
              </span>
            ))}
          </div>
        ) : (
          <span>{value}</span>
        )}
      </dd>
    </div>
  )
}

export function EntryCard({ entry, onDelete }) {
  const [expanded, setExpanded] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const allEmotions = [...(entry.emotionsMet ?? []), ...(entry.emotionsUnmet ?? [])]
  const preview = allEmotions.slice(0, 3)
  const needsPreview = (entry.needs ?? []).slice(0, 3)

  const handleDelete = () => {
    if (confirmDelete) {
      onDelete(entry.id)
    } else {
      setConfirmDelete(true)
      setTimeout(() => setConfirmDelete(false), 3000)
    }
  }

  return (
    <article
      className="rounded-2xl overflow-hidden transition-shadow duration-200"
      style={{
        background: 'var(--surface-raised)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Card header */}
      <button
        type="button"
        onClick={() => setExpanded(e => !e)}
        aria-expanded={expanded}
        className="w-full text-left flex items-start gap-4 px-5 py-4 transition-colors hover:bg-[var(--primary-softer)]"
      >
        {/* Date badge */}
        <div
          className="flex flex-col items-center justify-center rounded-xl px-3 py-2 shrink-0 min-w-[52px]"
          style={{ background: 'var(--primary-soft)', border: '1px solid var(--border)' }}
          aria-hidden="true"
        >
          <span className="text-lg font-bold leading-none" style={{ color: 'var(--primary)', fontFamily: 'var(--font-serif)' }}>
            {new Date(entry.createdAt).getDate()}
          </span>
          <span className="text-xs font-medium mt-0.5" style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-sans)' }}>
            {new Date(entry.createdAt).toLocaleDateString('pl-PL', { month: 'short' })}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <time
              dateTime={entry.createdAt}
              className="text-xs flex items-center gap-1"
              style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-sans)' }}
            >
              <Clock size={12} aria-hidden="true" />
              {formatDate(entry.createdAt)}, {formatTime(entry.createdAt)}
            </time>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {preview.map(e => (
              <span
                key={e}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: 'var(--primary-softer)',
                  color: 'var(--primary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {e}
              </span>
            ))}
            {allEmotions.length > 3 && (
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs"
                style={{ color: 'var(--text-subtle)', border: '1px solid var(--border-subtle)' }}
              >
                +{allEmotions.length - 3} więcej
              </span>
            )}
            {needsPreview.map(n => (
              <span
                key={n}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: 'var(--accent-soft)',
                  color: 'var(--accent)',
                  border: '1px solid oklch(0.88 0.04 90)',
                }}
              >
                {n}
              </span>
            ))}
            {(entry.needs ?? []).length > 3 && (
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs"
                style={{ color: 'var(--text-subtle)', border: '1px solid var(--border-subtle)' }}
              >
                +{entry.needs.length - 3} więcej
              </span>
            )}
          </div>
        </div>

        <div className="shrink-0 mt-1" aria-hidden="true">
          {expanded
            ? <ChevronUp size={18} style={{ color: 'var(--text-subtle)' }} />
            : <ChevronDown size={18} style={{ color: 'var(--text-subtle)' }} />
          }
        </div>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div
          className="px-5 pb-5 pt-2 border-t"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <dl className="flex flex-col gap-5">
            {allEmotions.length > 0 && (
              <Row label="Emocje" value={allEmotions} />
            )}
            {entry.customEmotion && (
              <Row label="Dodatkowe emocje" value={entry.customEmotion} />
            )}
            <Row label="Sytuacja / Wyzwalacze" value={entry.situation} />
            <Row label="Myśli / Przekonania" value={entry.thoughts} />
            {(entry.needs ?? []).length > 0 && (
              <Row label="Potrzeby" value={entry.needs} />
            )}
            <Row label="Jak chcę się czuć / Czego potrzebuję" value={entry.desiredFeeling} />
            <Row label="Jak potrzebuję myśleć" value={entry.thinking} />
            <Row label="Co mogę dla siebie zrobić" value={entry.actions} />
          </dl>

          <div className="flex justify-end mt-5 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <button
              type="button"
              onClick={handleDelete}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors min-h-[40px]"
              style={{
                background: confirmDelete ? 'var(--danger-soft)' : 'transparent',
                color: confirmDelete ? 'var(--danger)' : 'var(--text-subtle)',
                border: '1.5px solid',
                borderColor: confirmDelete ? 'var(--danger)' : 'var(--border)',
              }}
              aria-label={confirmDelete ? 'Kliknij ponownie, aby potwierdzić usunięcie' : 'Usuń wpis'}
            >
              <Trash2 size={14} aria-hidden="true" />
              {confirmDelete ? 'Potwierdzić usunięcie?' : 'Usuń wpis'}
            </button>
          </div>
        </div>
      )}
    </article>
  )
}

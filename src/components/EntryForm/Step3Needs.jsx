import { GroupedChipSelector } from './ChipSelector'
import { needsCategories } from '../../data/needs'

function Textarea({ id, label, hint, value, onChange, placeholder, minHeight = 96 }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-semibold"
        style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
      >
        {label}
      </label>
      {hint && (
        <p className="text-xs" id={`${id}-hint`} style={{ color: 'var(--text-subtle)' }}>
          {hint}
        </p>
      )}
      <textarea
        id={id}
        aria-describedby={hint ? `${id}-hint` : undefined}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border text-sm leading-relaxed resize-y transition-colors focus:outline-none"
        style={{
          background: 'var(--surface-raised)',
          border: '1.5px solid var(--border)',
          color: 'var(--text)',
          fontFamily: 'var(--font-sans)',
          minHeight,
        }}
        onFocus={e => {
          e.target.style.borderColor = 'var(--primary)'
          e.target.style.boxShadow = '0 0 0 3px var(--primary-softer)'
        }}
        onBlur={e => {
          e.target.style.borderColor = 'var(--border)'
          e.target.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}

export function Step3Needs({ data, onChange }) {
  const handleChange = (key) => (val) => onChange({ ...data, [key]: val })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          className="text-xl mb-1"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)' }}
        >
          Czego potrzebujesz?
        </h2>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Zidentyfikuj potrzeby i to, jak chciałbyś się czuć.
        </p>
      </div>

      <section aria-labelledby="needs-heading">
        <h3
          id="needs-heading"
          className="text-sm font-semibold uppercase tracking-wider mb-3"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
        >
          Wybierz potrzeby
        </h3>
        <GroupedChipSelector
          categories={needsCategories}
          selected={data.needs ?? []}
          onChange={handleChange('needs')}
          searchPlaceholder="Szukaj potrzeby..."
        />
      </section>

      <Textarea
        id="desiredFeeling"
        label="Jak chciałbym/chciałabym się czuć? Czego teraz potrzebuję?"
        hint="Wyobraź sobie, jak chciałbyś się czuć. Jakie potrzeby chcesz zaspokoić?"
        value={data.desiredFeeling ?? ''}
        onChange={handleChange('desiredFeeling')}
        placeholder="Chciałbym poczuć spokój i poczucie bycia wysłuchanym..."
        minHeight={96}
      />
    </div>
  )
}

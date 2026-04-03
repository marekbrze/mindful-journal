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
        <p className="text-xs" style={{ color: 'var(--text-subtle)' }} id={`${id}-hint`}>
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

export function Step4Thoughts({ data, onChange }) {
  const handleChange = (key) => (val) => onChange({ ...data, [key]: val })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          className="text-xl mb-1"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)' }}
        >
          Myśli
        </h2>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Co myślisz o tej sytuacji i jak chciałbyś myśleć?
        </p>
      </div>

      <Textarea
        id="thoughts"
        label="Myśli / Przekonania"
        hint="Jakie myśli pojawiają się w Twojej głowie w tej chwili?"
        value={data.thoughts ?? ''}
        onChange={handleChange('thoughts')}
        placeholder="Np. Znowu to samo. Nikt mnie nie słyszy. Powinienem był..."
        minHeight={112}
      />

      <Textarea
        id="thinking"
        label="Jak potrzebuję myśleć?"
        hint="Jakie myślenie lub przekonanie pomoże Ci poczuć się lepiej i zaspokoić potrzeby?"
        value={data.thinking ?? ''}
        onChange={handleChange('thinking')}
        placeholder="Mogę dbać o siebie. Moje potrzeby są ważne. Jeden trudny moment nie definiuje całości..."
        minHeight={112}
      />
    </div>
  )
}

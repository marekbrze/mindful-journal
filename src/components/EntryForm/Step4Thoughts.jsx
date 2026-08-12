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
          Thoughts
        </h2>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          What do you think about this situation, and how would you like to think?
        </p>
      </div>

      <Textarea
        id="thoughts"
        label="Thoughts / Beliefs"
        hint="What thoughts are going through your mind right now?"
        value={data.thoughts ?? ''}
        onChange={handleChange('thoughts')}
        placeholder="E.g. Same thing again. No one hears me. I should have..."
        minHeight={112}
      />

      <Textarea
        id="thinking"
        label="How do I need to think?"
        hint="What way of thinking or belief would help you feel better and meet your needs?"
        value={data.thinking ?? ''}
        onChange={handleChange('thinking')}
        placeholder="I can take care of myself. My needs matter. One hard moment doesn't define everything..."
        minHeight={112}
      />
    </div>
  )
}

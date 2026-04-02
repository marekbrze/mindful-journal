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

export function Step2Situation({ data, onChange }) {
  const handleChange = (key) => (val) => onChange({ ...data, [key]: val })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          className="text-xl mb-1"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)' }}
        >
          Co się dzieje?
        </h2>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Opisz sytuację z zewnątrz — co wywołuje te emocje, i jakie myśli się pojawiają.
        </p>
      </div>

      <Textarea
        id="situation"
        label="Sytuacja / Wyzwalacze"
        hint="Co konkretnie się wydarzyło lub dzieje? Jaki bodziec poprzedza tę chęć lub dyskomfort?"
        value={data.situation ?? ''}
        onChange={handleChange('situation')}
        placeholder="Np. Spotkanie z szefem, w którym poczułem się niedoceniony..."
        minHeight={112}
      />

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
        id="customEmotion"
        label="Dodatkowe emocje (opcjonalnie)"
        hint="Jeśli Twoje emocje nie pojawiły się na liście w poprzednim kroku — opisz je tutaj własnymi słowami."
        value={data.customEmotion ?? ''}
        onChange={handleChange('customEmotion')}
        placeholder="Np. czuję jakieś dziwne napięcie, które trudno nazwać..."
        minHeight={72}
      />
    </div>
  )
}

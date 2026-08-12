import { GroupedChipSelector } from './ChipSelector'
import { emotionsMetCategories, emotionsUnmetCategories } from '../../data/emotions'

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

export function Step2Emotions({ data, onChange }) {
  const handleChange = (key) => (val) => onChange({ ...data, [key]: val })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          className="text-xl mb-1"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)' }}
        >
          What are you feeling right now?
        </h2>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Choose the emotions that best describe what you're experiencing. You can select several.
        </p>
      </div>

      <section aria-labelledby="emotions-met-heading">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: 'var(--primary)' }}
            aria-hidden="true"
          />
          <h3
            id="emotions-met-heading"
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
          >
            When needs are met
          </h3>
        </div>
        <GroupedChipSelector
          categories={emotionsMetCategories}
          selected={data.emotionsMet ?? []}
          onChange={handleChange('emotionsMet')}
          searchPlaceholder="Search emotions..."
        />
      </section>

      <div style={{ height: '1px', background: 'var(--border-subtle)' }} role="separator" />

      <section aria-labelledby="emotions-unmet-heading">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: 'var(--accent)' }}
            aria-hidden="true"
          />
          <h3
            id="emotions-unmet-heading"
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
          >
            When needs are not met
          </h3>
        </div>
        <GroupedChipSelector
          categories={emotionsUnmetCategories}
          selected={data.emotionsUnmet ?? []}
          onChange={handleChange('emotionsUnmet')}
          searchPlaceholder="Search emotions..."
        />
      </section>

      <div style={{ height: '1px', background: 'var(--border-subtle)' }} role="separator" />

      <Textarea
        id="customEmotion"
        label="Additional emotions (optional)"
        hint="If your emotions weren't on the list — describe them here in your own words."
        value={data.customEmotion ?? ''}
        onChange={handleChange('customEmotion')}
        placeholder="e.g. I feel a strange tension that's hard to name..."
        minHeight={72}
      />
    </div>
  )
}

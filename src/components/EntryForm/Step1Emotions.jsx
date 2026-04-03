import { GroupedChipSelector } from './ChipSelector'
import { emotionsMetCategories, emotionsUnmetCategories } from '../../data/emotions'

export function Step1Emotions({ data, onChange }) {
  const handleChange = (key) => (val) => onChange({ ...data, [key]: val })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          className="text-xl mb-1"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--text)' }}
        >
          Co teraz czujesz?
        </h2>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Wybierz emocje, które najlepiej opisują to, co przeżywasz. Możesz wybrać kilka.
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
            Gdy potrzeby są zaspokojone
          </h3>
        </div>
        <GroupedChipSelector
          categories={emotionsMetCategories}
          selected={data.emotionsMet ?? []}
          onChange={handleChange('emotionsMet')}
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
            Gdy potrzeby nie są zaspokojone
          </h3>
        </div>
        <GroupedChipSelector
          categories={emotionsUnmetCategories}
          selected={data.emotionsUnmet ?? []}
          onChange={handleChange('emotionsUnmet')}
        />
      </section>

      <div
        className="rounded-xl p-4 text-sm"
        style={{ background: 'var(--primary-softer)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }}
        role="note"
      >
        <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-serif)' }}>Wskazówka:</strong>{' '}
        Możesz też wpisać własne słowa w następnym kroku, jeśli żadne z powyższych nie pasuje.
      </div>
    </div>
  )
}

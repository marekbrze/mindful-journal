import { useState } from 'react'
import { Search } from 'lucide-react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ChipSelector({ options, selected, onChange, searchable = false, placeholder = 'Szukaj...' }) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? options.filter(o => o.toLowerCase().includes(query.toLowerCase()))
    : options

  const toggle = (item) => {
    if (selected.includes(item)) {
      onChange(selected.filter(s => s !== item))
    } else {
      onChange([...selected, item])
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {searchable && (
        <div className="relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: 'var(--text-subtle)' }}
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none focus-visible:ring-2"
            style={{
              background: 'var(--surface-raised)',
              border: '1.5px solid var(--border)',
              color: 'var(--text)',
            }}
          />
        </div>
      )}
      <div className="flex flex-wrap gap-2" role="group">
        {filtered.length === 0 && (
          <p className="text-sm italic" style={{ color: 'var(--text-subtle)' }}>
            Brak wyników dla &quot;{query}&quot;
          </p>
        )}
        {filtered.map(item => {
          const active = selected.includes(item)
          return (
            <button
              key={item}
              type="button"
              role="checkbox"
              aria-checked={active}
              onClick={() => toggle(item)}
              className={cn(
                'inline-flex items-center px-3 py-2 rounded-full text-sm font-medium border transition-all duration-150',
                'min-h-[40px] cursor-pointer focus-visible:ring-2',
                active
                  ? 'border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary)]'
                  : 'border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-muted)] hover:border-[var(--primary-soft)] hover:bg-[var(--primary-softer)] hover:text-[var(--text)]'
              )}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function GroupedChipSelector({ categories, selected, onChange }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? null)
  const [query, setQuery] = useState('')

  const toggle = (item) => {
    onChange(
      selected.includes(item)
        ? selected.filter(s => s !== item)
        : [...selected, item]
    )
  }

  const isSearching = query.trim().length > 0

  const searchResults = isSearching
    ? categories
        .map(cat => ({
          ...cat,
          needs: cat.needs.filter(n => n.toLowerCase().includes(query.toLowerCase())),
        }))
        .filter(cat => cat.needs.length > 0)
    : []

  const activeCategory = categories.find(c => c.id === activeTab)

  const chipButton = (item) => {
    const active = selected.includes(item)
    return (
      <button
        key={item}
        type="button"
        role="checkbox"
        aria-checked={active}
        onClick={() => toggle(item)}
        className={cn(
          'inline-flex items-center px-3 py-2 rounded-full text-sm font-medium border',
          'transition-all duration-150 min-h-[40px] cursor-pointer',
          active
            ? 'border-[var(--primary)] bg-[var(--primary-soft)] text-[var(--primary)]'
            : 'border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-muted)] hover:border-[var(--primary-soft)] hover:bg-[var(--primary-softer)] hover:text-[var(--text)]'
        )}
      >
        {item}
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: 'var(--text-subtle)' }}
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Szukaj potrzeby..."
          aria-label="Szukaj potrzeby"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none"
          style={{
            background: 'var(--surface-raised)',
            border: '1.5px solid var(--border)',
            color: 'var(--text)',
          }}
        />
      </div>

      {isSearching ? (
        <>
          {searchResults.length === 0 ? (
            <p className="text-sm italic" style={{ color: 'var(--text-subtle)' }}>
              Brak wyników dla &quot;{query}&quot;
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {searchResults.map(cat => (
                <div key={cat.id}>
                  <p
                    className="text-xs font-semibold flex items-center gap-1.5 mb-2"
                    style={{ color: 'var(--text-subtle)', fontFamily: 'var(--font-sans)' }}
                  >
                    <span role="img" aria-hidden="true">{cat.icon}</span>
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-2" role="group" aria-label={cat.label}>
                    {cat.needs.map(item => chipButton(item))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <div
            role="tablist"
            aria-label="Kategorie potrzeb"
            className="flex gap-1 overflow-x-auto pb-px"
          >
            {categories.map(cat => {
              const catSelectedCount = cat.needs.filter(n => selected.includes(n)).length
              const isActive = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  onClick={() => setActiveTab(cat.id)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 shrink-0 whitespace-nowrap min-h-[40px]"
                  style={{
                    background: isActive ? 'var(--primary-soft)' : 'transparent',
                    color: isActive ? 'var(--primary)' : 'var(--text-subtle)',
                    border: '1.5px solid',
                    borderColor: isActive ? 'var(--primary)' : 'transparent',
                  }}
                >
                  <span role="img" aria-hidden="true">{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.label}</span>
                  {catSelectedCount > 0 && (
                    <span
                      className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
                      style={{ background: 'var(--primary)', color: 'white' }}
                      aria-label={`${catSelectedCount} wybrane`}
                    >
                      {catSelectedCount}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {activeCategory && (
            <div
              id={`tabpanel-${activeCategory.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory.id}`}
              className="flex flex-wrap gap-2"
            >
              {activeCategory.needs.map(item => chipButton(item))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

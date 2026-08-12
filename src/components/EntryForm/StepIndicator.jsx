export function StepIndicator({ currentStep, totalSteps, labels }) {
  return (
    <nav aria-label="Form progress" className="w-full">
      <ol className="flex items-center gap-0">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1
          const isDone = step < currentStep
          const isActive = step === currentStep
          return (
            <li key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1.5 flex-1">
                <div className="flex items-center w-full">
                  {i > 0 && (
                    <div
                      className="flex-1 h-0.5 transition-colors duration-300"
                      style={{
                        background: isDone || isActive ? 'var(--primary)' : 'var(--border)',
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-all duration-300 border-2"
                    style={{
                      background: isDone
                        ? 'var(--primary)'
                        : isActive
                          ? 'var(--surface-raised)'
                          : 'var(--surface)',
                      borderColor: isDone || isActive ? 'var(--primary)' : 'var(--border)',
                      color: isDone
                        ? 'white'
                        : isActive
                          ? 'var(--primary)'
                          : 'var(--text-subtle)',
                    }}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {isDone ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : step}
                  </div>
                  {i < totalSteps - 1 && (
                    <div
                      className="flex-1 h-0.5 transition-colors duration-300"
                      style={{
                        background: isDone ? 'var(--primary)' : 'var(--border)',
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <span
                  className="text-xs font-medium text-center leading-tight hidden sm:block"
                  style={{
                    color: isActive ? 'var(--primary)' : 'var(--text-subtle)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {labels[i]}
                </span>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

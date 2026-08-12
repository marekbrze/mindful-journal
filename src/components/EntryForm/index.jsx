import { useState } from 'react'
import { StepIndicator } from './StepIndicator'
import { Step1Situation } from './Step1Emotions'
import { Step2Emotions } from './Step2Situation'
import { Step3Needs } from './Step3Needs'
import { Step4Thoughts } from './Step4Thoughts'
import { Step5Actions } from './Step5Actions'
import { ChevronLeft, ChevronRight, Check, Flame } from 'lucide-react'

const STEPS = ['Situation', 'Emotions', 'Needs', 'Thoughts', 'Actions']
const TOTAL_STEPS = STEPS.length

const EMPTY_FORM = {
  emotionsMet: [],
  emotionsUnmet: [],
  customEmotion: '',
  situation: '',
  thoughts: '',
  needs: [],
  desiredFeeling: '',
  thinking: '',
  actions: '',
}

export function EntryForm({ onSave }) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({ ...EMPTY_FORM })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    onSave(data)
    setSaved(true)
    setTimeout(() => {
      setStep(1)
      setData({ ...EMPTY_FORM })
      setSaved(false)
    }, 1800)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div
        className="rounded-2xl px-6 py-5 flex items-center gap-4"
        style={{
          background: 'linear-gradient(135deg, var(--primary-softer) 0%, var(--accent-soft) 100%)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: 'var(--primary)', boxShadow: '0 2px 8px oklch(0.4 0.13 145 / 0.3)' }}
          aria-hidden="true"
        >
          <Flame size={20} color="white" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-subtle)' }}>
            Campfire Table
          </p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            New reflection entry — {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>

      {/* Step indicator */}
      <div
        className="rounded-2xl px-6 py-5"
        style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)' }}
      >
        <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} labels={STEPS} />
      </div>

      {/* Step content */}
      <div
        className="rounded-2xl px-6 py-6"
        style={{
          background: 'var(--surface-raised)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          minHeight: 400,
        }}
      >
        {step === 1 && <Step1Situation data={data} onChange={setData} />}
        {step === 2 && <Step2Emotions data={data} onChange={setData} />}
        {step === 3 && <Step3Needs data={data} onChange={setData} />}
        {step === 4 && <Step4Thoughts data={data} onChange={setData} />}
        {step === 5 && <Step5Actions data={data} onChange={setData} />}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep(s => s - 1)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium border transition-colors hover:bg-[var(--primary-softer)] min-h-[48px]"
            style={{
              border: '1.5px solid var(--border)',
              color: 'var(--text-muted)',
              background: 'var(--surface-raised)',
            }}
          >
            <ChevronLeft size={16} aria-hidden="true" />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={() => setStep(s => s + 1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all min-h-[48px] hover:opacity-90 active:scale-[0.98]"
            style={{
              background: 'var(--primary)',
              boxShadow: '0 2px 10px oklch(0.4 0.13 145 / 0.25)',
            }}
          >
            Next
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSave}
            disabled={saved}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all min-h-[48px] hover:opacity-90 active:scale-[0.98] disabled:opacity-70"
            style={{
              background: saved
                ? 'oklch(0.55 0.14 145)'
                : 'var(--primary)',
              boxShadow: '0 2px 10px oklch(0.4 0.13 145 / 0.25)',
            }}
            aria-live="polite"
          >
            <Check size={16} aria-hidden="true" />
            {saved ? 'Saved!' : 'Save entry'}
          </button>
        )}
      </div>
    </div>
  )
}

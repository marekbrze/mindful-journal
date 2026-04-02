import { useState, useCallback } from 'react'

const STORAGE_KEY = 'ognisko_entries'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function save(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
}

export function useEntries() {
  const [entries, setEntries] = useState(load)

  const addEntry = useCallback((data) => {
    const entry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
    }
    setEntries(prev => {
      const next = [entry, ...prev]
      save(next)
      return next
    })
    return entry
  }, [])

  const deleteEntry = useCallback((id) => {
    setEntries(prev => {
      const next = prev.filter(e => e.id !== id)
      save(next)
      return next
    })
  }, [])

  return { entries, addEntry, deleteEntry }
}

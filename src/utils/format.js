// Shared formatting helpers so number/date display stays consistent
// across dashboard cards, charts, and nutrition/workout modules.

export function formatNumber(value, opts = {}) {
  if (value === null || value === undefined) return '—'
  return new Intl.NumberFormat('en-IN', opts).format(value)
}

export function formatKcal(value) {
  return `${formatNumber(Math.round(value))} kcal`
}

export function formatGrams(value) {
  return `${formatNumber(value)}g`
}

export function formatPercent(value, digits = 0) {
  return `${value.toFixed(digits)}%`
}

export function formatWeight(kg, unit = 'kg') {
  if (unit === 'lb') return `${(kg * 2.20462).toFixed(1)} lb`
  return `${kg.toFixed(1)} kg`
}

export function formatDate(date, opts = { day: 'numeric', month: 'short' }) {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-IN', opts).format(d)
}

export function formatRelativeDay(date) {
  const d = typeof date === 'string' ? new Date(date) : date
  const today = new Date()
  const diffDays = Math.round((today.setHours(0, 0, 0, 0) - new Date(d).setHours(0, 0, 0, 0)) / 86400000)
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays === -1) return 'Tomorrow'
  return formatDate(d)
}

export function calculateBMI(weightKg, heightCm) {
  const heightM = heightCm / 100
  return weightKg / (heightM * heightM)
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', tone: 'warning' }
  if (bmi < 25) return { label: 'Healthy', tone: 'success' }
  if (bmi < 30) return { label: 'Overweight', tone: 'warning' }
  return { label: 'Obese', tone: 'danger' }
}

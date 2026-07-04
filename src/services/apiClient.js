import axios from 'axios'

// Frontend service layer only — no backend exists yet. This client is fully
// configured (base URL, interceptors, auth header injection) so that when
// real endpoints come online, feature services (nutritionService.js,
// workoutService.js, etc.) can switch from mock data to `apiClient.get(...)`
// without any component-level changes.

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('fitloq_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error normalization point. Real implementation will
    // dispatch toast notifications / redirect on 401, etc.
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn('[apiClient] request failed:', error?.message)
    }
    return Promise.reject(error)
  },
)

export default apiClient

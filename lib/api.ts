const BASE_URL = 'http://localhost:5000/api'

// Get token dari localStorage
const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('adminToken')
  }
  return null
}

// Base fetch dengan auth header
export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const token = getToken()

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data
}
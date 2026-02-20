import { apiFetch } from './api'

export interface ServiceFromAPI {
  _id: string
  title: string
  slug: string
  description: string
  icon: string
  features: string[]
  price: string
  isActive: boolean
}

export interface CreateServicePayload {
  title: string
  slug: string
  description: string
  icon: string
  features: string[]
  price: string
  isActive: boolean
}

// GET all services
export const getServices = async () => {
  const data = await apiFetch('/admin/services')
  return data.data as ServiceFromAPI[]
}

// POST create service
export const createService = async (payload: CreateServicePayload) => {
  const data = await apiFetch('/admin/services', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return data.data as ServiceFromAPI
}

// PUT update service
export const updateService = async (
  id: string,
  payload: Partial<CreateServicePayload>
) => {
  const data = await apiFetch(`/admin/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  })
  return data.data as ServiceFromAPI
}

// DELETE service
export const deleteService = async (id: string) => {
  await apiFetch(`/admin/services/${id}`, {
    method: 'DELETE',
  })
}
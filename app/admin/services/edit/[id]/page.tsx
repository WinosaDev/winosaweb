'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ServiceForm, { Service } from '@/components/admin/ServiceForm'
import api from '@/lib/axios'

export default function EditServicePage() {
  const params = useParams()
  const serviceId = params.id as string
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get(`/admin/services/${serviceId}`)
        setService(res.data)
      } catch (err) {
        console.error('Gagal fetch service:', err)
      } finally {
        setLoading(false)
      }
    }
    fetch()
  }, [serviceId])

  if (loading) return <div className="text-center py-12 text-gray-400">Loading...</div>

  if (!service) return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900">Service not found</h2>
    </div>
  )

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Services</h1>
        <p className="text-gray-600 italic text-base md:text-lg">Manage Winosa services content</p>
      </div>
      <ServiceForm mode="edit" initialData={service} />
    </div>
  )
}
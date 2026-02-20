'use client'

import { useParams, useRouter } from 'next/navigation'
import ServiceForm from '@/components/admin/ServiceForm'
import { DUMMY_SERVICES } from '@/constants/services'

export default function EditServicePage() {
  const params = useParams()
  const router = useRouter()
  const serviceId = params.id as string

  // Find service by ID
  const service = DUMMY_SERVICES.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <div className="max-w-4xl">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Service not found
          </h2>
          <p className="text-gray-600 mb-6">
            The service you're looking for doesn't exist or has been deleted.
          </p>
          <button
            onClick={() => router.push('/admin/services')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            Back to Services
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Edit Service
        </h1>
        <p className="text-gray-600 italic text-base md:text-lg">
          Update service information
        </p>
      </div>

      <ServiceForm mode="edit" initialData={service} />
    </div>
  )
}
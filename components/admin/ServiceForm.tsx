'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import api from '@/lib/axios'

export interface Service {
  _id?: string
  title: string
  description: string
  price: string
  status: 'Draft' | 'Published'
  thumbnail?: string
}

interface ServiceFormProps {
  initialData?: Service
  mode: 'add' | 'edit'
}

export default function ServiceForm({ initialData, mode }: ServiceFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    price: initialData?.price || '',
    status: initialData?.status || 'Draft',
    thumbnail: initialData?.thumbnail || '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.price.trim()) newErrors.price = 'Price is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (status: 'Draft' | 'Published') => {
    if (!validate()) return
    setLoading(true)

    try {
      const payload = { ...formData, status }

      if (mode === 'add') {
        await api.post('/admin/services', payload)
      } else {
        await api.put(`/admin/services/${initialData?._id}`, payload)
      }

      router.push('/admin/services')
    } catch (err) {
      console.error('Gagal simpan service:', err)
      alert('Gagal simpan, cek koneksi backend.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <label className="block text-base font-semibold text-gray-900 mb-3">Service Title :</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="e.g. UI/UX Design"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block text-base font-semibold text-gray-900 mb-3">Service Description :</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Brief description of the service"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-base font-semibold text-gray-900 mb-3">Thumbnail Image :</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-12 text-center hover:border-gray-400 transition-colors cursor-pointer">
          <input type="file" accept="image/*" className="hidden" id="thumbnail-upload" />
          <label htmlFor="thumbnail-upload" className="cursor-pointer">
            <p className="text-gray-400 italic text-lg">Upload</p>
          </label>
        </div>
      </div>

      {/* Price */}
      <div>
        <label className="block text-base font-semibold text-gray-900 mb-3">Price :</label>
        <input
          type="text"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="e.g. 5000000"
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleSubmit('Draft')}
            disabled={loading}
            className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            Draft
          </button>
          <button
            type="button"
            onClick={() => handleSubmit('Published')}
            disabled={loading}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Published'}
          </button>
        </div>
      </div>
    </div>
  )
}
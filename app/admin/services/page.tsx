'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search } from 'lucide-react'
import ServiceCard from '@/components/admin/ServiceCard'
import DeleteConfirmModal from '@/components/admin/DeleteConfirmModal'
import { DUMMY_SERVICES, Service } from '@/constants/services'

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(DUMMY_SERVICES)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<'All' | 'Draft' | 'Published'>('All')
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; serviceId: string | null }>({
    isOpen: false,
    serviceId: null,
  })

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'All' || service.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleDelete = (id: string) => setDeleteModal({ isOpen: true, serviceId: id })

  const confirmDelete = () => {
    if (deleteModal.serviceId) {
      setServices(services.filter((s) => s.id !== deleteModal.serviceId))
    }
    setDeleteModal({ isOpen: false, serviceId: null })
  }

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">Services</h1>
          <p className="text-gray-500 italic text-base">Manage Winosa services content</p>
        </div>
        <Link
          href="/admin/services/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm"
        >
          <Plus className="w-5 h-5" />
          Add Service
        </Link>
      </div>

      {/* Search */}
      <div className="relative w-fit">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-6 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm w-60"
        />
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2">
        {(['All', 'Draft', 'Published'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
              ${filterStatus === status
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
              }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onDelete={() => handleDelete(service.id)}
            />
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">No services found</div>
        )}
      </div>

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, serviceId: null })}
        onConfirm={confirmDelete}
        title="Delete Service"
        message="Are you sure you want to delete this service? This action cannot be undone."
      />
    </div>
  )
}
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

  // Filter services
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'All' || service.status === filterStatus
    return matchesSearch && matchesStatus
  })

  // Handle delete
  const handleDelete = (id: string) => {
    setDeleteModal({ isOpen: true, serviceId: id })
  }

  const confirmDelete = () => {
    if (deleteModal.serviceId) {
      setServices(services.filter((s) => s.id !== deleteModal.serviceId))
    }
    setDeleteModal({ isOpen: false, serviceId: null })
  }

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Services</h1>
          <p className="text-gray-600 italic text-base md:text-lg">
            Manage Winosa services content
          </p>
        </div>

        {/* Add Service Button */}
        <Link
          href="/admin/services/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition-colors duration-200 w-fit"
        >
          <Plus className="w-5 h-5" />
          <span>Add Service</span>
        </Link>
      </div>

      {/* Search Bar - SENDIRI di atas */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>

      {/* Filter Buttons - TERPISAH di bawah search */}
      <div className="flex gap-3">
        {(['All', 'Draft', 'Published'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`
              px-8 py-2.5 rounded-full font-medium transition-colors duration-200
              ${
                filterStatus === status
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
              }
            `}
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
          <div className="text-center py-12 text-gray-500">
            No services found
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
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
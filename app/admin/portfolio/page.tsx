'use client'

import { Trash2, Pencil, Plus, Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DeleteConfirmModal from '@/components/admin/DeleteConfirmModal'

const DUMMY_PORTFOLIOS = [
  {
    id: '1',
    title: 'Prowerty',
    description: 'Platform market place untuk property',
    category: 'Web Application',
    status: 'Draft',
  },
  {
    id: '2',
    title: 'Prowerty',
    description: 'Platform market place untuk property',
    category: 'Web Application',
    status: 'Published',
  },
  {
    id: '3',
    title: 'Prowerty',
    description: 'Platform market place untuk property',
    category: 'Web Application',
    status: 'Draft',
  },
]

export default function PortfolioPage() {
  const router = useRouter()
  const [portfolios, setPortfolios] = useState(DUMMY_PORTFOLIOS)
  const [activeFilter, setActiveFilter] = useState<'All' | 'Draft' | 'Published'>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; portfolioId: string | null }>({
    isOpen: false,
    portfolioId: null,
  })

  const filteredPortfolios = portfolios.filter((portfolio) => {
    const matchesFilter = activeFilter === 'All' || portfolio.status === activeFilter
    const matchesSearch =
      portfolio.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portfolio.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portfolio.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleEdit = (id: string) => router.push(`/admin/portfolio/edit/${id}`)
  const handleDelete = (id: string) => setDeleteModal({ isOpen: true, portfolioId: id })
  const confirmDelete = () => {
    if (deleteModal.portfolioId) {
      setPortfolios(portfolios.filter((p) => p.id !== deleteModal.portfolioId))
    }
    setDeleteModal({ isOpen: false, portfolioId: null })
  }

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">Portofolio</h1>
          <p className="text-gray-500 italic text-base">Manage study case and project</p>
        </div>
        <button
          onClick={() => router.push('/admin/portfolio/add')}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm"
        >
          <Plus className="w-5 h-5" />
          Add Portofolio
        </button>
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
            onClick={() => setActiveFilter(status)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
              ${activeFilter === status
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
              }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredPortfolios.map((item) => (
          <div key={item.id} className="border border-black rounded-3xl overflow-hidden bg-white">
            {/* Thumbnail */}
            <div className="relative h-64 bg-[#f4efe9] flex items-center justify-center">
              <span className="text-gray-400 text-base">Logo / thumbnail</span>
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs border border-black ${
                  item.status === 'Published' ? 'bg-green-200' : 'bg-gray-200'
                }`}
              >
                {item.status}
              </div>
            </div>

            {/* Info */}
            <div className="border-t border-black p-5 flex justify-between items-end">
              <div>
                <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="mt-2 text-sm text-black">{item.category}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-9 h-9 flex items-center justify-center border border-red-200 rounded-lg hover:bg-red-50 transition-colors group"
                >
                  <Trash2 size={15} className="text-red-400 group-hover:text-red-600" />
                </button>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="w-9 h-9 flex items-center justify-center border border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors group"
                >
                  <Pencil size={15} className="text-yellow-500 group-hover:text-yellow-700" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPortfolios.length === 0 && (
        <div className="text-center py-12 text-gray-500">No portfolios found</div>
      )}

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, portfolioId: null })}
        onConfirm={confirmDelete}
        title="Delete Portfolio"
        message="Are you sure you want to delete this portfolio? This action cannot be undone."
      />
    </div>
  )
}
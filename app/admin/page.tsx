'use client'

import { useEffect, useState } from 'react'
import StatsCard from '@/components/admin/StatsCard'
import RecentActivitiesTable from '@/components/admin/RecentActivitiesTable'
import api from '@/lib/axios'

export default function AdminDashboardPage() {
  const [stats, setStats] = useState([
    { label: 'Total Services', value: '-' },
    { label: 'Total Portfolios', value: '-' },
    { label: 'Total Blogs', value: '-' },
    { label: 'Total Contacts', value: '-' },
  ])
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [services, portfolios, blogs, contacts] = await Promise.all([
          api.get('/admin/services'),
          api.get('/admin/portfolio'),
          api.get('/admin/blog'),
          api.get('/contact'),
        ])
        setStats([
          { label: 'Total Services', value: services.data.length },
          { label: 'Total Portfolios', value: portfolios.data.length },
          { label: 'Total Blogs', value: blogs.data.length },
          { label: 'Total Contacts', value: contacts.data.length },
        ])
      } catch (err) {
        console.error('Gagal fetch stats:', err)
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="space-y-8 w-full">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600 italic text-base md:text-lg">Overview of Winosa website activity</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Recent Activities</h2>
        <RecentActivitiesTable activities={activities} />
      </div>
    </div>
  )
}
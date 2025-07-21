'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: number;
  name: string;
  email: string;
}

interface Appointment {
  id: number;
  userId: number;
  department: string;
  date: string;
  reason: string;
}

export default function PortalPage() {
  const [user, setUser] = useState<User | null>(null)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const router = useRouter()

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('shriram_currentUser') || 'null')
    if (!currentUser) {
      router.push('/portal/login')
    } else {
      setUser(currentUser)
      const allAppointments = JSON.parse(localStorage.getItem('shriram_appointments') || '[]')
      const userAppointments = allAppointments.filter((app: Appointment) => app.userId === currentUser.id)
      setAppointments(userAppointments)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('shriram_currentUser')
    router.push('/portal/login')
  }

  if (!user) {
    return <div className="text-center py-16">Loading...</div>
  }

  const upcomingAppointments = appointments.filter(app => new Date(app.date) >= new Date()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const pastAppointments = appointments.filter(app => new Date(app.date) < new Date()).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Welcome, {user.name}</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Logout</button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.length > 0 ? (
              <ul className="space-y-4">
                {upcomingAppointments.map(app => (
                  <li key={app.id} className="p-4 border rounded-lg">
                    <p><strong>Date:</strong> {new Date(app.date).toLocaleDateString()}</p>
                    <p><strong>Department:</strong> {app.department}</p>
                    <p><strong>Reason:</strong> {app.reason}</p>
                  </li>
                ))}
              </ul>
            ) : <p>You have no upcoming appointments.</p>}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Appointment History</h2>
            {pastAppointments.length > 0 ? (
              <ul className="space-y-4">
                {pastAppointments.map(app => (
                  <li key={app.id} className="p-4 border rounded-lg bg-gray-50">
                    <p><strong>Date:</strong> {new Date(app.date).toLocaleDateString()}</p>
                    <p><strong>Department:</strong> {app.department}</p>
                  </li>
                ))}
              </ul>
            ) : <p>You have no past appointments.</p>}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <ul className="space-y-4">
            <li><a href="/book-appointment" className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700">Book New Appointment</a></li>
            <li><a href="/portal/contact-doctor" className="block w-full text-center bg-gray-200 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-300">Contact a Doctor</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

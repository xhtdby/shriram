'use client'

import { getDepartments } from '@/app/data'
import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BookAppointmentPage() {
  const departments = getDepartments()
  const router = useRouter()
  const [department, setDepartment] = useState('')
  const [date, setDate] = useState('')
  const [reason, setReason] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const currentUser = localStorage.getItem('shriram_currentUser')
    if (!currentUser) {
      router.push('/portal/login?redirect=/book-appointment')
    }
  }, [router])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const currentUser = JSON.parse(localStorage.getItem('shriram_currentUser') || 'null')
    if (!currentUser) {
      alert('You must be logged in to book an appointment.')
      router.push('/portal/login')
      return
    }

    const allAppointments = JSON.parse(localStorage.getItem('shriram_appointments') || '[]')
    const newAppointment = {
      id: Date.now(),
      userId: currentUser.id,
      department,
      date,
      reason,
    }
    allAppointments.push(newAppointment)
    localStorage.setItem('shriram_appointments', JSON.stringify(allAppointments))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Appointment Requested!</h1>
          <p className="mb-6">Your appointment request has been received. You can view its status in your patient portal.</p>
          <a href="/portal" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Go to Portal
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Book an Appointment</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* The name and phone fields are removed as they are in the user's profile */}
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-700 font-bold mb-2">Select Department</label>
            <select id="department" value={department} onChange={e => setDepartment(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required>
              <option value="">--Please choose a department--</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.name}>{dept.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Preferred Date</label>
            <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Reason for Visit</label>
            <textarea id="message" value={reason} onChange={e => setReason(e.target.value)} rows={4} className="w-full px-3 py-2 border rounded-lg"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactDoctorPage() {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const currentUser = localStorage.getItem('shriram_currentUser')
    if (!currentUser) {
      router.push('/portal/login')
    }
  }, [router])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the message to a server.
    // For now, we'll just simulate it.
    console.log('Message submitted:', message)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Message Sent!</h1>
          <p className="mb-6">Thank you for contacting us. A member of our team will get back to you shortly.</p>
          <a href="/portal" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Back to Portal
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Contact a Doctor</h1>
        <p className="text-center text-gray-600 mb-8">Have a non-urgent question? Fill out the form below.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
            <textarea
              id="message"
              rows={8}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

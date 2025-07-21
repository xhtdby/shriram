'use client'

import { testimonials } from '@/app/data'
import { Star } from 'lucide-react'
import { useState } from 'react'

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Feedback & Testimonials</h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* Feedback Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Leave Us Your Feedback</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Your Rating</label>
              <div className="flex">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1
                  return (
                    <button
                      key={starValue}
                      type="button"
                      onClick={() => setRating(starValue)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 cursor-pointer ${starValue <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">Comment</label>
              <textarea id="comment" name="comment" rows={5} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Testimonials Display */}
        <div>
          <h2 className="text-2xl font-bold mb-6">What Our Patients Say</h2>
          <div className="space-y-6">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-bold text-right">- {t.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Read More on Google Reviews →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    const users = JSON.parse(localStorage.getItem('shriram_users') || '[]')

    if (isLogin) {
      const user = users.find((u: any) => u.email === email && u.password === password)
      if (user) {
        localStorage.setItem('shriram_currentUser', JSON.stringify(user))
        router.push('/portal')
      } else {
        setError('Invalid email or password.')
      }
    } else {
      const existingUser = users.find((u: any) => u.email === email)
      if (existingUser) {
        setError('User with this email already exists.')
        return
      }
      const newUser = { id: Date.now(), name, email, password }
      users.push(newUser)
      localStorage.setItem('shriram_users', JSON.stringify(users))
      localStorage.setItem('shriram_currentUser', JSON.stringify(newUser))
      router.push('/portal')
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">{isLogin ? 'Patient Login' : 'Patient Registration'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="text-center mt-4">
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
            {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
          </button>
        </p>
      </div>
    </div>
  )
}

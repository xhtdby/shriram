import '@/app/globals.css'
import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Shriram Hospital',
  description: 'Multi super speciality hospital in Jabalpur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center gap-x-6 mb-4">
              <a href="/blog" className="hover:text-blue-300">Blog</a>
              <a href="/feedback" className="hover:text-blue-300">Feedback</a>
              <a href="/departments" className="hover:text-blue-300">Departments</a>
            </div>
            <p>&copy; 2025 Shriram Hospital. All rights reserved.</p>
          </div>
        </footer>
        <EmergencyBanner />
      </body>
    </html>
  )
}

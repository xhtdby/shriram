import '@/app/globals.css'
import type { Metadata } from 'next'
import EmergencyBanner from '@/components/EmergencyBanner'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

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
      <body className="min-h-screen bg-gray-50 flex flex-col" style={{ paddingBottom: 0 }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center gap-x-6 mb-4">
              <Link href="/blog" className="hover:text-blue-300">Blog</Link>
              <Link href="/feedback" className="hover:text-blue-300">Feedback</Link>
              <Link href="/departments" className="hover:text-blue-300">Departments</Link>
            </div>
            <p>&copy; 2025 Shriram Hospital. All rights reserved.</p>
          </div>
        </footer>
        <EmergencyBanner />
      </body>
    </html>
  )
}

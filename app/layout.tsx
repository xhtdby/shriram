import '@/app/globals.css'
import type { Metadata } from 'next'

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
        <nav className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">
              <a href="/">Shriram Hospital</a>
            </h1>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Shriram Hospital. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

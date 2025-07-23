import Link from 'next/link';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-hospital-green/10 to-hospital-blue/10 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-hospital-green/20 mb-4">404</div>
          <div className="w-24 h-24 mx-auto mb-4 bg-hospital-green/10 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-hospital-green/40" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center space-x-2 bg-hospital-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>
          
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center space-x-2 border border-hospital-green text-hospital-green px-4 py-2 rounded-lg font-medium hover:bg-hospital-green/5 transition-colors"
            >
              <span>Find Doctors</span>
            </Link>
            
            <Link
              href="/departments"
              className="inline-flex items-center justify-center space-x-2 border border-hospital-green text-hospital-green px-4 py-2 rounded-lg font-medium hover:bg-hospital-green/5 transition-colors"
            >
              <span>Departments</span>
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800 mb-2 font-medium">
            Medical Emergency?
          </p>
          <div className="flex items-center justify-center space-x-2 text-red-700">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">📞 102 (Ambulance)</span>
          </div>
          <p className="text-xs text-red-600 mt-1">
            24/7 Emergency Services Available
          </p>
        </div>

        {/* Go Back Option */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go back to previous page</span>
        </button>
      </div>
    </div>
  );
}

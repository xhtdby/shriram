import { Phone, AlertTriangle } from 'lucide-react'

export default function EmergencyBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <AlertTriangle className="w-6 h-6 mr-2" />
          <span className="font-bold hidden sm:inline">Emergency? Contact Us Immediately</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+91-761-4004200"
            className="flex items-center bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Ambulance
          </a>
           <a
            href="tel:+91-761-4004200"
            className="flex items-center bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Emergency
          </a>
        </div>
      </div>
    </div>
  )
}

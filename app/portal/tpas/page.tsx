import { getTpaList } from '@/app/data'
import { Shield, Phone, Mail } from 'lucide-react'

export default function TPAPage() {
  const tpaList = getTpaList()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Insurance Partners (TPA)</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We have tie-ups with major insurance companies to provide cashless treatment facilities. 
          Please check with your insurance provider for coverage details.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {tpaList.map(tpa => (
          <div key={tpa.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-gray-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
              <span className="text-lg font-bold text-gray-600">
                {tpa.name.split(' ').map(word => word[0]).join('')}
              </span>
            </div>
            <h3 className="font-semibold text-gray-800">{tpa.name}</h3>
          </div>
        ))}
      </div>

      <div className="bg-hospital-green/5 rounded-xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-hospital-green" />
              Cashless Treatment Process
            </h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-hospital-green text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                Present your insurance card at the time of admission
              </li>
              <li className="flex items-start">
                <span className="bg-hospital-green text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                Our TPA desk will verify your coverage and eligibility
              </li>
              <li className="flex items-start">
                <span className="bg-hospital-green text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                Pre-authorization will be obtained from your insurance company
              </li>
              <li className="flex items-start">
                <span className="bg-hospital-green text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                Treatment will proceed without upfront payment (subject to approval)
              </li>
            </ol>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-hospital-green" />
                <div>
                  <p className="font-semibold">TPA Helpdesk</p>
                  <p className="text-gray-600">0761-4004200 (Ext: 123)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-hospital-green" />
                <div>
                  <p className="font-semibold">Email Support</p>
                  <p className="text-gray-600">tpa@shriramhospital.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Cashless facility is subject to insurance company approval. 
                Please carry all necessary documents and ensure your policy is active.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

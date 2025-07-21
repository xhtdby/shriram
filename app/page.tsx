import { getDepartments, hospitalStats, healthPackages, testimonials } from '@/app/data'
import { Calendar, Users, Stethoscope, Clock, Phone, Bed, HeartPulse, TestTube, Star } from 'lucide-react'

export default function Home() {
  const departments = getDepartments()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Shriram Hospital
          </h1>
          <p className="text-xl mb-8">
            Welcome to the heart of compassionate healthcare at Shriram Hospital, a multi super speciality hospital in Jabalpur, where we extend a warm embrace to our community in the Mahakaushal region.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/book-appointment" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Book an Appointment
            </a>
            <a href="tel:+91-761-4004200" className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Call
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Expert Medical Team
              </h3>
              <p className="text-gray-600">
                Highly qualified doctors and specialists
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Advanced Equipment
              </h3>
              <p className="text-gray-600">
                State-of-the-art medical technology
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                24/7 Emergency
              </h3>
              <p className="text-gray-600">
                Round-the-clock emergency services
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">
                Easy Appointments
              </h3>
              <p className="text-gray-600">
                Simple online appointment booking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Strength in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="p-4">
              <Bed className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <p className="text-3xl font-bold">{hospitalStats.beds}+</p>
              <p className="text-gray-600">Beds</p>
            </div>
            <div className="p-4">
              <HeartPulse className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <p className="text-3xl font-bold">{hospitalStats.ccuBeds}</p>
              <p className="text-gray-600">CCU Beds</p>
            </div>
            <div className="p-4">
              <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <p className="text-3xl font-bold">{hospitalStats.doctors}+</p>
              <p className="text-gray-600">Doctors</p>
            </div>
            <div className="p-4">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <p className="text-3xl font-bold">{hospitalStats.departments}</p>
              <p className="text-gray-600">Departments</p>
            </div>
            <div className="p-4 col-span-2 md:col-span-1">
              <TestTube className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <p className="text-3xl font-bold">{hospitalStats.ots}</p>
              <p className="text-gray-600">Operation Theaters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{dept.description}</p>
                <a 
                  href={`/departments/${dept.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Health Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</p>
                <ul className="text-gray-600 space-y-2 mb-6 flex-grow">
                  {pkg.tests.map(test => <li key={test} className="flex items-center"><span className="text-green-500 mr-2">✔</span>{test}</li>)}
                </ul>
                <a href="/book-appointment" className="text-center bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                <p className="font-bold text-right">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Accreditations</h2>
          <div className="flex justify-center items-center gap-8">
            <div className="p-4 border-2 border-gray-300 rounded-lg">
              <p className="text-xl font-semibold text-gray-700">NABH Accredited</p>
            </div>
            <div className="p-4 border-2 border-gray-300 rounded-lg">
              <p className="text-xl font-semibold text-gray-700">NABL Certified Labs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

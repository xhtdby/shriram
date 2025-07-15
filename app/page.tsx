import { getDepartments } from '@/app/data'
import { Calendar, Users, Stethoscope, Clock } from 'lucide-react'

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
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book an Appointment
          </button>
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
    </div>
  )
}

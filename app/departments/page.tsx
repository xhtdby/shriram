import { getDepartments } from '@/app/data'
import Link from 'next/link'
import Image from 'next/image'

export default function DepartmentsPage() {
  const departments = getDepartments()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Medical Departments</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Shriram Hospital offers comprehensive medical care across multiple specialties. 
          Our expert medical teams are dedicated to providing the highest quality healthcare services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((department) => (
          <Link 
            key={department.id} 
            href={`/departments/${department.slug}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Image
                    src="/images/dept-icons/placeholder.svg"
                    alt={`${department.name} icon`}
                    width={32}
                    height={32}
                    className="text-blue-600"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 group-hover:text-blue-600 transition-colors">
                {department.name}
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4 line-clamp-3">
                {department.description}
              </p>
              <div className="text-center">
                <span className="text-sm text-blue-600 font-medium">
                  {department.doctors.length} Doctor{department.doctors.length !== 1 ? 's' : ''} Available
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6">
            Our experienced medical staff can help you find the right department and specialist for your needs.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/book-appointment"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

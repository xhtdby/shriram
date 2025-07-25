import { getDepartmentBySlug } from '@/app/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params
  const department = getDepartmentBySlug(slug)

  if (!department) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{department.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{department.description}</p>

      <h2 className="text-2xl font-bold mb-4">Our Doctors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {department.doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {/* Doctor Image */}
            <div className="relative h-48 bg-gradient-to-br from-hospital-green/10 to-hospital-blue/10">
              <Image
                src={doctor.image || '/images/doctors/placeholder-doctor.jpg'}
                alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h3>
                <p className="text-gray-600">{doctor.specialization}</p>
                {doctor.qualifications && <p className="text-gray-500 text-sm mt-1">{doctor.qualifications}</p>}
                {doctor.experience && <p className="text-gray-500 text-sm mt-1">Experience: {doctor.experience}</p>}
                {doctor.consultationFee && <p className="text-hospital-green font-semibold mt-2">Consultation Fee: {doctor.consultationFee}</p>}
              </div>
              <Link
                href={`/doctors/${doctor.slug}`}
                className="mt-4 bg-hospital-green text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

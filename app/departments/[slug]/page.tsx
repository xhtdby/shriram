import { getDepartmentBySlug } from '@/app/data'
import { notFound } from 'next/navigation'

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
          <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">
              Dr. {doctor.firstName} {doctor.lastName}
            </h3>
            <p className="text-gray-600">{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

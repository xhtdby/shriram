import { getDepartments } from '@/app/data'

export default function DoctorsPage() {
  const departments = getDepartments()
  const allDoctors = departments.flatMap(dept => 
    dept.doctors.map(doctor => ({ ...doctor, departmentName: dept.name }))
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Doctors</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allDoctors.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">
              Dr. {doctor.firstName} {doctor.lastName}
            </h3>
            <p className="text-gray-600 mb-1">{doctor.specialization}</p>
            <p className="text-blue-600 text-sm mb-2">{doctor.departmentName}</p>
            {doctor.qualifications && (
              <p className="text-gray-500 text-sm">{doctor.qualifications}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

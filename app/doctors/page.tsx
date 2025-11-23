import { getDoctors } from '@/app/data'
import { Calendar, Phone, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import DoctorCard from '@/components/DoctorCard'

export default function DoctorsPage() {
  const allDoctors = getDoctors()

  // Sort doctors to show chief doctor first
  const sortedDoctors = allDoctors.sort((a, b) => {
    if (a.isChief) return -1;
    if (b.isChief) return 1;
    return 0;
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-green to-hospital-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4 mr-2" />
              Expert Medical Professionals
            </div>
            <h1 className="text-5xl font-bold mb-4">Our Medical Team</h1>
            <p className="text-xl text-hospital-green-light max-w-2xl mx-auto">
              Meet our dedicated team of experienced medical professionals committed to providing exceptional healthcare
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold">Global OPD Fee: ₹300</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedDoctors.map(doctor => (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                slug={doctor.slug}
                fullName={doctor.fullName}
                specialization={doctor.specialization}
                qualifications={doctor.qualifications}
                image={doctor.image}
                experience={doctor.experience}
                consultationTime={doctor.consultationTime}
                consultationFee={doctor.consultationFee}
                isChief={doctor.isChief}
                departmentName={doctor.departmentName}
                availableDays={doctor.availableDays}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-hospital-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Care?</h2>
          <p className="text-xl mb-8">Our medical team is available 24/7 for emergency situations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:07652-248248" 
              className="bg-white text-hospital-green px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency: 07652-248248
            </a>
            <Link 
              href="/book-appointment" 
              className="bg-gold-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

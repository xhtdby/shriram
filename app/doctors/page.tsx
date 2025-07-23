import { getDoctors } from '@/app/data'
import { Calendar, Clock, MapPin, Phone, Star, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
            <h1 className="text-5xl font-bold mb-4">Our Medical Team</h1>
            <p className="text-xl text-hospital-green-light max-w-2xl mx-auto">
              Meet our dedicated team of experienced medical professionals committed to providing exceptional healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedDoctors.map(doctor => (
              <div key={doctor.id} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${doctor.isChief ? 'border-2 border-hospital-green' : ''}`}>
                {doctor.isChief && (
                  <div className="bg-hospital-green text-white text-center py-2">
                    <span className="text-sm font-semibold">Chief Medical Officer</span>
                  </div>
                )}
                
                {/* Doctor Image */}
                <div className="relative h-64 bg-gradient-to-br from-hospital-green/10 to-hospital-blue/10">
                  <Image
                    src={doctor.image || '/images/doctors/placeholder-doctor.jpg'}
                    alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
                    fill
                    className="object-cover"
                  />
                  {doctor.isChief && (
                    <div className="absolute top-4 right-4 bg-gold-accent text-white p-2 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  )}
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    <Link href={`/doctors/${doctor.slug}`} className="hover:text-hospital-green transition-colors">
                      Dr. {doctor.firstName} {doctor.lastName}
                    </Link>
                  </h3>
                  <p className="text-hospital-green font-semibold mb-1">{doctor.specialization}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.departmentName}</p>
                  
                  {doctor.qualifications && (
                    <p className="text-gray-500 text-sm mb-3">{doctor.qualifications}</p>
                  )}

                  {doctor.experience && (
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <User className="w-4 h-4 mr-2" />
                      <span>{doctor.experience} Experience</span>
                    </div>
                  )}

                  {doctor.consultationTime && (
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{doctor.consultationTime}</span>
                    </div>
                  )}

                  {doctor.consultationFee && (
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <span className="font-semibold text-hospital-green">Consultation: {doctor.consultationFee}</span>
                    </div>
                  )}

                  {doctor.bio && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{doctor.bio}</p>
                  )}

                  {/* Available Days */}
                  {doctor.availableDays && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Available Days:</p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.availableDays.map((day) => (
                          <span key={day} className="text-xs bg-hospital-green/10 text-hospital-green px-2 py-1 rounded">
                            {day.substring(0, 3)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Appointment Button */}
                  <Link 
                    href={`/book-appointment?doctor=${doctor.firstName}_${doctor.lastName}&department=${doctor.departmentName}`}
                    className="w-full bg-hospital-green text-white py-2 px-4 rounded-lg font-semibold hover:bg-hospital-green-dark transition-colors text-center inline-block"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
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

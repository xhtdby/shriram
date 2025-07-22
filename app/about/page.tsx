import { hospitalInfo } from '@/app/data'
import { Award, Users, Stethoscope, Heart, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const milestones = [
    { year: '2004', event: 'Shriram Hospital established in Shahdol' },
    { year: '2010', event: 'Expanded to 105 beds with ICU facilities' },
    { year: '2010', event: 'Introduced advanced surgical equipment' },
    { year: '2015', event: 'Added 20-bed ICU and cardiac care unit' },
    { year: '2020', event: 'Implemented digital healthcare systems' },
    { year: '2024', event: 'Served over 120,000 patients successfully' }
  ]

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-hospital-green" />,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, kindness, and respect, ensuring their comfort and dignity throughout their healthcare journey.'
    },
    {
      icon: <Shield className="w-12 h-12 text-hospital-green" />,
      title: 'Patient Safety',
      description: 'Patient safety is our top priority. We maintain the highest standards of medical care and safety protocols in all our procedures.'
    },
    {
      icon: <Award className="w-12 h-12 text-hospital-green" />,
      title: 'Excellence',
      description: 'We strive for excellence in medical care, continuously improving our services and staying updated with the latest medical advances.'
    },
    {
      icon: <Users className="w-12 h-12 text-hospital-green" />,
      title: 'Team Work',
      description: 'Our multidisciplinary team works collaboratively to provide comprehensive and coordinated care for every patient.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-green to-hospital-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">About Shriram Hospital</h1>
            <p className="text-xl text-hospital-green-light mb-8">
              {hospitalInfo.tagline}
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              For over {new Date().getFullYear() - hospitalInfo.yearEstablished} years, Shriram Hospital has been a beacon of hope and healing in Shahdol, 
              Madhya Pradesh. We are committed to providing world-class healthcare services with compassion, integrity, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To provide accessible, affordable, and high-quality healthcare services to the people of Shahdol and surrounding regions. 
                We are dedicated to healing with compassion, advancing medical knowledge, and building healthier communities through 
                innovative care and exceptional service.
              </p>
              <div className="bg-hospital-green/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-hospital-green mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading healthcare provider in Central India, recognized for our clinical excellence, 
                  patient-centered care, and commitment to improving the health and well-being of every individual we serve.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-hospital-green/10 to-hospital-blue/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Stethoscope className="w-24 h-24 text-hospital-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Healthcare Excellence</h3>
                  <p className="text-gray-600">Committed to providing the best medical care with modern facilities and expert professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Led by experienced medical professionals dedicated to advancing healthcare excellence
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src={hospitalInfo.leadership.chiefImage}
                      alt={hospitalInfo.leadership.chiefDoctor}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{hospitalInfo.leadership.chiefDoctor}</h3>
                  <p className="text-hospital-green text-xl font-semibold mb-3">{hospitalInfo.leadership.chiefTitle}</p>
                  <p className="text-gray-600 mb-3">{hospitalInfo.leadership.chiefQualifications}</p>
                  <p className="text-gray-600 mb-4">Experience: {hospitalInfo.leadership.chiefExperience}</p>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Rohit Dubey leads our medical team with a vision of providing exceptional healthcare services. 
                    With extensive experience in anesthesiology and hospital administration, he ensures that every patient 
                    receives the highest standard of care. His leadership has been instrumental in establishing Shriram Hospital 
                    as a trusted healthcare provider in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These fundamental principles guide every aspect of our healthcare delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-hospital-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-hospital-green/20 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Milestones that mark our commitment to healthcare excellence over the years
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-hospital-green hidden md:block"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="bg-hospital-green text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm z-10 shadow-lg">
                      {milestone.year}
                    </div>
                    <div className="ml-8 bg-white p-6 rounded-lg shadow-lg flex-1">
                      <p className="text-gray-800 font-medium">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-hospital-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-hospital-green-light text-lg">Making a difference in healthcare, one patient at a time</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">{hospitalInfo.patientsServed.toLocaleString()}+</div>
              <div className="text-hospital-green-light">Patients Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">{new Date().getFullYear() - hospitalInfo.yearEstablished}+</div>
              <div className="text-hospital-green-light">Years of Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">{hospitalInfo.beds}</div>
              <div className="text-hospital-green-light">Hospital Beds</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">{hospitalInfo.totalStaff}+</div>
              <div className="text-hospital-green-light">Medical Staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-gray-600 text-lg">We're here to serve you 24/7</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-hospital-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-600">{hospitalInfo.address}</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-hospital-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Contact</h3>
              <p className="text-gray-600 mb-1">Phone: {hospitalInfo.phone}</p>
              <p className="text-gray-600">Emergency: {hospitalInfo.ambulance}</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-hospital-green mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Hours</h3>
              <p className="text-gray-600 mb-1">24/7 Emergency</p>
              <p className="text-gray-600">OPD: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

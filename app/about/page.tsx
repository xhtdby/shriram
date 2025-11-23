import { hospitalInfo } from '@/app/data'
import { Award, Users, Stethoscope, Heart, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'
import JourneyTimeline from '@/components/JourneyTimeline'

export default function AboutPage() {
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
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-hospital-green" />,
      title: 'Affordability',
      description: 'With minimum fee for medical and surgical care and tie-up with Ayushman Yojana along with other tie-ups, we are able to provide best of care with affordable prices.'
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
      <section id="leadership" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Led by experienced medical professionals and visionary leaders dedicated to advancing healthcare excellence
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Dr. Rohit Dubey - Director & Senior Intensivist/Anaesthesiologist */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src="/images/doctors/dr-rohit-dubey.jpg"
                      alt="Dr. Rohit Dubey"
                      fill
                      className="object-cover object-top rounded-full"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Dr. Rohit Dubey</h3>
                  <p className="text-hospital-green text-xl font-semibold mb-3">Director & Senior Intensivist/Anaesthesiologist</p>
                  <p className="text-gray-600 mb-3">MD (Anesthesia), FIPM</p>
                  <p className="text-gray-600 mb-4">15+ Years Experience</p>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Rohit Dubey leads our medical team with a vision of providing exceptional healthcare services. 
                    With extensive experience in anesthesiology and intensive care medicine, he ensures that every patient 
                    receives the highest standard of care. His leadership has been instrumental in establishing Shriram Hospital 
                    as a trusted healthcare provider in the region, bringing cutting-edge medical technology and expertise to Central India.
                  </p>
                </div>
              </div>
            </div>

            {/* Mr. Vijay Dubey - Director (Social Work/Management) */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-hospital-green/20 to-hospital-blue/20 rounded-full flex items-center justify-center">
                    <Users className="w-24 h-24 text-hospital-green" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Mr. Vijay Dubey</h3>
                  <p className="text-hospital-green text-xl font-semibold mb-3">Director - Social Work & Management</p>
                  <p className="text-gray-700 leading-relaxed">
                    Mr. Vijay Dubey is known for his exceptional management skills and the transformative social work 
                    he has done in the region. His strategic vision and deep commitment to community welfare have been 
                    crucial in expanding Shriram Hospital's reach and impact in Shahdol and surrounding areas. Through 
                    his dedication to social causes, he has made healthcare accessible to underserved communities while 
                    maintaining the highest standards of medical excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Dr. Pooja Dubey - Medical Superintendent */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-24 h-24 text-pink-500" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Dr. Pooja Dubey</h3>
                  <p className="text-hospital-green text-xl font-semibold mb-3">Medical Superintendent</p>
                  <p className="text-gray-600 mb-3">MBBS, EMOC (Gynae–Obs)</p>
                  <p className="text-gray-600 mb-4">15+ Years Experience</p>
                  <p className="text-gray-700 leading-relaxed">
                    With 15 years of practice in Gynae-obstetric care and thousands of deliveries and C-sections, 
                    Dr. Pooja Dubey is a renowned figure in Shahdol and the surrounding area. She is also known for her 
                    compassionate yet professional care approach, ensuring every patient receives personalized attention 
                    and expert medical treatment. Her dedication to women's healthcare has made her a trusted name in 
                    the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These fundamental principles guide every aspect of our healthcare delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
      <section id="journey" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Milestones that mark our commitment to healthcare excellence over the years
            </p>
          </div>
          
          <JourneyTimeline />
        </div>
      </section>

      {/* Hospital Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Facilities & Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              State-of-the-art medical facilities and comprehensive healthcare services designed to meet all your medical needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* ICU & Critical Care */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 text-white p-3 rounded-lg mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">ICU & Critical Care</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• 20-bed Intensive Care Unit</li>
                <li>• Advanced life support systems</li>
                <li>• 24/7 cardiac monitoring</li>
                <li>• Ventilator support</li>
                <li>• Trained critical care specialists</li>
              </ul>
            </div>

            {/* Emergency Services */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white p-3 rounded-lg mr-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">24/7 Emergency</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Round-the-clock emergency care</li>
                <li>• Trauma center with specialists</li>
                <li>• Ambulance services</li>
                <li>• Emergency surgery facilities</li>
                <li>• Immediate medical attention</li>
              </ul>
            </div>

            {/* Surgery & Operation Theater */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg mr-4">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Advanced Surgery</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Modern operation theaters</li>
                <li>• Laparoscopic surgery</li>
                <li>• General & specialized surgery</li>
                <li>• Sterile environment</li>
                <li>• Latest surgical equipment</li>
              </ul>
            </div>

            {/* Diagnostic Services */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white p-3 rounded-lg mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Diagnostic Services</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• NABL certified laboratory</li>
                <li>• CT Scan (First in city - 2011)</li>
                <li>• MRI (First in city - 2024)</li>
                <li>• Echo Cardiography</li>
                <li>• TMT (Treadmill Test)</li>
                <li>• Spirometry</li>
                <li>• Digital X-ray & imaging</li>
                <li>• ECG & cardiac testing</li>
                <li>• Blood bank facilities</li>
                <li>• Pathology services</li>
              </ul>
            </div>

            {/* Maternity & Gynecology */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-pink-500 text-white p-3 rounded-lg mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Maternity Care</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Modern delivery rooms</li>
                <li>• Gynecology services</li>
                <li>• Pre & post-natal care</li>
                <li>• Pediatric care</li>
                <li>• Family planning counseling</li>
              </ul>
            </div>

            {/* General Medicine */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 text-white p-3 rounded-lg mr-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">General Medicine</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• OPD consultations</li>
                <li>• Health checkup packages</li>
                <li>• Chronic disease management</li>
                <li>• Preventive healthcare</li>
                <li>• Specialist consultations</li>
              </ul>
            </div>

            {/* Orthopaedic Care */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-500 text-white p-3 rounded-lg mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Orthopaedic Care</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• C-Arm guided minimally invasive surgeries</li>
                <li>• Advanced surgical technology</li>
                <li>• Joint replacements</li>
                <li>• Spine surgery</li>
                <li>• Trauma surgery</li>
              </ul>
            </div>

            {/* Uro Surgery */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-teal-500 text-white p-3 rounded-lg mr-4">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Uro Surgery</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• All endoscopic procedures</li>
                <li>• Minimally invasive technology</li>
                <li>• Prostate treatment</li>
                <li>• Kidney stone treatment</li>
                <li>• Specialized urosurgeon</li>
              </ul>
            </div>

            {/* Paediatrics */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-white p-3 rounded-lg mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Paediatrics</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• OPD services</li>
                <li>• NICU (24×7)</li>
                <li>• PICU services (24×7)</li>
                <li>• Child healthcare</li>
                <li>• Specialized pediatric care</li>
              </ul>
            </div>
          </div>

          {/* Hospital Infrastructure */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Hospital Infrastructure</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-hospital-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">{hospitalInfo.beds}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Hospital Beds</h4>
                <p className="text-gray-600 text-sm">Comfortable patient accommodation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-hospital-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">20</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">ICU Beds</h4>
                <p className="text-gray-600 text-sm">Critical care facilities</p>
              </div>
              
              <div className="text-center">
                <div className="bg-hospital-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Operation Theaters</h4>
                <p className="text-gray-600 text-sm">Modern surgical facilities</p>
              </div>
              
              <div className="text-center">
                <div className="bg-hospital-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold">1st</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Dialysis Unit</h4>
                <p className="text-gray-600 text-sm">First in region (2017)</p>
              </div>
              
              <div className="text-center">
                <div className="bg-hospital-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Emergency Care</h4>
                <p className="text-gray-600 text-sm">Round-the-clock services</p>
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
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-gray-600 text-lg">We&apos;re here to serve you 24/7</p>
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

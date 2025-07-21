'use client'

import { getDepartments, hospitalStats, healthPackages, testimonials, getBlogPosts, getTpaList } from '@/app/data'
import { Calendar, Users, Stethoscope, Clock, Phone, Bed, HeartPulse, TestTube, Star, ArrowRight, Award, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const departments = getDepartments()
  const blogPosts = getBlogPosts().slice(0, 3) // Featured blog posts
  const tpaList = getTpaList()

  return (
    <div>
      {/* Hero Section with Welcome */}
      <section className="relative bg-gradient-to-r from-hospital-blue to-hospital-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Welcome to<br />
                <span className="text-gold-accent">Shriram Hospital</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Your trusted partner in healthcare excellence. We provide compassionate, world-class medical care 
                with state-of-the-art technology and a team of experienced specialists dedicated to your wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/book-appointment" className="bg-cta-gradient text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-center">
                  Book an Appointment
                </a>
                <a href="tel:+91-761-4004200" className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 0761-4004200
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <Image 
                  src="/images/hospital-exterior.jpg" 
                  alt="Shriram Hospital" 
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3Mzg5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPkhvc3BpdGFsIEV4dGVyaW9yPC90ZXh0Pgo8L3N2Zz4='
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Shriram Hospital?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience excellence in healthcare with our comprehensive medical services, 
              cutting-edge technology, and compassionate care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-hospital-green/20 transition-colors">
                <Users className="w-8 h-8 text-hospital-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Medical Team</h3>
              <p className="text-gray-600">Highly qualified doctors and specialists with years of experience</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-hospital-green/20 transition-colors">
                <Stethoscope className="w-8 h-8 text-hospital-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art medical equipment and modern facilities</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-hospital-green/20 transition-colors">
                <Clock className="w-8 h-8 text-hospital-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Emergency</h3>
              <p className="text-gray-600">Round-the-clock emergency services and critical care</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-hospital-green/20 transition-colors">
                <Calendar className="w-8 h-8 text-hospital-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Appointments</h3>
              <p className="text-gray-600">Simple online appointment booking and patient portal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-hospital-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Strength in Numbers</h2>
            <p className="text-hospital-green-light text-lg">Trusted by thousands of patients across Madhya Pradesh</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Bed className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
              <p className="text-4xl font-bold mb-2">{hospitalStats.beds}+</p>
              <p className="text-hospital-green-light">Beds</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <HeartPulse className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
              <p className="text-4xl font-bold mb-2">{hospitalStats.ccuBeds}</p>
              <p className="text-hospital-green-light">CCU Beds</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Stethoscope className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
              <p className="text-4xl font-bold mb-2">{hospitalStats.doctors}+</p>
              <p className="text-hospital-green-light">Specialist Doctors</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
              <p className="text-4xl font-bold mb-2">{hospitalStats.departments}</p>
              <p className="text-hospital-green-light">Departments</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 col-span-2 md:col-span-1">
              <TestTube className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
              <p className="text-4xl font-bold mb-2">{hospitalStats.ots}</p>
              <p className="text-hospital-green-light">Operation Theaters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Medical Specialities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive healthcare services across multiple specialties with expert doctors and modern facilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-hospital-green/10 to-hospital-blue/10 flex items-center justify-center">
                  <div className="text-6xl text-hospital-green/30">🏥</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-hospital-green transition-colors">{dept.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{dept.description}</p>
                  <a 
                    href={`/departments/${dept.slug}`}
                    className="inline-flex items-center text-hospital-green font-semibold hover:text-hospital-green-dark transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Health Insights</h2>
            <p className="text-gray-600 text-lg">Stay updated with the latest health tips, medical news, and hospital updates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-hospital-blue/20 to-hospital-green/20 flex items-center justify-center">
                  <span className="text-sm bg-hospital-green text-white px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-hospital-green transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{new Date(post.publishedDate).toLocaleDateString()}</span>
                    <a 
                      href={`/blog/${post.slug}`}
                      className="text-hospital-green font-semibold hover:text-hospital-green-dark transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="bg-hospital-green text-white px-8 py-3 rounded-full font-semibold hover:bg-hospital-green-dark transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Health Packages</h2>
            <p className="text-gray-600 text-lg">Comprehensive health checkup packages designed for your wellbeing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="bg-gradient-to-r from-hospital-green to-hospital-green-dark p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold">{pkg.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.tests.map(test => (
                      <li key={test} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-hospital-green rounded-full mr-3"></div>
                        {test}
                      </li>
                    ))}
                  </ul>
                  <a href="/book-appointment" className="block text-center bg-hospital-green text-white py-3 rounded-lg font-semibold hover:bg-hospital-green-dark transition-colors">
                    Book Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TPA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Insurance Partners</h2>
            <p className="text-gray-600 text-lg">We accept major insurance providers for cashless treatment</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tpaList.map(tpa => (
              <div key={tpa.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-600">{tpa.name.split(' ').map(word => word[0]).join('')}</span>
                  </div>
                  <p className="text-xs font-medium text-gray-700">{tpa.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/portal/tpas" className="text-hospital-green font-semibold hover:text-hospital-green-dark">
              View All Insurance Partners →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from our valued patients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white rounded-xl shadow-lg p-8 relative">
                <div className="flex text-gold-accent mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-hospital-green/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-hospital-green font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{t.name}</p>
                    <p className="text-gray-500 text-sm">Verified Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 bg-hospital-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Accreditations & Awards</h2>
            <p className="text-hospital-green-light text-lg">Recognized for excellence in healthcare services</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <Award className="w-16 h-16 mx-auto mb-4 text-gold-accent" />
              <h3 className="text-xl font-bold mb-2">NABH Accredited</h3>
              <p className="text-hospital-green-light">Quality & Patient Safety</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <Shield className="w-16 h-16 mx-auto mb-4 text-gold-accent" />
              <h3 className="text-xl font-bold mb-2">NABL Certified</h3>
              <p className="text-hospital-green-light">Laboratory Standards</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <Award className="w-16 h-16 mx-auto mb-4 text-gold-accent" />
              <h3 className="text-xl font-bold mb-2">ISO Certified</h3>
              <p className="text-hospital-green-light">Quality Management</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <Shield className="w-16 h-16 mx-auto mb-4 text-gold-accent" />
              <h3 className="text-xl font-bold mb-2">JCI Standards</h3>
              <p className="text-hospital-green-light">International Quality</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

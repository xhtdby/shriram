'use client'

import { getDepartments, hospitalStats, healthPackages, testimonials, getBlogPosts, getTpaList, hospitalInfo, departmentNames } from '@/app/data'
import { Calendar, Users, Stethoscope, Clock, Phone, Bed, HeartPulse, TestTube, Star, ArrowRight, Award, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import StatsCounter from '@/components/StatsCounter'
import DepartmentCarousel from '@/components/DepartmentCarousel'
import FloatingInfoBox from '@/components/FloatingInfoBox'

export default function Home() {
  const departments = getDepartments()
  const blogPosts = getBlogPosts().slice(0, 3) // Featured blog posts
  const tpaList = getTpaList()

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative">
        <HeroCarousel />
        
        {/* Quick-action floating box */}
        <FloatingInfoBox>
          <div className="text-center">
            <p className="font-medium mb-2 text-gray-700">Emergency 24×7</p>
            <a 
              href={`tel:${hospitalInfo.ambulance}`} 
              className="text-hospital-green font-bold text-lg hover:text-hospital-green-dark transition-colors"
            >
              Call {hospitalInfo.ambulance}
            </a>
            <p className="text-sm text-gray-500 mt-1">Ambulance Service</p>
          </div>
        </FloatingInfoBox>
      </section>

      {/* Hospital Stats Section */}
      <section className="section py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Shriram Hospital at a Glance</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Serving Shahdol with excellence in healthcare since {hospitalInfo.yearEstablished}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-hospital-green" />
              </div>
              <StatsCounter 
                value={hospitalInfo.beds} 
                label="Total Beds" 
                suffix="" 
              />
            </div>
            <div className="text-center">
              <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="w-8 h-8 text-hospital-green" />
              </div>
              <StatsCounter 
                value={hospitalInfo.icuBeds} 
                label="ICU Beds" 
                suffix="" 
              />
            </div>
            <div className="text-center">
              <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-hospital-green" />
              </div>
              <StatsCounter 
                value={25} 
                label="Specialists" 
                suffix="+" 
              />
            </div>
            <div className="text-center">
              <div className="bg-hospital-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-hospital-green" />
              </div>
              <StatsCounter 
                value={15} 
                label="Departments" 
                suffix="" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Department Showcase */}
      <section className="section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Medical Specialties</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive healthcare services across multiple specialties with expert medical professionals
            </p>
          </div>
          <DepartmentCarousel />
          
          <div className="text-center mt-12">
            <Link 
              href="/departments" 
              className="inline-flex items-center px-8 py-4 bg-hospital-green text-white rounded-full font-semibold hover:bg-hospital-green-dark transition-colors"
            >
              View All Departments
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose Shriram Hospital?</h2>
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

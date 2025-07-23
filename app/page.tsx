'use client'

import { useState } from 'react'
import { getDepartments, hospitalStats, healthPackages, testimonials, getBlogPosts, getTpaList, hospitalInfo, departmentNames } from '@/app/data'
import { Calendar, Users, Stethoscope, Clock, Phone, Bed, HeartPulse, TestTube, Star, ArrowRight, Award, Shield, Heart, CheckCircle, Activity, MapPin, Smartphone, Mail, CheckCircle2, TrendingUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import HeroCarousel from '@/components/HeroCarousel'
import StatsCounter from '@/components/StatsCounter'
import DepartmentCarousel from '@/components/DepartmentCarousel'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import FloatingInfoBox from '@/components/FloatingInfoBox'
import { SectionBreaker, FloatingShapes } from '@/components/ShapeDivider'
import PaymentInterface from '@/components/PaymentInterface'

export default function Home() {
  const [showPayment, setShowPayment] = useState(false)
  const [paymentItems, setPaymentItems] = useState<any[]>([])
  
  const departments = getDepartments()
  const blogPosts = getBlogPosts().slice(0, 3) // Featured blog posts
  const tpaList = getTpaList()

  const handleBookPackage = (pkg: any) => {
    const paymentItem = {
      id: `pkg_${pkg.id}`,
      name: pkg.name,
      amount: parseFloat(pkg.price.replace(/[₹,]/g, '')), // Convert price string to number
      type: 'package' as const,
      description: 'Comprehensive health screening package'
    }
    setPaymentItems([paymentItem])
    setShowPayment(true)
  }

  const handlePaymentSuccess = (transactionId: string) => {
    // Handle successful payment
    const bookings = JSON.parse(localStorage.getItem('shriram_package_bookings') || '[]')
    const newBooking = {
      id: Date.now(),
      packageId: paymentItems[0]?.id,
      packageName: paymentItems[0]?.name,
      amount: paymentItems[0]?.amount,
      transactionId,
      status: 'confirmed',
      bookedAt: new Date().toISOString(),
      bookingNumber: `PKG${Date.now().toString().slice(-6)}`
    }
    bookings.push(newBooking)
    localStorage.setItem('shriram_package_bookings', JSON.stringify(bookings))
    
    alert(`Package booked successfully! Booking ID: ${newBooking.bookingNumber}`)
    setShowPayment(false)
    setPaymentItems([])
  }

  const handlePaymentCancel = () => {
    setShowPayment(false)
    setPaymentItems([])
  }

  // If payment interface is shown, render that instead
  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <button
              onClick={() => setShowPayment(false)}
              className="flex items-center space-x-2 text-hospital-green hover:text-hospital-green/80"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </button>
          </div>
          
          <PaymentInterface
            items={paymentItems}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative">
        <HeroCarousel />
        
        {/* Enhanced floating info box */}
        <FloatingInfoBox>
          <div className="text-center relative">
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mr-3">
                <Phone className="w-5 h-5 text-red-500" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800 text-sm">Emergency 24×7</p>
                <p className="text-xs text-gray-500">Immediate Response</p>
              </div>
            </div>
            <a 
              href={`tel:${hospitalInfo.ambulance}`} 
              className="block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg py-2 px-4 rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {hospitalInfo.ambulance}
            </a>
            <p className="text-xs text-gray-500 mt-2 flex items-center justify-center">
              <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
              Ambulance Available
            </p>
          </div>
        </FloatingInfoBox>
      </section>

      {/* Hospital Stats Section */}
      <StatsCounter />

      {/* Section Breaker */}
      <SectionBreaker variant="wave" />

      {/* Department Showcase */}
      <section className="py-section bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-hospital-green/10 text-hospital-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4 mr-2" />
              Comprehensive Healthcare
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline text-hospital-blue-dark mb-6 leading-tight">
              World-Class Medical
              <span className="block text-hospital-green">Specialties</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              From preventive care to complex procedures, our expert medical teams deliver 
              personalized treatment across 15+ specialized departments with cutting-edge technology.
            </p>
          </div>
        </div>
        
        {/* Full-width carousel */}
        <div className="relative z-10 px-4 lg:px-8 xl:px-12">
          <DepartmentCarousel />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mt-16">
            <Link 
              href="/departments" 
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-hospital-green to-hospital-green-dark text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Explore All Departments
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">15+ Specialized Medical Departments</p>
          </div>
        </div>
      </section>

      {/* Section Breaker */}
      <SectionBreaker variant="curve" />

      {/* Features Section */}
      <section className="py-section bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-hospital-blue/5 via-transparent to-hospital-green/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-hospital-blue/10 text-hospital-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline text-hospital-blue-dark mb-6">
              Excellence in Every
              <span className="block text-hospital-green">Aspect of Care</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              From our experienced medical professionals to state-of-the-art facilities, 
              we're committed to providing exceptional healthcare experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-hospital-green/20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hospital-green to-hospital-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-gradient-to-br from-hospital-green/10 to-hospital-green/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-hospital-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Expert Medical Team</h3>
              <p className="text-gray-600 leading-relaxed">150+ qualified doctors and specialists with decades of combined experience in their respective fields.</p>
              <div className="mt-4 text-sm text-hospital-green font-medium">20+ Years Average Experience</div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-hospital-blue/20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hospital-blue to-hospital-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-gradient-to-br from-hospital-blue/10 to-hospital-blue/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-10 h-10 text-hospital-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">Latest medical equipment including MRI, CT scan, digital X-ray, and modern operation theaters.</p>
              <div className="mt-4 text-sm text-hospital-blue font-medium">Latest Equipment Standards</div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-hospital-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">24/7 Emergency Care</h3>
              <p className="text-gray-600 leading-relaxed">Round-the-clock emergency services with dedicated trauma team and fully equipped ICU facilities.</p>
              <div className="mt-4 text-sm text-red-500 font-medium">Always Available</div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-hospital-gold/20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-hospital-gold to-hospital-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="bg-gradient-to-br from-hospital-gold/10 to-hospital-gold/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-hospital-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Seamless Experience</h3>
              <p className="text-gray-600 leading-relaxed">Easy online appointment booking, digital patient records, and hassle-free insurance processing.</p>
              <div className="mt-4 text-sm text-hospital-gold font-medium">Digital First Approach</div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-hospital-green mb-2">105+</div>
                <div className="text-gray-600">Patient Beds</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-hospital-blue mb-2">20+</div>
                <div className="text-gray-600">ICU Beds</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-hospital-gold mb-2">4.8★</div>
                <div className="text-gray-600">Patient Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-hospital-green mb-2">24/7</div>
                <div className="text-gray-600">Emergency Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Breaker */}
      <SectionBreaker variant="minimal" />

      {/* Featured Blog Posts */}
      <section className="py-section bg-gradient-to-br from-gray-50 via-white to-hospital-green/5 relative overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-hospital-blue/10 text-hospital-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TestTube className="w-4 h-4 mr-2" />
              Health & Wellness
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline text-hospital-blue-dark mb-6">
              Latest Health
              <span className="block text-hospital-green">Insights & Tips</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay informed with expert advice, medical breakthroughs, and wellness tips 
              from our experienced healthcare professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="relative h-56 bg-gradient-to-br from-hospital-blue/20 to-hospital-green/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-hospital-green px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-hospital-green group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      5 min read
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-hospital-green transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-hospital-green font-semibold hover:text-hospital-green-dark transition-colors group"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/blog" 
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-hospital-blue to-hospital-blue-dark text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Explore Health Library
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">Weekly health tips and medical insights</p>
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-section bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hospital-green/5 to-hospital-blue/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-hospital-green/10 text-hospital-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HeartPulse className="w-4 h-4 mr-2" />
              Preventive Care
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline text-hospital-blue-dark mb-6">
              Comprehensive Health
              <span className="block text-hospital-green">Checkup Packages</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Early detection saves lives. Choose from our carefully designed health packages 
              that cover essential screenings and diagnostics for your wellbeing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {healthPackages.slice(0, 3).map((pkg, index) => (
              <div key={pkg.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-hospital-green/20">
                {index === 1 && (
                  <div className="absolute top-4 right-4 bg-hospital-gold text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Most Popular
                  </div>
                )}
                
                <div className="bg-gradient-to-br from-hospital-green via-hospital-green-dark to-hospital-blue p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-lg ml-2 opacity-80">only</span>
                    </div>
                    <p className="text-white/80 text-sm">Comprehensive health screening</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Package Includes:</h4>
                    <ul className="space-y-3">
                      {pkg.tests.slice(0, 4).map(test => (
                        <li key={test} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-hospital-green rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{test}</span>
                        </li>
                      ))}
                      {pkg.tests.length > 4 && (
                        <li className="text-sm text-gray-500 italic">
                          +{pkg.tests.length - 4} more tests included
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleBookPackage(pkg)}
                      className="block w-full text-center bg-gradient-to-r from-hospital-green to-hospital-green-dark text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      Book This Package
                    </button>
                    <Link 
                      href="/health-packages"
                      className="block text-center w-full text-hospital-green font-medium py-2 hover:bg-hospital-green/5 rounded-lg transition-colors"
                    >
                      View Full Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/health-packages"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-hospital-blue to-hospital-blue-dark text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 mb-8"
            >
              Explore All Health Packages
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-gray-50 px-8 py-4 rounded-2xl">
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-2 text-hospital-green" />
                NABL Certified Lab
              </div>
              <div className="w-1 h-4 bg-gray-300"></div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-hospital-blue" />
                Same Day Reports
              </div>
              <div className="w-1 h-4 bg-gray-300"></div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-hospital-gold" />
                Home Collection Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TPA Section */}
      <section className="py-section bg-gradient-to-br from-gray-50 to-hospital-blue/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-hospital-blue/10 text-hospital-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Insurance Partners
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline text-hospital-blue-dark mb-6">
              Cashless Treatment
              <span className="block text-hospital-green">Made Simple</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              We partner with leading insurance providers to ensure you receive quality healthcare 
              without financial stress. Enjoy seamless cashless treatment experience.
            </p>
          </div>
          
          {/* Insurance logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
            {tpaList.slice(0, 8).map(tpa => (
              <div key={tpa.id} className="group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-hospital-green/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-3 flex items-center justify-center group-hover:from-hospital-green/10 group-hover:to-hospital-blue/10 transition-all">
                    <span className="text-sm font-bold text-gray-600 group-hover:text-hospital-green transition-colors">
                      {tpa.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gray-700 group-hover:text-hospital-green transition-colors">
                    {tpa.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-hospital-green/10 to-hospital-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-hospital-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">Instant Pre-approval</h3>
              <p className="text-gray-600 text-sm">Quick insurance verification and pre-approval process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-hospital-blue/10 to-hospital-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-hospital-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">Zero Paperwork</h3>
              <p className="text-gray-600 text-sm">Hassle-free digital processing and documentation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-hospital-gold/10 to-hospital-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-hospital-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">Dedicated Support</h3>
              <p className="text-gray-600 text-sm">Personal assistance throughout your treatment</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/portal/tpas" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-hospital-blue to-hospital-blue-dark text-white rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              View All Insurance Partners
              <ArrowRight className="w-4 h-4 ml-3" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">50+ Insurance providers accepted</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-hospital-green-light/10 to-hospital-blue-light/10 relative overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-headline text-hospital-blue-dark mb-4">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
              Real experiences from our valued patients who trust us with their healthcare
            </p>
          </div>
        </div>
        
        {/* Full-width carousel */}
        <div className="relative z-10 px-4 lg:px-8 xl:px-12">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Section Breaker */}
      <SectionBreaker variant="curve" />

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

      <SectionBreaker />

      {/* Enhanced Accreditations Section */}
      <section className="py-section bg-gradient-to-br from-hospital-blue-dark to-hospital-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-tech.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Quality Certifications
            </div>
            <h2 className="text-4xl lg:text-5xl font-headline mb-6">
              Trusted Excellence
              <span className="block text-hospital-gold">Recognized Standards</span>
            </h2>
            <p className="text-blue-100 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality healthcare is validated by prestigious accreditations 
              and certifications from leading healthcare authorities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-hospital-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-hospital-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">NABH Accredited</h3>
              <p className="text-blue-100 text-sm">National Accreditation Board for Hospitals & Healthcare Providers</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-hospital-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-hospital-green" />
              </div>
              <h3 className="text-lg font-bold mb-2">ISO Certified</h3>
              <p className="text-blue-100 text-sm">International Organization for Standardization Quality Management</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">JCI Standards</h3>
              <p className="text-blue-100 text-sm">Joint Commission International Healthcare Quality Standards</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">NABL Approved</h3>
              <p className="text-blue-100 text-sm">National Accreditation Board for Testing & Calibration Laboratories</p>
            </motion.div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-hospital-gold mb-1">25+</div>
                <div className="text-sm text-blue-100">Years of Excellence</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hospital-green mb-1">100K+</div>
                <div className="text-sm text-blue-100">Patients Served</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hospital-gold mb-1">98%</div>
                <div className="text-sm text-blue-100">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

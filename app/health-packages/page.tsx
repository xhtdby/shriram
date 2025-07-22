'use client';

import { useState } from 'react';
import { Clock, Users, Package, Star, Phone, Calendar, CheckCircle, CreditCard, ArrowLeft } from 'lucide-react';
import { HEALTH_PACKAGES } from '@/constants/services';
import PaymentInterface from '@/components/PaymentInterface';

export default function HealthPackagePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentItems, setPaymentItems] = useState<any[]>([]);

  const categories = [
    { id: 'all', name: 'All Packages', color: 'bg-gray-100 text-gray-800' },
    { id: 'basic', name: 'Basic', color: 'bg-green-100 text-green-800' },
    { id: 'comprehensive', name: 'Comprehensive', color: 'bg-blue-100 text-blue-800' },
    { id: 'cardiac', name: 'Cardiac', color: 'bg-red-100 text-red-800' },
    { id: 'womens', name: "Women's Health", color: 'bg-pink-100 text-pink-800' },
    { id: 'diabetes', name: 'Diabetes', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'senior', name: 'Senior Citizen', color: 'bg-purple-100 text-purple-800' }
  ];

  const filteredPackages = selectedCategory === 'all' 
    ? HEALTH_PACKAGES 
    : HEALTH_PACKAGES.filter(pkg => pkg.category === selectedCategory);

  const handleBookPackage = (pkg: any) => {
    const paymentItem = {
      id: `pkg_${pkg.id}`,
      name: pkg.name,
      amount: pkg.price,
      type: 'package' as const,
      description: pkg.description
    };
    setPaymentItems([paymentItem]);
    setShowPayment(true);
  };

  const handlePaymentSuccess = (transactionId: string) => {
    // Handle successful payment
    const bookings = JSON.parse(localStorage.getItem('shriram_package_bookings') || '[]');
    const newBooking = {
      id: Date.now(),
      packageId: paymentItems[0]?.id,
      packageName: paymentItems[0]?.name,
      amount: paymentItems[0]?.amount,
      transactionId,
      status: 'confirmed',
      bookedAt: new Date().toISOString(),
      bookingNumber: `PKG${Date.now().toString().slice(-6)}`
    };
    bookings.push(newBooking);
    localStorage.setItem('shriram_package_bookings', JSON.stringify(bookings));
    
    alert(`Package booked successfully! Booking ID: ${newBooking.bookingNumber}`);
    setShowPayment(false);
    setPaymentItems([]);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    setPaymentItems([]);
  };

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
              <span>Back to Packages</span>
            </button>
          </div>
          
          <PaymentInterface
            items={paymentItems}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-green to-hospital-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Packages</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive health checkup packages designed for early detection and prevention
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-hospital-green text-white'
                    : category.color
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 text-sm">{pkg.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-hospital-green">₹{pkg.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">{pkg.duration}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-hospital-blue" />
                      {pkg.ageGroup}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-hospital-blue" />
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                    <div className="max-h-40 overflow-y-auto">
                      <ul className="space-y-1">
                        {pkg.includes.slice(0, 6).map((item, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                        {pkg.includes.length > 6 && (
                          <li className="text-sm text-hospital-blue font-medium">
                            +{pkg.includes.length - 6} more tests...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-6">
                    <p className="text-sm text-gray-600">
                      <strong>Recommended for:</strong> {pkg.recommended}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
                      className="flex-1 bg-hospital-green/10 text-hospital-green border border-hospital-green px-4 py-2 rounded-lg font-semibold hover:bg-hospital-green hover:text-white transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleBookPackage(pkg)}
                      className="flex-1 bg-hospital-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Book & Pay</span>
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedPackage === pkg.id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <h4 className="font-semibold text-gray-800 mb-3">Complete Test List:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {pkg.includes.map((item, index) => (
                        <div key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Health Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Health Packages?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive health packages are designed by medical experts to provide thorough health assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hospital-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-hospital-green" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Testing</h3>
              <p className="text-gray-600">Complete range of tests for thorough health assessment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-hospital-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-hospital-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Consultation</h3>
              <p className="text-gray-600">Consultation with specialist doctors included</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Results</h3>
              <p className="text-gray-600">Fast and accurate test results with detailed reports</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Convenient appointment scheduling to fit your schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-hospital-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Health Checkup?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Book your health package today and take the first step towards better health
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/book-appointment"
              className="inline-flex items-center bg-white text-hospital-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </a>
            <a
              href="tel:07652-248248"
              className="inline-flex items-center bg-white/10 text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: 07652-248248
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

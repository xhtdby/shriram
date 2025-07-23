'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useBasket } from '@/contexts/BasketContext';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  CreditCard, 
  ArrowLeft,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface PatientInfo {
  name: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
  saveInfo: boolean;
}

export default function BasketPage() {
  const router = useRouter();
  const { basketItems, removeFromBasket, updateQuantity, getTotalAmount, getItemCount, clearBasket } = useBasket();
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    saveInfo: false
  });
  const [errors, setErrors] = useState<Partial<PatientInfo>>({});

  // Load saved patient info on mount
  useEffect(() => {
    const savedInfo = localStorage.getItem('shriram_patient_info');
    if (savedInfo) {
      try {
        const parsed = JSON.parse(savedInfo);
        setPatientInfo(prev => ({ ...prev, ...parsed, saveInfo: false }));
      } catch (error) {
        console.error('Error loading saved patient info:', error);
      }
    }
  }, []);

  // Auto-fill from basket items if available
  useEffect(() => {
    const appointmentItem = basketItems.find(item => item.type === 'appointment' && item.patientInfo);
    if (appointmentItem?.patientInfo && !patientInfo.name) {
      setPatientInfo(prev => ({
        ...prev,
        name: appointmentItem.patientInfo?.name || '',
        email: appointmentItem.patientInfo?.email || '',
        phone: appointmentItem.patientInfo?.phone || '',
        age: appointmentItem.patientInfo?.age || '',
        gender: appointmentItem.patientInfo?.gender || ''
      }));
    }
  }, [basketItems, patientInfo.name]);

  const validateForm = () => {
    const newErrors: Partial<PatientInfo> = {};
    
    if (!patientInfo.name.trim()) newErrors.name = 'Name is required';
    if (!patientInfo.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientInfo.email)) newErrors.email = 'Invalid email format';
    if (!patientInfo.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(patientInfo.phone)) newErrors.phone = 'Invalid phone number';
    if (!patientInfo.age.trim()) newErrors.age = 'Age is required';
    if (!patientInfo.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setPatientInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof PatientInfo]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSavePatientInfo = () => {
    if (patientInfo.saveInfo) {
      const { saveInfo, ...infoToSave } = patientInfo;
      localStorage.setItem('shriram_patient_info', JSON.stringify(infoToSave));
    }
  };

  const proceedToCheckout = () => {
    if (!validateForm()) {
      setShowPatientForm(true);
      return;
    }

    handleSavePatientInfo();
    
    // Store patient info for checkout
    localStorage.setItem('shriram_checkout_patient', JSON.stringify(patientInfo));
    
    // Navigate to payment
    router.push('/payment');
  };

  const hasAppointments = basketItems.some(item => item.type === 'appointment');
  const needsPatientInfo = basketItems.length > 0;

  if (basketItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Basket is Empty</h1>
            <p className="text-gray-600 mb-8">
              Add appointments, health packages, or other services to your basket to continue.
            </p>
            <div className="space-y-4">
              <Link
                href="/book-appointment"
                className="block bg-hospital-green text-white py-3 px-6 rounded-lg hover:bg-hospital-green-dark transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/health-packages"
                className="block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Browse Health Packages
              </Link>
              <Link
                href="/"
                className="block text-hospital-green hover:text-hospital-green-dark transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Basket</h1>
              <p className="text-gray-600 mt-1">Review your items and proceed to checkout</p>
            </div>
            
            <Link
              href="/"
              className="flex items-center text-hospital-green hover:text-hospital-green-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Basket Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Items in Your Basket</h2>
              
              <div className="space-y-4">
                {basketItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-600">{item.description}</p>
                      )}
                      {item.doctor && (
                        <p className="text-sm text-hospital-green">Dr. {item.doctor}</p>
                      )}
                      {item.date && item.time && (
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.date} at {item.time}
                        </div>
                      )}
                      {item.department && (
                        <p className="text-sm text-gray-500">Department: {item.department}</p>
                      )}
                    </div>
                    
                    {/* Quantity Controls - Only for packages */}
                    {item.type !== 'appointment' && (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity || 1}</span>
                        <button
                          onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ₹{(item.amount * (item.quantity || 1)).toLocaleString()}
                      </p>
                      {item.quantity && item.quantity > 1 && (
                        <p className="text-sm text-gray-500">
                          ₹{item.amount.toLocaleString()} each
                        </p>
                      )}
                    </div>
                    
                    <button
                      onClick={() => removeFromBasket(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-6 pt-6 border-t">
                <button
                  onClick={clearBasket}
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  Clear All Items
                </button>
                <div className="text-right">
                  <p className="text-lg font-bold">
                    Total: ₹{getTotalAmount().toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    {getItemCount()} item{getItemCount() !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Patient Information Form */}
            {needsPatientInfo && (showPatientForm || hasAppointments) && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-hospital-green" />
                  Patient Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={patientInfo.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={patientInfo.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={patientInfo.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={patientInfo.age}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${
                        errors.age ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter age"
                      min="1"
                      max="120"
                    />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={patientInfo.gender}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${
                        errors.gender ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={patientInfo.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Enter address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={patientInfo.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Emergency contact name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={patientInfo.emergencyPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Emergency contact phone"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={patientInfo.saveInfo}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-hospital-green bg-gray-100 border-gray-300 rounded focus:ring-hospital-green focus:ring-2"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      Save this information for future bookings
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{getTotalAmount().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{Math.round(getTotalAmount() * 0.18).toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{Math.round(getTotalAmount() * 1.18).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {needsPatientInfo && !showPatientForm && !hasAppointments && (
                <button
                  onClick={() => setShowPatientForm(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
                >
                  Add Patient Information
                </button>
              )}
              
              <button
                onClick={proceedToCheckout}
                className="w-full bg-hospital-green text-white py-3 rounded-lg font-semibold hover:bg-hospital-green-dark transition-colors flex items-center justify-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Checkout
              </button>
              
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Secure checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

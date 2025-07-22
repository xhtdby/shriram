'use client';

import { Shield, Info, Lock, FileText, User, X, Heart, MessageCircle, Folder, Hand, Clipboard, Calendar, Building, Users, Clock, HelpCircle, CreditCard, Briefcase, Bell } from 'lucide-react';
import { PATIENT_RIGHTS, PATIENT_RESPONSIBILITIES, PATIENT_CHARTER } from '@/constants/patient-rights';

const iconMap = {
  'shield-check': Shield,
  'information-circle': Info,
  'lock-closed': Lock,
  'document-text': FileText,
  'user-circle': User,
  'x-circle': X,
  'heart': Heart,
  'chat-bubble-left-ellipsis': MessageCircle,
  'folder-open': Folder,
  'hand-raised': Hand,
  'clipboard-document-check': Clipboard,
  'calendar-days': Calendar,
  'building-office': Building,
  'users': Users,
  'clock': Clock,
  'question-mark-circle': HelpCircle,
  'credit-card': CreditCard,
  'briefcase': Briefcase,
  'bell-alert': Bell
};

export default function PatientRightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-green to-hospital-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Rights & Responsibilities</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Understanding your rights and responsibilities as a patient at Shriram Hospital
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Patient Charter</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {PATIENT_CHARTER.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Patient Rights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Rights as a Patient</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These fundamental rights ensure you receive quality, respectful, and dignified healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PATIENT_RIGHTS.map((right) => {
              const IconComponent = iconMap[right.icon as keyof typeof iconMap] || Shield;
              return (
                <div key={right.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-hospital-green/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-hospital-green" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{right.title}</h3>
                      <p className="text-gray-600">{right.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Responsibilities as a Patient</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              By fulfilling these responsibilities, you help us provide the best possible care for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PATIENT_RESPONSIBILITIES.map((responsibility) => {
              const IconComponent = iconMap[responsibility.icon as keyof typeof iconMap] || FileText;
              return (
                <div key={responsibility.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-hospital-blue/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-hospital-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{responsibility.title}</h3>
                      <p className="text-gray-600">{responsibility.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Commitment to You</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">We Promise To:</h3>
                <ul className="space-y-3">
                  {PATIENT_CHARTER.ourCommitment.map((commitment, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-hospital-green/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Grievance Process</h3>
                <div className="space-y-3">
                  <p><strong>Step 1:</strong> {PATIENT_CHARTER.grievanceProcess.step1}</p>
                  <p><strong>Step 2:</strong> {PATIENT_CHARTER.grievanceProcess.step2}</p>
                  <p><strong>Step 3:</strong> {PATIENT_CHARTER.grievanceProcess.step3}</p>
                  <p><strong>Step 4:</strong> {PATIENT_CHARTER.grievanceProcess.step4}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Contact Information:</h4>
                  <p className="text-sm text-gray-600">📞 {PATIENT_CHARTER.grievanceProcess.contact.phone}</p>
                  <p className="text-sm text-gray-600">✉️ {PATIENT_CHARTER.grievanceProcess.contact.email}</p>
                  <p className="text-sm text-gray-600">📍 {PATIENT_CHARTER.grievanceProcess.contact.office}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-hospital-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Your Rights?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            If you have any questions about your rights or responsibilities, please don't hesitate to contact our Patient Relations team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-hospital-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Patient Relations
          </a>
        </div>
      </section>
    </div>
  );
}

'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown, Menu, X } from 'lucide-react'
import Logo from './icons/Logo'
import { getDepartments } from '@/app/data'
import Link from 'next/link'

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-white uppercase font-semibold text-sm tracking-wider pb-2 border-b-2 border-transparent hover:border-gold-accent hover:text-white transition-all">
    {children}
  </Link>
)

const DropdownLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} role="menuitem" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-hospital-green hover:border-l-2 hover:border-hospital-green hover:pl-3.5 transition-all">
    {children}
  </a>
)

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const departments = getDepartments()

  const patientPortalLinks = [
    { href: "/portal/patient-rights", name: "Patient Rights" },
    { href: "/portal/patient-responsibilities", name: "Patient Responsibilities" },
    { href: "/portal/health-packages", name: "Health Package" },
    { href: "/feedback", name: "Feedback Form" },
    { href: "/portal/estimate-request", name: "Estimate Request" },
    { href: "/portal/tpas", name: "TPA's" },
    { href: "/book-appointment", name: "Make An Appointment" },
    { href: "/portal/video-consultation", name: "Video Consultation" },
  ]

  const aboutUsLinks = [
    { href: "/about", name: "Overview" },
    { href: "/about#leadership", name: "Leadership" },
    { href: "/about#values", name: "Our Values" },
    { href: "/about#journey", name: "Our Journey" },
    { href: "/about#contact", name: "Contact Information" },
  ]

  const contactLinks = [
    { href: "/contact", name: "Contact Us" },
    { href: "https://maps.app.goo.gl/nCRpfLjSmKZ9AJ4F8", name: "Directions" },
    { href: "/feedback", name: "Feedback" },
    { href: "/contact#emergency", name: "Emergency" },
  ]

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Utility Strip */}
      <div className="bg-white h-8 hidden md:flex items-center justify-center text-xs text-gray-600">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-x-6">
            <a href="tel:0761-4004200" className="flex items-center gap-x-1.5 hover:text-hospital-green">
              <Phone size={14} className="text-hospital-green" /> 0761-4004200
            </a>
            <a href="mailto:info@shriramhospital.com" className="flex items-center gap-x-1.5 hover:text-hospital-green">
              <Mail size={14} className="text-hospital-green" /> info@shriramhospital.com
            </a>
            <div className="flex items-center gap-x-1.5">
              <MapPin size={14} className="text-hospital-green" />  Jaistham Chowk, Pali Rd, Beside Akashwani, Shahdol
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-nav-gradient h-20 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/"><Logo /></Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-8">
            <NavLink href="/">Home</NavLink>
            
            {/* About Us Dropdown */}
            <div className="group relative">
              <button className="text-white uppercase font-semibold text-sm tracking-wider pb-2 flex items-center gap-x-1">
                About Us <ChevronDown size={16} />
              </button>
              <div role="menu" className="absolute mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out py-1">
                {aboutUsLinks.map(link => <DropdownLink key={link.name} href={link.href}>{link.name}</DropdownLink>)}
              </div>
            </div>
            
            {/* Speciality Mega Menu */}
            <div className="group relative">
              <button className="text-white uppercase font-semibold text-sm tracking-wider pb-2 flex items-center gap-x-1">
                Speciality <ChevronDown size={16} />
              </button>
              <div role="menu" className="absolute -left-1/2 mt-2 w-[600px] transform -translate-x-1/4 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out pt-4">
                <div className="grid grid-cols-2 gap-4 p-4">
                  {departments.map(dept => (
                    <a key={dept.id} href={`/departments/${dept.slug}`} role="menuitem" className="block p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">{dept.name}</a>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/doctors">Doctors</NavLink>
            
            {/* Patient Portal Dropdown */}
            <div className="group relative">
              <button className="text-white uppercase font-semibold text-sm tracking-wider pb-2 flex items-center gap-x-1">
                Patient Portal <ChevronDown size={16} />
              </button>
              <div role="menu" className="absolute mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out py-1">
                {patientPortalLinks.map(link => <DropdownLink key={link.name} href={link.href}>{link.name}</DropdownLink>)}
              </div>
            </div>

            <NavLink href="/blog">Blogs</NavLink>

            {/* Contact Dropdown */}
            <div className="group relative">
              <button className="text-white uppercase font-semibold text-sm tracking-wider pb-2 flex items-center gap-x-1">
                Contact <ChevronDown size={16} />
              </button>
              <div role="menu" className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out py-1">
                {contactLinks.map(link => <DropdownLink key={link.name} href={link.href}>{link.name}</DropdownLink>)}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <a href="/book-appointment" className="bg-cta-gradient text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
              Make an Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-gray-800 absolute w-full shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/about" className="block py-2">About Us</Link>
            <Link href="/doctors" className="block py-2">Doctors</Link>
            <Link href="/blog" className="block py-2">Blogs</Link>
            <Link href="/portal" className="block py-2">Patient Portal</Link>
            <Link href="/book-appointment" className="block w-full text-center mt-4 bg-cta-gradient text-white font-bold text-sm px-6 py-3 rounded-full">
              Make an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

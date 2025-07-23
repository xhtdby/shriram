'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import Logo from './icons/Logo'
import { getDepartments } from '@/app/data'
import Link from 'next/link'

const NavLink = ({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) => (
  <Link href={href} className={`text-white uppercase font-semibold text-sm tracking-wider pb-2 border-b-2 border-transparent hover:border-gold-accent hover:text-white transition-all ${className}`}>
    {children}
  </Link>
)

const DropdownLink = ({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) => (
  <a href={href} role="menuitem" className={`block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-hospital-green hover:border-l-2 hover:border-hospital-green hover:pl-3.5 transition-all ${className}`}>
    {children}
  </a>
)

const MobileMenuLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
  <Link href={href} onClick={onClick} className="block py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-hospital-green transition-colors border-b border-gray-100 last:border-b-0">
    {children}
  </Link>
)

const MobileDropdownItem = ({ href, children, onClick, className = "" }: { href: string, children: React.ReactNode, onClick?: () => void, className?: string }) => (
  <Link href={href} onClick={onClick} className={`block py-2 px-8 text-sm text-gray-600 hover:bg-gray-50 hover:text-hospital-green transition-colors ${className}`}>
    {children}
  </Link>
)

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    aboutUs: false,
    speciality: false,
    patientPortal: false,
    contact: false
  })
  
  const departments = getDepartments()

  const patientPortalLinks = [
    { href: "/patient-rights", name: "Patient Rights" },
    { href: "/patient-rights#responsibilities", name: "Patient Responsibilities" },
    { href: "/health-packages", name: "Health Package" },
    { href: "/feedback", name: "Feedback Form" },
    { href: "/estimate-request", name: "Estimate Request" },
    { href: "/portal/tpas", name: "TPA's" },
    { href: "/book-appointment", name: "Make An Appointment" },
    { href: "/video-consultation", name: "Video Consultation" },
    { href: "/payment", name: "Payment Portal" },
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

  const toggleMobileDropdown = (section: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setMobileDropdowns({
      aboutUs: false,
      speciality: false,
      patientPortal: false,
      contact: false
    })
  }

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Utility Strip */}
      <div className="bg-white h-8 hidden lg:flex items-center justify-center text-xs text-gray-600">
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

      {/* Mobile Contact Strip */}
      <div className="bg-white h-10 lg:hidden flex items-center justify-center text-xs text-gray-600 px-4">
        <div className="flex items-center justify-between w-full max-w-sm">
          <a href="tel:0761-4004200" className="flex items-center gap-x-1 hover:text-hospital-green">
            <Phone size={12} className="text-hospital-green" /> 
            <span className="text-xs">0761-4004200</span>
          </a>
          <a href="mailto:info@shriramhospital.com" className="flex items-center gap-x-1 hover:text-hospital-green">
            <Mail size={12} className="text-hospital-green" /> 
            <span className="text-xs">Email Us</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-nav-gradient min-h-[4rem] flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" onClick={closeMobileMenu}>
            <Logo className="w-32 sm:w-36 md:w-40" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-x-6 2xl:gap-x-8">
            <NavLink href="/">Home</NavLink>
            
            {/* About Us Dropdown */}
            <div className="group relative">
              <button className="text-white uppercase font-semibold text-xs xl:text-sm tracking-wider pb-2 flex items-center gap-x-1">
                About Us <ChevronDown size={16} />
              </button>
              <div role="menu" className="absolute mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out py-1">
                {aboutUsLinks.map(link => <DropdownLink key={link.name} href={link.href}>{link.name}</DropdownLink>)}
              </div>
            </div>
            
            {/* Speciality Mega Menu */}
            <div className="group relative">
              <button className="text-white uppercase font-semibold text-xs xl:text-sm tracking-wider pb-2 flex items-center gap-x-1">
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
              <button className="text-white uppercase font-semibold text-xs xl:text-sm tracking-wider pb-2 flex items-center gap-x-1">
                Patient Portal <ChevronDown size={16} />
              </button>
              <div role="menu" className="absolute mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out py-1">
                {patientPortalLinks.map(link => <DropdownLink key={link.name} href={link.href}>{link.name}</DropdownLink>)}
              </div>
            </div>

            <NavLink href="/blog">Blogs</NavLink>

            {/* Contact Dropdown */}
            <div className="group relative">
              <button className="text-white uppercase font-semibold text-xs xl:text-sm tracking-wider pb-2 flex items-center gap-x-1">
                Contact <ChevronDown size={16} />
              </button>
              <div role="menu" className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out py-1">
                {contactLinks.map(link => <DropdownLink key={link.name} href={link.href}>{link.name}</DropdownLink>)}
              </div>
            </div>
          </div>

          {/* Condensed Desktop Menu for medium screens */}
          <div className="hidden lg:flex xl:hidden items-center gap-x-3">
            <NavLink href="/" className="text-xs">Home</NavLink>
            <NavLink href="/about" className="text-xs">About</NavLink>
            <NavLink href="/doctors" className="text-xs">Doctors</NavLink>
            <NavLink href="/blog" className="text-xs">Blogs</NavLink>
            <NavLink href="/contact" className="text-xs">Contact</NavLink>
          </div>

          <div className="hidden lg:block">
            <a href="/book-appointment" className="bg-cta-gradient text-white font-bold text-xs xl:text-sm px-3 xl:px-6 py-2 xl:py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
              Make Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-x-2">
            <a href="/book-appointment" className="bg-cta-gradient text-white font-bold text-xs px-3 py-2 rounded-full hover:opacity-90 transition-opacity">
              Book
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-1">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-gray-800 absolute w-full shadow-xl max-h-[80vh] overflow-y-auto z-40">
          <div className="divide-y divide-gray-100">
            <MobileMenuLink href="/" onClick={closeMobileMenu}>Home</MobileMenuLink>
            
            {/* About Us Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('aboutUs')}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-hospital-green transition-colors border-b border-gray-100"
              >
                <span>About Us</span>
                <ChevronRight size={16} className={`transform transition-transform ${mobileDropdowns.aboutUs ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdowns.aboutUs && (
                <div className="bg-gray-50">
                  {aboutUsLinks.map(link => (
                    <MobileDropdownItem key={link.name} href={link.href} onClick={closeMobileMenu}>
                      {link.name}
                    </MobileDropdownItem>
                  ))}
                </div>
              )}
            </div>

            {/* Speciality Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('speciality')}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-hospital-green transition-colors border-b border-gray-100"
              >
                <span>Speciality</span>
                <ChevronRight size={16} className={`transform transition-transform ${mobileDropdowns.speciality ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdowns.speciality && (
                <div className="bg-gray-50 max-h-64 overflow-y-auto">
                  {departments.map(dept => (
                    <MobileDropdownItem key={dept.id} href={`/departments/${dept.slug}`} onClick={closeMobileMenu}>
                      {dept.name}
                    </MobileDropdownItem>
                  ))}
                </div>
              )}
            </div>

            <MobileMenuLink href="/doctors" onClick={closeMobileMenu}>Doctors</MobileMenuLink>
            
            {/* Patient Portal Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('patientPortal')}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-hospital-green transition-colors border-b border-gray-100"
              >
                <span>Patient Portal</span>
                <ChevronRight size={16} className={`transform transition-transform ${mobileDropdowns.patientPortal ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdowns.patientPortal && (
                <div className="bg-gray-50">
                  {patientPortalLinks.map(link => (
                    <MobileDropdownItem key={link.name} href={link.href} onClick={closeMobileMenu}>
                      {link.name}
                    </MobileDropdownItem>
                  ))}
                </div>
              )}
            </div>

            <MobileMenuLink href="/blog" onClick={closeMobileMenu}>Blogs</MobileMenuLink>

            {/* Contact Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('contact')}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-hospital-green transition-colors border-b border-gray-100"
              >
                <span>Contact</span>
                <ChevronRight size={16} className={`transform transition-transform ${mobileDropdowns.contact ? 'rotate-90' : ''}`} />
              </button>
              {mobileDropdowns.contact && (
                <div className="bg-gray-50">
                  {contactLinks.map(link => (
                    <MobileDropdownItem key={link.name} href={link.href} onClick={closeMobileMenu}>
                      {link.name}
                    </MobileDropdownItem>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 bg-gray-50">
              <Link 
                href="/book-appointment" 
                onClick={closeMobileMenu}
                className="block w-full text-center bg-cta-gradient text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Make an Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

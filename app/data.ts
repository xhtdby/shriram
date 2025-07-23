// Import all data from constants
import { HOSPITAL_CONFIG } from '../constants/hospital';
import { DEPARTMENTS } from '../constants/departments';
import { DOCTORS } from '../constants/staff';
import { BLOG_POSTS } from '../constants/content';
import { TPA_PARTNERS } from '../constants/insurance';
import { HEALTH_PACKAGES } from '../constants/health-packages';
import { TESTIMONIALS } from '../constants/testimonials';

// Legacy hospital info export for backward compatibility
export const hospitalInfo = {
  name: HOSPITAL_CONFIG.name,
  tagline: HOSPITAL_CONFIG.tagline,
  beds: HOSPITAL_CONFIG.stats.beds,
  icuBeds: HOSPITAL_CONFIG.stats.icuBeds,
  phone: HOSPITAL_CONFIG.contact.phone,
  ambulance: HOSPITAL_CONFIG.contact.ambulance,
  email: HOSPITAL_CONFIG.contact.email,
  address: HOSPITAL_CONFIG.contact.address.fullAddress,
  nabhAccredited: HOSPITAL_CONFIG.certifications.nabhAccredited,
  patientsRated: HOSPITAL_CONFIG.stats.patientsRated,
  yearEstablished: HOSPITAL_CONFIG.yearEstablished,
  totalStaff: HOSPITAL_CONFIG.stats.totalStaff,
  patientsServed: HOSPITAL_CONFIG.stats.patientsServed,
  leadership: {
    chiefDoctor: 'Dr. Rohit Dubey',
    chiefTitle: 'Chief Medical Officer & Senior Anesthesiologist',
    chiefQualifications: 'MD (Anesthesia), FIPM',
    chiefExperience: '15+ years',
    chiefImage: '/images/doctors/dr-rohit-dubey.jpg'
  }
};

// Department names for carousel
export const departmentNames = DEPARTMENTS.map(dept => dept.name);

// Type definitions for backward compatibility
export interface Department {
  id: number;
  name: string;
  slug: string;
  description: string;
  doctors: Doctor[];
}

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  specialization: string;
  departmentId: number;
  qualifications?: string;
  image?: string;
  experience?: string;
  consultationTime?: string;
  isChief?: boolean;
  availableDays?: string[];
  consultationFee?: string;
  bio?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author: string;
  publishedDate: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
}

export interface TPA {
  id: number;
  name: string;
  logo?: string;
  website?: string;
}

export interface HealthPackage {
  id: number;
  name: string;
  price: string;
  tests: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
}

// Transform new data structure to legacy format
export const departments: Department[] = DEPARTMENTS.map(dept => ({
  id: dept.id,
  name: dept.name,
  slug: dept.slug,
  description: dept.description,
  doctors: DOCTORS.filter(doctor => dept.doctorIds?.includes(doctor.id)).map(doctor => ({
    id: doctor.id,
    firstName: doctor.firstName,
    lastName: doctor.lastName,
    specialization: doctor.specialization,
    departmentId: doctor.departmentId,
    qualifications: doctor.qualifications,
    image: doctor.image,
    experience: doctor.experience,
    consultationTime: doctor.consultationTime,
    isChief: doctor.isChief,
    availableDays: doctor.consultationDays,
    consultationFee: `₹${doctor.consultationFee}`,
    bio: doctor.bio
  }))
}));

export const hospitalStats = {
  beds: HOSPITAL_CONFIG.stats.beds,
  ccuBeds: HOSPITAL_CONFIG.stats.icuBeds,
  ots: 5,
  departments: DEPARTMENTS.length,
  doctors: DOCTORS.length,
};

export const allDoctors = DOCTORS.map(doctor => ({
  id: doctor.id,
  firstName: doctor.firstName,
  lastName: doctor.lastName,
  specialization: doctor.specialization,
  departmentId: doctor.departmentId,
  qualifications: doctor.qualifications,
  image: doctor.image || '/images/doctors/placeholder-doctor.jpg',
  experience: doctor.experience,
  consultationTime: doctor.consultationTime,
  isChief: doctor.isChief,
  availableDays: doctor.consultationDays,
  consultationFee: `₹${doctor.consultationFee}`,
  bio: doctor.bio,
  departmentName: DEPARTMENTS.find(dept => dept.id === doctor.departmentId)?.name || 'General'
}));

export const healthPackages = HEALTH_PACKAGES.map(pkg => ({
  id: pkg.id,
  name: pkg.name,
  price: pkg.formattedPrice,
  tests: pkg.tests
}));

export const testimonials = TESTIMONIALS.map(testimonial => ({
  id: testimonial.id,
  name: testimonial.name,
  quote: testimonial.quote
}));

export const tpaList: TPA[] = TPA_PARTNERS.map(tpa => ({
  id: tpa.id,
  name: tpa.name,
  logo: tpa.logo
}));

export const blogPosts: BlogPost[] = BLOG_POSTS.map(post => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  author: post.author,
  publishedDate: post.publishedDate,
  excerpt: post.excerpt,
  content: post.content,
  image: post.image,
  category: post.category
}));

// Legacy function exports
export function getDoctors() {
  return allDoctors;
}

export function getDepartments() {
  return departments;
}

export function getDepartmentBySlug(slug: string) {
  return departments.find(dept => dept.slug === slug);
}

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

export function getTpaList() {
  return tpaList;
}

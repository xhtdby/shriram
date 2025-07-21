'use client';
import { departmentNames } from '@/app/data';
import { Stethoscope } from 'lucide-react';

export default function DepartmentCarousel() {
  return (
    <div className="relative">
      <div className="overflow-x-auto no-scrollbar flex gap-6 snap-x px-4 lg:px-0 py-4">
        {departmentNames.map((dept, index) => (
          <div 
            key={dept} 
            className="snap-center min-w-[280px] bg-white/90 backdrop-blur border border-hospital-green/20 rounded-xl p-6 hover:shadow-xl hover:bg-white transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-hospital-green/10 rounded-lg flex items-center justify-center group-hover:bg-hospital-green/20 transition-colors">
                <Stethoscope className="w-6 h-6 text-hospital-green" />
              </div>
              <div className="ml-4">
                <p className="font-semibold text-hospital-green-dark group-hover:text-hospital-green transition-colors">
                  {dept}
                </p>
                <p className="text-sm text-gray-500">Specialist Care</p>
              </div>
            </div>
            <div className="text-xs text-gray-600">
              Expert medical professionals providing comprehensive {dept.toLowerCase()} services
            </div>
          </div>
        ))}
      </div>
      
      {/* Fade effects on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
}

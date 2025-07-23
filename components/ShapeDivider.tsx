'use client';

import { motion } from 'framer-motion';

interface ShapeDividerProps {
  type?: 'wave' | 'curve' | 'zigzag' | 'triangle';
  position?: 'top' | 'bottom' | 'both';
  color?: string;
  height?: number;
  className?: string;
  flip?: boolean;
}

export default function ShapeDivider({ 
  type = 'wave', 
  position = 'bottom', 
  color = '#ffffff',
  height = 60,
  className = '',
  flip = false
}: ShapeDividerProps) {
  
  const getSvgPath = () => {
    switch (type) {
      case 'wave':
        return `M0,${height}L0,0Q50,${height/2},100,0L100,${height}Z`;
      case 'curve':
        return `M0,${height}L0,${height/2}Q50,0,100,${height/2}L100,${height}Z`;
      case 'zigzag':
        return `M0,${height}L0,${height/2}L25,0L50,${height/2}L75,0L100,${height/2}L100,${height}Z`;
      case 'triangle':
        return `M0,${height}L0,0L50,${height/2}L100,0L100,${height}Z`;
      default:
        return `M0,${height}L0,0Q50,${height/2},100,0L100,${height}Z`;
    }
  };

  const WaveSvg = () => (
    <svg
      className={`w-full ${flip ? 'scale-y-[-1]' : ''}`}
      style={{ height: `${height}px` }}
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
      fill={color}
    >
      <motion.path
        d={getSvgPath()}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </svg>
  );

  return (
    <div className={`relative ${className}`}>
      {(position === 'top' || position === 'both') && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <WaveSvg />
        </div>
      )}
      
      {(position === 'bottom' || position === 'both') && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <WaveSvg />
        </div>
      )}
    </div>
  );
}

// Pre-defined divider components for common use cases
export function HospitalWaveDivider({ className = '' }: { className?: string }) {
  return (
    <ShapeDivider
      type="wave"
      position="bottom"
      color="var(--hospital-green)"
      height={80}
      className={className}
    />
  );
}

export function SectionBreaker({ 
  variant = 'wave',
  className = '' 
}: { 
  variant?: 'wave' | 'curve' | 'minimal';
  className?: string;
}) {
  if (variant === 'minimal') {
    return (
      <div className={`py-8 ${className}`}>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-hospital-green to-hospital-blue rounded-full mx-auto"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    );
  }

  return (
    <div className={`relative h-20 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-hospital-green-light/20 to-hospital-blue-light/20">
        <ShapeDivider
          type={variant}
          position="both"
          color="rgba(255, 255, 255, 0.9)"
          height={40}
        />
      </div>
    </div>
  );
}

// Animated decorative elements
export function FloatingShapes({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating cross shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-6 h-6 text-hospital-green/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/4 w-4 h-4 text-hospital-blue/20"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/6 w-8 h-8 text-hospital-gold/20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4m6.364 1.636l-2.828 2.828M23 12h-4m-1.636 6.364l-2.828-2.828M12 23v-4m-6.364-1.636l2.828-2.828M1 12h4m1.636-6.364l2.828 2.828" />
        </svg>
      </motion.div>
    </div>
  );
}

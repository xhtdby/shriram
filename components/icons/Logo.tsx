import Image from 'next/image'

interface LogoProps {
  /**
   * CSS classes applied to the logo element
   */
  className?: string
  /**
   * Display variant for the logo. When set to "image" an image logo is shown
   * instead of the text version.
   */
  variant?: 'text' | 'image'
}

export default function Logo({ variant = 'text', className = '' }: LogoProps) {
  if (variant === 'image') {
    return (
      <Image
        src="/images/logos/logo-main.jpg"
        alt="Shriram Hospital Logo"
        width={200}
        height={80}
        className={className}
      />
    )
  }

  return (
    <div className={`text-white ${className}`}>
      <div className="text-xl sm:text-2xl font-bold">Shriram</div>
      <div className="text-xs font-light -mt-1">Health Centre</div>
    </div>
  )
}

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`text-white ${className}`}>
      <div className="text-xl sm:text-2xl font-bold">
        Shriram
      </div>
      <div className="text-xs font-light -mt-1">
        Health Centre
      </div>
    </div>
  );
}

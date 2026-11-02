interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-4 sm:mb-6 ${className}`}>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{title}</h2>
      {subtitle && <p className="text-slate-500 mt-1 text-xs sm:text-sm">{subtitle}</p>}
    </div>
  );
}

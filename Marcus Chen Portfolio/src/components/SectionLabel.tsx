interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <div className="w-8 h-[2px] bg-accent-green rounded-full" />
      <span className="text-accent-green font-mono text-sm font-medium tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}

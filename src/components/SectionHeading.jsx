export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
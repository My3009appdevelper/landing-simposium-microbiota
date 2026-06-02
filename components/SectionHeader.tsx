type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="mb-3 inline-flex items-center rounded-full border border-[#D71920]/25 bg-[#FFF7FB] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#9B1B5A] backdrop-blur md:text-sm">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-block mt-4 max-w-3xl text-base leading-8 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  highlightedText?: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  highlightedText,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#4caf50]">
          {eyebrow}
        </p>
      )}

      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#432c67] sm:text-5xl">
        {title}{" "}
        {highlightedText && (
          <span className="text-[#5b3c88]">{highlightedText}</span>
        )}
      </h2>

      {description && (
        <p className="text-base leading-7 text-gray-600">{description}</p>
      )}
    </div>
  )
}
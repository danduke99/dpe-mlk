type ContentCardProps = {
  title: string
  description: string
}

export function ContentCard({ title, description }: ContentCardProps) {
  return (
    <article className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_16px_45px_rgba(67,44,103,0.08)] transition hover:-translate-y-1 hover:border-(--accent-green)">
      <h3 className="mb-3 text-xl font-black text-(--primary-dark)">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">{description}</p>

      <div className="mt-6 h-1 w-12 rounded-full bg-(--accent-yellow)" />
    </article>
  )
}
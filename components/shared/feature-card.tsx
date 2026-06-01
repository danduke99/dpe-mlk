import Image from "next/image"

type FeatureCardProps = {
  title: string
  description: string
  icon: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_16px_45px_rgba(67,44,103,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#4caf50] hover:shadow-[0_24px_60px_rgba(67,44,103,0.14)]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c542]/20">
        <Image
          src={icon}
          alt=""
          width={42}
          height={42}
          className="h-10 w-10 object-contain"
        />
      </div>

      <h3 className="mb-2 text-lg font-extrabold text-[#432c67]">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-600">{description}</p>

      <div className="mt-5 h-1 w-10 rounded-full bg-[#f4c542] transition-all duration-300 group-hover:w-16 group-hover:bg-[#4caf50]" />
    </article>
  )
}
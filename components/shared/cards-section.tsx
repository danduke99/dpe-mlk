import { Container } from "@/components/shared/container"
import { ContentCard } from "@/components/shared/content-card"

type Item = {
  title: string
  description: string
}

type CardsSectionProps = {
  title: string
  description: string
  items: Item[]
}

export function CardsSection({ title, description, items }: CardsSectionProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-black text-(--primary-dark)">
            {title}
          </h2>
          <p className="leading-7 text-gray-600">{description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
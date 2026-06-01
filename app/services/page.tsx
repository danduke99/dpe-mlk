import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/shared/page-hero"
import { CardsSection } from "@/components/shared/cards-section"
import { services } from "@/lib/site-data"

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHero
          eyebrow="Services"
          title="Supporting Students in Every Area of School Life"
          description="Our school services are designed to support learning, communication, care, and student development."
        />

        <CardsSection
          title="What We Provide"
          description="These core services help us create a structured, supportive, and student-centered school environment."
          items={services}
        />
      </main>

      <SiteFooter />
    </>
  )
}
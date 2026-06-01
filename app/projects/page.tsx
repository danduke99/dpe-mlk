import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/shared/page-hero"
import { CardsSection } from "@/components/shared/cards-section"
import { projects } from "@/lib/site-data"

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHero
          eyebrow="Projects"
          title="Building a Better School Community"
          description="Our projects focus on improving the learning environment, strengthening leadership, and connecting students with their community."
        />

        <CardsSection
          title="Current Project Areas"
          description="These project areas can later be expanded into individual project pages with photos, updates, and timelines."
          items={projects}
        />
      </main>

      <SiteFooter />
    </>
  )
}
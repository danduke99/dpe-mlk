import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/shared/page-hero"
import { CardsSection } from "@/components/shared/cards-section"
import { activities } from "@/lib/site-data"

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHero
          eyebrow="Activities"
          title="Learning Beyond the Classroom"
          description="School activities help students discover talents, build friendships, develop confidence, and enjoy a rich school experience."
        />

        <CardsSection
          title="Student Activities"
          description="These activity categories can later become full pages with event schedules, galleries, and announcements."
          items={activities}
        />
      </main>

      <SiteFooter />
    </>
  )
}
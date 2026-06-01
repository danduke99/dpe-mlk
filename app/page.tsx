import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { LearningCta } from "@/components/home/learning-cta"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WelcomeSection />
        <LearningCta />
      </main>
      <SiteFooter />
    </>
  )
}
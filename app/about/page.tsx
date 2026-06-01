import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/shared/page-hero"
import { Container } from "@/components/shared/container"
import { siteConfig } from "@/lib/site-data"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHero
          eyebrow="About Us"
          title="A School Built on Excellence, Character, and Leadership"
          description={`${siteConfig.name} is dedicated to nurturing students academically, socially, and emotionally while helping them grow into confident and responsible young leaders.`}
        />

        <section className="py-20 lg:py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-5 text-3xl font-black text-[var(--primary-dark)]">
                  Who We Are
                </h2>
                <p className="leading-8 text-gray-600">
                  We are a primary school community focused on creating a safe,
                  structured, and inspiring environment where students can
                  develop strong academic skills, positive values, and a love
                  for learning.
                </p>
              </div>

              <div className="rounded-3xl bg-gray-100 p-8">
                <h3 className="mb-4 text-2xl font-black text-[var(--primary-dark)]">
                  Our Mission
                </h3>
                <p className="leading-8 text-gray-600">
                  To provide quality education that empowers every student to
                  learn, lead, serve, and grow with confidence.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
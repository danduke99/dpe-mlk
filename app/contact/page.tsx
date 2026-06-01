import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { PageHero } from "@/components/shared/page-hero"
import { Container } from "@/components/shared/container"
import { contactItems } from "@/lib/site-data"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Get in Touch With Our School"
          description="Contact Dr. Martin Luther King Jr. Primary School for general questions, parent communication, or school-related information."
        />

        <section className="py-20 lg:py-28">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_16px_45px_rgba(67,44,103,0.08)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary)/10 text-(--primary)">
                      <Icon size={22} />
                    </div>

                    <h3 className="mb-2 text-xl font-black text-(--primary-dark)">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">{item.value}</p>
                  </article>
                )
              })}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
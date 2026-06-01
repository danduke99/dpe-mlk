import Image from "next/image"

import { Container } from "@/components/shared/container"
import { FeatureCard } from "@/components/shared/feature-card"
import { SectionHeading } from "@/components/shared/section-heading"
import { features, galleryImages, siteConfig } from "@/lib/site-data"

export function WelcomeSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our School Community"
          title="Welcome to"
          highlightedText={siteConfig.shortName}
          description={`${siteConfig.name} is a vibrant learning community dedicated to nurturing the minds, hearts, and character of our students.`}
        />

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="relative rounded-4xl bg-[#f3f4f6] p-4 sm:p-6">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-yellow/40 blur-2xl" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-accent-green/30 blur-2xl" />

          <div className="relative grid gap-5 sm:grid-cols-2 md:grid-cols-5">
            {galleryImages.map((src, index) => (
              <a
                key={`${src}-${index}`}
                href={src}
                className="group relative block h-64 overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <Image
                  src={src}
                  alt={`${siteConfig.shortName} gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
import { Container } from "@/components/shared/container"

export function LearningCta() {
  return (
    <section className="absolute w-full z-10 bg-white">
      <Container>
        <div className="relative -mb-32 overflow-hidden rounded-[2.5rem] bg-linear-to-r from-[#a369fa] to-[#432c67] px-8 py-14 sm:px-12 lg:px-24">
          <div className="absolute -left-10 bottom-8 h-32 w-32 rounded-full bg-[#f4c542]/30 blur-2xl" />
          <div className="absolute -right-8 top-8 h-32 w-32 rounded-full bg-[#4caf50]/25 blur-2xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#f4c542]">
              Every child can lead
            </p>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Building confident learners with strong values, bright futures,
              and a love for lifelong learning.
            </h2>
          </div>
        </div>
      </Container>
    </section>
  )
}
"use client"

import Link from "next/link"
import { ArrowRight, Home, Sparkles } from "lucide-react"

import { Container } from "@/components/shared/container"

type PageHeroProps = {
  eyebrow?: string
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel = "Back to Home",
  ctaHref = "/",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent-yellow/25 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-accent-green/20 blur-3xl" />

      <Container className="relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-accent-yellow backdrop-blur">
              <Sparkles size={15} />
              {eyebrow}
            </div>
          )}

          <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-white/80">
            {description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href={ctaHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-yellow px-6 py-3 font-extrabold text-primary-dark transition hover:-translate-y-1 hover:bg-white"
            >
              {ctaLabel}
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              <Home size={18} />
              Home
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="grid h-52 w-52 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
            <div className="grid h-36 w-36 place-items-center rounded-full border border-accent-yellow/40">
              <span className="text-5xl font-black text-accent-yellow">MLK</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
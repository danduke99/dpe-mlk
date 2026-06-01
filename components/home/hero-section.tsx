"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react"
import { useState } from "react"

import { Container } from "@/components/shared/container"
import { siteConfig } from "@/lib/site-data"

const heroStats = [
  { label: "Learning", value: "Excellence" },
  { label: "Values", value: "Leadership" },
  { label: "Growth", value: "Confidence" },
]

export function HeroSection() {
  const [activeStat, setActiveStat] = useState(0)

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute -right-40 -top-40 h-136 w-136 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute left-8 top-24 h-28 w-28 rounded-full bg-accent-yellow/40 blur-2xl" />
      <div className="absolute bottom-20 right-24 h-32 w-32 rounded-full bg-accent-green/25 blur-2xl" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-extrabold text-primary">
            <Sparkles size={16} className="text-accent-yellow" />
            Welcome to {siteConfig.shortName}
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-primary-dark sm:text-6xl lg:text-7xl">
            Inspiring Excellence, Leadership, and{" "}
            <span className="relative inline-block text-primary">
              Learning
              <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-accent-yellow" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            At {siteConfig.name}, we empower students through academic
            excellence, character development, and a commitment to building
            future leaders.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-green px-7 py-3 font-extrabold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1 hover:bg-primary"
            >
              Learn About Us
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-3 font-extrabold text-primary-dark transition hover:-translate-y-1 hover:border-accent-yellow hover:bg-accent-yellow/10"
            >
              Contact School
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat, index) => (
              <button
                key={stat.label}
                type="button"
                onMouseEnter={() => setActiveStat(index)}
                onFocus={() => setActiveStat(index)}
                className={`rounded-2xl border p-4 text-left transition ${
                  activeStat === index
                    ? "border-accent-green bg-accent-green/10"
                    : "border-gray-100 bg-white hover:border-accent-yellow"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-black text-primary-dark">
                  {stat.value}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-8 rounded-[3rem] bg-gray-100" />

          <div className="absolute left-0 top-12 z-10 hidden rounded-3xl bg-white p-4 shadow-xl shadow-primary/10 transition hover:-translate-y-1 md:block">
            <BookOpen className="mb-2 text-primary" size={26} />
            <p className="text-sm font-black text-primary-dark">
              Strong Foundation
            </p>
            <p className="text-xs text-gray-500">Literacy • Numeracy • Values</p>
          </div>

          <div className="absolute bottom-12 right-0 z-10 hidden rounded-3xl bg-white p-4 shadow-xl shadow-primary/10 transition hover:-translate-y-1 md:block">
            <GraduationCap className="mb-2 text-accent-green" size={28} />
            <p className="text-sm font-black text-primary-dark">
              Future Leaders
            </p>
            <p className="text-xs text-gray-500">Confidence • Service • Growth</p>
          </div>

          <div className="relative transition duration-500 hover:scale-[1.02]">
            <Image
              src="/assets/img/banner-img.png"
              alt="Students learning at school"
              width={620}
              height={720}
              className="mx-auto h-auto w-full max-w-lg object-contain"
              priority
            />
          </div>
        </div>
      </Container>

      <h2 className="pointer-events-none absolute bottom-8 -left-8 text-8xl font-black text-primary/5 sm:text-[10rem]">
        MLK
      </h2>
    </section>
  )
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Container } from "@/components/shared/container";
import { contactItems, navItems, siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="bg-white">
      <Container>
        <div className="flex items-center justify-between border-b border-gray-200 py-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/placeholder.jpg"
              alt={`${siteConfig.name} logo`}
              width={72}
              height={72}
              className="h-14 w-auto"
              priority
            />

            <div className="hidden leading-tight sm:block">
              <p className="text-lg font-extrabold text-[#432c67]">
                {siteConfig.shortName}
              </p>
              <p className="text-xs font-semibold text-gray-500">
                Excellence • Leadership • Learning
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {contactItems.slice(1).map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="rounded-2xl bg-[#5b3c88]/10 p-2 text-[#5b3c88]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h4 className="text-sm font-extrabold text-[#432c67]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="rounded-2xl border border-gray-200 p-3 text-[#5b3c88] lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>

        <nav className="hidden py-6 lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative pb-2 text-base font-extrabold text-(--primary-dark) transition hover:text-(--accent-green)"
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-1 rounded-full transition-all duration-300 ${
                      index === 0
                        ? "w-7 bg-(--accent-green)"
                        : "w-0 bg-(--accent-yellow) group-hover:w-7"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

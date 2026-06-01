import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/shared/container"
import { contactItems, navItems, siteConfig, socialLinks } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="bg-brand-gray-light pb-8 pt-82 text-black">
      <Container>
        <div className="grid h-full gap-12 border-b border-white/20 pb-14 md:grid-cols-3">
          <div>
            <Image
              src="/images/placeholder.jpg"
              alt={`${siteConfig.name} logo`}
              width={160}
              height={60}
              className="mb-7 h-14 w-auto"
            />

            <h3 className="mb-3 text-xl font-black text-black">
              {siteConfig.shortName}
            </h3>

            <p className="max-w-sm text-sm leading-6 text-black/75">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-black text-black">Contact</h3>

            <ul className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="mt-1 rounded-xl bg-white/10 p-2 text-accent-yellow">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-extrabold text-black">
                        {item.title}
                      </h4>
                      <p className="text-sm text-black/70">{item.value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-black text-black">Quick Links</h3>

            <ul className="space-y-2">
              {navItems.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-black/75 transition hover:text-accent-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-7 md:flex-row">
          <p className="text-sm text-black/70">
            © Copyrights 2026 {siteConfig.shortName}. All rights reserved.
          </p>

          <ul className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:bg-accent-yellow"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={18}
                    height={18}
                    className="h-4 w-4 object-contain"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
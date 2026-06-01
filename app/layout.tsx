import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Dr. Martin Luther King Jr. Primary School",
  description:
    "A nurturing primary school committed to excellence, leadership, and lifelong learning.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>{children}</body>
    </html>
  )
}
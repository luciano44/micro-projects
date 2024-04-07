import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.scss"
import Providers from "./providers"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Micro Projects",
  description:
    "Micro Projects hub, where I bring to life every new idea or tech I learn! Dive in and explore my journey of constant discovery",
  icons: {
    icon: ["icon.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

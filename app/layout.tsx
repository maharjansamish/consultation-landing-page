import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Digital Marketing Consultation in Nepal | Samish Digital Wave",
  description: "Book a free digital marketing consultation with Samish Digital Wave. Discover practical opportunities to improve your online presence and grow your business in Nepal.",
  openGraph: {
    title: "Free Digital Marketing Consultation in Nepal | Samish Digital Wave",
    description: "Book a free digital marketing consultation with Samish Digital Wave. Discover practical opportunities to improve your online presence and grow your business in Nepal.",
    images: [{ url: "/samish-logo-horizontal-dark.png", alt: "Samish Digital Wave logo" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Free Digital Marketing Consultation in Nepal | Samish Digital Wave", description: "Book a free digital marketing consultation with Samish Digital Wave.", images: ["/samish-logo-horizontal-dark.png"] },
  icons: { icon: "/samish-icon-512.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

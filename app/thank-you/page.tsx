import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThankYouContent } from "@/components/thank-you-content";

export const metadata: Metadata = { title: "Thank You | Samish Digital Wave", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <><SiteHeader /><Suspense fallback={<main className="thankyou-main"><p>Loading preview…</p></main>}><ThankYouContent /></Suspense><SiteFooter /></>;
}

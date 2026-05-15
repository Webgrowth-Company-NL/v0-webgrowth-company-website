import type { Metadata } from "next";
import { OplossingenHubPage } from "@/components/oplossingen-hub-page";
import { pageByPath } from "@/lib/pages";

const SITE_URL = "https://webgrowth.company";
const page = pageByPath("/oplossingen")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: page.path },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${SITE_URL}${page.path}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
  },
};

export default function Page() {
  return <OplossingenHubPage />;
}

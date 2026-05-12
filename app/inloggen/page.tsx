import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import { pageByPath } from "@/lib/pages";

const page = pageByPath("/inloggen")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: page.path },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaceholderPage page={page} />;
}

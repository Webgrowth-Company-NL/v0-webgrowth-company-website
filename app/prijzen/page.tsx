import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/placeholder-page";
import { pageByPath } from "@/lib/pages";

const page = pageByPath("/prijzen")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: page.path },
};

export default function Page() {
  return <PlaceholderPage page={page} />;
}

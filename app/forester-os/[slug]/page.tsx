import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/placeholder-page";
import { FORESTER_PAGES, pageBySlug } from "@/lib/pages";

export function generateStaticParams() {
  return FORESTER_PAGES.map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug(FORESTER_PAGES, slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.path },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageBySlug(FORESTER_PAGES, slug);
  if (!page) notFound();
  return <PlaceholderPage page={page} />;
}

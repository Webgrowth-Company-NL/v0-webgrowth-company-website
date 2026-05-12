import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/case-page";
import { CASE_STUDIES, caseBySlug } from "@/lib/cases";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/cases/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) notFound();
  return <CasePage study={c} />;
}

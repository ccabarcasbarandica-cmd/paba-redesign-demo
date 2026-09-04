import { permanentRedirect } from 'next/navigation';
import { publicActuations } from '@/lib/content';

export function generateStaticParams() { return publicActuations.map((item) => ({ slug: item.slug })); }

export default async function LegacyCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(`/experiencia-y-actuaciones/${slug}`);
}

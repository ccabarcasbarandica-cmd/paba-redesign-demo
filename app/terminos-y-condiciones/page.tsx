import type { Metadata } from 'next';
import { LegalDocumentNotice } from '@/components/LegalDocumentNotice';

export const metadata: Metadata = { title: 'Términos y condiciones', description: 'Términos y condiciones del sitio de Paba & Asociados.', alternates: { canonical: '/terminos-y-condiciones' }, robots: { index: false, follow: true } };
export default function TermsPage() { return <LegalDocumentNotice title="Términos y condiciones" />; }

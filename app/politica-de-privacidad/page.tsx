import type { Metadata } from 'next';
import { LegalDocumentNotice } from '@/components/LegalDocumentNotice';

export const metadata: Metadata = { title: 'Política de privacidad', description: 'Política de privacidad de Paba & Asociados.', alternates: { canonical: '/politica-de-privacidad' }, robots: { index: false, follow: true } };
export default function PrivacyPolicyPage() { return <LegalDocumentNotice title="Política de privacidad" />; }

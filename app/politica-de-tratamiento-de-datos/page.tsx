import type { Metadata } from 'next';
import { LegalDocumentNotice } from '@/components/LegalDocumentNotice';

export const metadata: Metadata = { title: 'Política de tratamiento de datos', description: 'Política de tratamiento de datos de Paba & Asociados.', alternates: { canonical: '/politica-de-tratamiento-de-datos' }, robots: { index: false, follow: true } };
export default function DataPolicyPage() { return <LegalDocumentNotice title="Política de tratamiento de datos" />; }

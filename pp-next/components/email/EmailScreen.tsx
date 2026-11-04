'use client';

import { useRouter } from 'next/navigation';
import EmailForm from './EmailForm';

/** /email 화면. 닫으면 메인으로 이동 */
export default function EmailScreen() {
  const router = useRouter();
  return <EmailForm onClose={() => router.push('/')} />;
}

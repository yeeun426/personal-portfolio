"use client";

import { useRouter } from "next/navigation";
import EmailForm from "@/components/email/EmailForm";

export default function EmailPage() {
  const router = useRouter();
  return <EmailForm onClose={() => router.push("/")} />;
}

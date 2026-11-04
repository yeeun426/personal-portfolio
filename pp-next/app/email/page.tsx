import type { Metadata } from "next";
import EmailScreen from "@/components/email/EmailScreen";

export const metadata: Metadata = { title: "Contact" };

export default function EmailPage() {
  return <EmailScreen />;
}

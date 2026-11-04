import type { Metadata } from "next";
import MainAbout from "@/components/main/MainAbout";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <MainAbout />;
}

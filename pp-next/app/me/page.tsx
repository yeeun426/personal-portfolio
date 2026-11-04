import type { Metadata } from "next";
import MeScreen from "@/components/popup/MeScreen";

export const metadata: Metadata = { title: "About Me" };

export default function MePage() {
  return <MeScreen />;
}

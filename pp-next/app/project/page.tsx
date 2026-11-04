import type { Metadata } from "next";
import MainProject from "@/components/main/MainProject";
import { getProjectSummaries } from "@/constants/projects";

export const metadata: Metadata = { title: "Project" };

export default function ProjectPage() {
  return <MainProject projects={getProjectSummaries()} />;
}

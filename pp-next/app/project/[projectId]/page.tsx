import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Portfolio from "@/components/portfolio/Portfolio";
import { getProject, projects } from "@/constants/projects";

type Params = { params: Promise<{ projectId: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ projectId: String(p.id) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProject(Number(projectId));
  return project
    ? { title: `${project.name} | 이예은 포트폴리오`, description: project.detail }
    : {};
}

export default async function ProjectDetailPage({ params }: Params) {
  const { projectId } = await params;
  const id = Number(projectId);
  if (!getProject(id)) notFound();

  return <Portfolio projectId={id} />;
}

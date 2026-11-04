import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Portfolio from "@/components/portfolio/Portfolio";
import { toPublicPath } from "@/types/project";
import {
  getProject,
  getProjectIds,
  getProjectPageImages,
} from "@/constants/projects";

type Params = { params: Promise<{ projectId: string }> };

export function generateStaticParams() {
  return getProjectIds().map((id) => ({ projectId: String(id) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProject(Number(projectId));
  if (!project) return {};

  // 링크 공유 시 프로젝트 대표 이미지로 미리보기
  return {
    title: project.name,
    description: project.detail,
    openGraph: {
      title: `${project.name} | 이예은 포트폴리오`,
      description: project.detail,
      images: [{ url: toPublicPath(project.img), alt: project.name }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { projectId } = await params;
  const id = Number(projectId);
  const project = getProject(id);
  if (!project) notFound();

  return <Portfolio project={project} images={getProjectPageImages(id)} />;
}

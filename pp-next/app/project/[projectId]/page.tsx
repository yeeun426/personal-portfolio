import Link from "next/link";
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

  // 새로고침/직접 접속으로 모달 없이 열렸을 때: 메인으로 돌아가는 링크
  return (
    <>
      <div className="mx-auto box-border w-full max-w-[1000px] px-12 pt-8 text-left max-[801px]:px-6">
        <Link
          href="/#project"
          className="text-[15px] text-[#86868b] no-underline hover:text-[#7c5cc4]"
        >
          ← 전체 프로젝트
        </Link>
      </div>
      <Portfolio project={project} images={getProjectPageImages(id)} />
    </>
  );
}

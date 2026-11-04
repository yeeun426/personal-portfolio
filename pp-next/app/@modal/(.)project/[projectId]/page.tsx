import { notFound } from "next/navigation";
import Portfolio from "@/components/portfolio/Portfolio";
import ProjectModal from "@/components/portfolio/ProjectModal";
import {
  getProject,
  getProjectIds,
  getProjectPageImages,
} from "@/constants/projects";

export function generateStaticParams() {
  return getProjectIds().map((id) => ({ projectId: String(id) }));
}

// 사이트 안에서 /project/[id] 로 이동하면 페이지 대신 모달로 띄움 (Intercepting Route)
// 새로고침이나 주소 직접 입력 시에는 app/project/[projectId]/page.tsx 가 전체 페이지로 렌더링됨
export default async function ProjectModalPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const id = Number(projectId);
  const project = getProject(id);
  if (!project) notFound();

  return (
    <ProjectModal>
      <Portfolio project={project} images={getProjectPageImages(id)} />
    </ProjectModal>
  );
}

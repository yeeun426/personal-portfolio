import { notFound } from "next/navigation";
import Portfolio from "@/components/portfolio/Portfolio";
import ProjectModal from "@/components/portfolio/ProjectModal";
import { getProject, getProjectPageImages } from "@/constants/projects";

// generateStaticParams 는 넣지 않음: Intercepting Route 를 미리 생성하면
// 프로덕션에서 소프트 이동 시 RSC 요청이 404 가 나는 문제가 있음

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

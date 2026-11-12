import { notFound } from "next/navigation";
import CareerDetailView from "@/components/career/CareerDetailView";
import ProjectModal from "@/components/portfolio/ProjectModal";
import { getCareerDetail } from "@/constants/careerDetail";

// 사이트 안에서 /career/[slug] 로 이동하면 모달로 띄움 (프로젝트 상세와 같은 Intercepting Route)
// generateStaticParams 는 넣지 않음 — (.)project 와 같은 이유
export default async function CareerModalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getCareerDetail(slug);
  if (!detail) notFound();

  return (
    <ProjectModal label="경력기술서">
      <CareerDetailView detail={detail} />
    </ProjectModal>
  );
}

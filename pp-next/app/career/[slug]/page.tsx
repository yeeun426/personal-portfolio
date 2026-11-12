import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CareerDetailView from "@/components/career/CareerDetailView";
import { careerDetails, getCareerDetail } from "@/constants/careerDetail";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careerDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = getCareerDetail(slug);
  if (!detail) return {};
  return {
    title: `${detail.company} 경력기술서`,
    description: `${detail.company} · ${detail.role} (${detail.period})`,
  };
}

// 새로고침/직접 접속 시 모달 없이 전체 페이지로 표시
export default async function CareerDetailPage({ params }: Params) {
  const { slug } = await params;
  const detail = getCareerDetail(slug);
  if (!detail) notFound();

  return (
    <>
      <div className="mx-auto box-border w-full max-w-[1000px] px-12 pt-8 text-left max-[801px]:px-6">
        <Link
          href="/#career"
          className="text-[15px] text-[#86868b] no-underline hover:text-[#7c5cc4]"
        >
          ← 메인으로
        </Link>
      </div>
      <CareerDetailView detail={detail} />
    </>
  );
}

import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

/** Career/Activity 에서 상세 팝업을 여는 버튼 — 프로젝트(/project/[id]) 또는 경력기술서(/career/[slug]) */
export default function DetailLink({
  projectId,
  href,
  label = '자세히 보기',
  className = '',
}: {
  projectId?: number;
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href={href ?? `/project/${projectId}`}
      scroll={false}
      className={`group inline-flex w-fit items-center gap-2 rounded-[999px] border border-[#d2d2d7] bg-white px-4 py-2 text-[14px] font-semibold text-[#1d1d1f] no-underline transition-colors duration-200 hover:border-[#7c5cc4] hover:text-[#7c5cc4] ${className}`}
    >
      {label}
      <BsArrowUpRight className='h-3 w-3 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]' />
    </Link>
  );
}

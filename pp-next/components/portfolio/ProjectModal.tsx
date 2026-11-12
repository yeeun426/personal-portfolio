'use client';

import { useEffect, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Modal from 'react-modal';
import { BsXLg } from 'react-icons/bs';

/** app/@modal/(.)project/[projectId], (.)career/[slug] 에서 사용. 닫으면 이전 주소로 돌아감 */
export default function ProjectModal({
  children,
  label = '프로젝트 상세',
}: {
  children: ReactNode;
  /** 스크린리더용 모달 이름 */
  label?: string;
}) {
  const router = useRouter();

  // app/layout.tsx 의 #app-root (스크린리더용 aria-hidden 처리 대상)
  // useEffect 에서 setAppElement 하면 첫 렌더 뒤라 늦어서 react-modal 경고가 남 → 렌더 시점에 바로 넘김
  const appElement =
    typeof document === 'undefined' ? undefined : (document.getElementById('app-root') ?? undefined);

  useEffect(() => {
    // 모달이 열려 있는 동안 배경 스크롤 방지
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const closeModal = () => router.back();

  return (
    <Modal
      isOpen
      appElement={appElement}
      onRequestClose={closeModal}
      contentLabel={label}
      overlayClassName='fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 backdrop-blur-sm animate-fade-in max-[801px]:items-end'
      className='relative h-[88vh] w-[92vw] max-w-[1100px] overflow-y-auto overscroll-contain rounded-[24px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] outline-none animate-modal-in max-[801px]:h-[92vh] max-[801px]:w-full max-[801px]:rounded-b-none'
    >
      {/* 스크롤해도 오른쪽 위에 붙어 있는 닫기 버튼 */}
      <div className='pointer-events-none sticky top-0 z-10 flex h-0 justify-end'>
        <button
          onClick={closeModal}
          aria-label='닫기'
          className='pointer-events-auto mt-4 mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7]/85 text-[#6e6e73] backdrop-blur-md transition-colors duration-200 hover:bg-[#e8e8ed] hover:text-[#1d1d1f] max-[801px]:mt-3 max-[801px]:mr-3 max-[801px]:h-8 max-[801px]:w-8'
        >
          <BsXLg className='h-[13px] w-[13px]' />
        </button>
      </div>
      {children}
    </Modal>
  );
}

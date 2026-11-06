'use client';

import { useEffect, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Modal from 'react-modal';
import { BsXLg } from 'react-icons/bs';

/** app/@modal/(.)project/[projectId] 에서 사용. 닫으면 이전 주소로 돌아감 */
export default function ProjectModal({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // app/layout.tsx 의 #app-root (스크린리더용 aria-hidden 처리 대상)
    Modal.setAppElement('#app-root');

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
      onRequestClose={closeModal}
      contentLabel='프로젝트 상세'
      overlayClassName='fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 backdrop-blur-sm animate-fade-in max-[801px]:items-end'
      className='relative h-[88vh] w-[92vw] max-w-[1100px] overflow-y-auto overscroll-contain rounded-[24px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] outline-none animate-modal-in max-[801px]:h-[92vh] max-[801px]:w-full max-[801px]:rounded-b-none'
    >
      {/* 스크롤해도 오른쪽 위에 붙어 있는 닫기 버튼 */}
      <div className='pointer-events-none sticky top-0 z-10 flex h-0 justify-end'>
        <button
          onClick={closeModal}
          aria-label='닫기'
          className='pointer-events-auto mt-5 mr-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1d1d1f] shadow-[0_2px_12px_rgba(0,0,0,0.15)] backdrop-blur transition-colors duration-200 hover:bg-[#1d1d1f] hover:text-white'
        >
          <BsXLg className='h-4 w-4' />
        </button>
      </div>
      {children}
    </Modal>
  );
}

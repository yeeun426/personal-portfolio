'use client';

import { useEffect, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Modal from 'react-modal';

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    borderRadius: '8px',
    padding: '0',
    width: '90vw',
    height: '85vh',
    maxWidth: '1200px',
    backgroundColor: '#ffffff',
  },
};

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
      style={customStyles}
      contentLabel='Portfolio Modal'
    >
      <div style={{ position: 'relative', height: '100%' }}>
        <button
          onClick={closeModal}
          aria-label='닫기'
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 10,
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          }}
        >
          ×
        </button>

        {children}
      </div>
    </Modal>
  );
}

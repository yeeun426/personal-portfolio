'use client';

import { useEffect } from 'react';
import Modal from 'react-modal';
import Portfolio from './Portfolio';

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

interface ProjectModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  selectedProjectId: number | null;
}

export default function ProjectModal({
  isModalOpen,
  closeModal,
  selectedProjectId,
}: ProjectModalProps) {
  useEffect(() => {
    // app/layout.tsx 의 #app-root (스크린리더용 aria-hidden 처리 대상)
    Modal.setAppElement('#app-root');
  }, []);

  return (
    <Modal
      isOpen={isModalOpen}
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

        {selectedProjectId !== null && (
          <Portfolio projectId={selectedProjectId} />
        )}
      </div>
    </Modal>
  );
}

import React from 'react';
import Modal from 'react-modal';
import Portfolio from '../../pages/Portfolio/Portfolio';

Modal.setAppElement('#root');

const ProjectModal = ({
  isModalOpen,
  closeModal,
  customStyles,
  selectedProjectId,
}) => {
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
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          }}
        >
          ×
        </button>

        {/* 포트폴리오 내용 */}
        {selectedProjectId && <Portfolio projectId={selectedProjectId} />}
      </div>
    </Modal>
  );
};

export default ProjectModal;

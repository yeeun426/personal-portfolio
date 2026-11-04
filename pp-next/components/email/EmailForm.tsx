'use client';

import { useEffect, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './EmailForm.module.css';

export default function EmailForm({ onClose }: { onClose?: () => void }) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm('service_k016b01', 'template_xccov7c', form.current, {
        publicKey: 'kwxzfvrcfdR9j1TnB',
      })
      .then(
        () => {
          alert('성공적으로 이메일이 전송되었습니다.');
          form.current?.reset();
        },
        () => {
          alert('이메일이 전송이 실패되었습니다.');
        }
      );
  };

  // 모달이 떠 있는 동안 배경 스크롤 고정
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className={styles.root} onClick={onClose}>
      <form ref={form} onSubmit={sendEmail} onClick={(e) => e.stopPropagation()}>
        <div className='email-items'>
          <label>이메일</label>
          <input
            type='email'
            name='user_email'
            placeholder='답변 받으실 이메일을 입력해주세요.'
            required
          />
        </div>
        <div className='email-items'>
          <label>제목</label>
          <input
            type='text'
            name='ask_title'
            placeholder='제목을 입력해주세요.(20자 이내)'
            maxLength={20}
            required
          />
        </div>
        <div className='email-items-contents'>
          <label>내용</label>
          <textarea name='message' placeholder='내용을 입력해주세요.' required />
        </div>
        <div className='email-items-btn'>
          <input type='submit' value='send' />
          <button type='button' onClick={onClose}>
            close
          </button>
        </div>
      </form>
    </div>
  );
}

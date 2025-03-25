import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(props) {
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.history.scrollRestoration = 'manual'; // 브라우저의 기본 스크롤 복원 방지
    window.scrollTo(0, 0);
  }, [pathname]); // 스크롤을 맨 위로 이동시킴

  return <>{props.children}</>;
}

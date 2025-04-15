import React from 'react';

const MainYeEun = () => {
  return (
    <div className='main-container'>
      <h2 className='h1'>
        프론트엔드 개발자 <strong>이예은</strong>입니다.
      </h2>
      <p>
        <strong>꾸준하게</strong> 빈틈을 <strong>채워나가는</strong>{' '}
        개발자입니다.
        <br />
        사용자가 필요로 하는 것을 <strong>한발 먼저</strong> 고민하겠습니다.
      </p>
      <img
        src={process.env.PUBLIC_URL + '/images/main/leeyeeun.webp'}
        alt='leeyeeun'
      />
    </div>
  );
};

export default MainYeEun;

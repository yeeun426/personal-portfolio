import { SearchStyled } from './styled';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Search() {
  const navigate = useNavigate();

  return (
    <div className='mainIntro-wrapper'>
      <SearchStyled>
        <div>Lee</div>
        <div className='search-container'>
          <input value='이예은' />
          <img
            src={process.env.PUBLIC_URL + '/images/icon/search.png'}
            alt='주소'
          />
        </div>
      </SearchStyled>
    </div>
  );
}

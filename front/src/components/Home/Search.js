import { SearchStyled } from './styled';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Search() {
  const navigate = useNavigate();

  return (
    <div className='mainIntro-wrapper'>
      <SearchStyled>
        <div>
          <div></div>
          <img />
        </div>
      </SearchStyled>
    </div>
  );
}

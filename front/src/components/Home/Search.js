import { SearchStyled } from './styled';
import React, { useRef, useEffect } from 'react';

export default function Search() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className='mainIntro-wrapper'>
      <SearchStyled>
        <img
          className='search-logo'
          src={process.env.PUBLIC_URL + '/images/icon/logo.png'}
          alt='주소'
        />
        <div className='search-container'>
          <input ref={inputRef} value='이예은' />
          <img
            src={process.env.PUBLIC_URL + '/images/icon/search.png'}
            alt='주소'
          />
        </div>
      </SearchStyled>
    </div>
  );
}

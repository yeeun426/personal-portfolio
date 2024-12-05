import React, { useState, useEffect } from 'react';
import TypeItIntro from '../../components/Start/TypeItIntro';
import { TestStyled } from '../../components/Start/style';
import Rellax from 'rellax';

function Test() {
  useEffect(() => {
    const rellax = new Rellax('.rellax', {
      horizontal: true,
      center: true,
    });
  }, []);

  return (
    <TestStyled>
      <TypeItIntro />
    </TestStyled>
  );
}

export default Test;

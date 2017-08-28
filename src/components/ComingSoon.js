import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const ComingSooWrapper = styled.div`
position:absolute;
width:100%;
height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overflow:hidden;
`;

const ComingSoonText = styled.p`
  font-family:serif;
  text-transform:uppercase;
  letter-spacing:0.3em;
`;

const ComingSoon = () => (
    <ComingSooWrapper>
      <Logo white='#fff' blue='#6ccef5' black='#000' />
      <ComingSoonText>Coming Soon</ComingSoonText>
    </ComingSooWrapper>
  )
;

export default ComingSoon;
import React from 'react';
import Logo from './components/Logo';
import Main from './containers/Main';

import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid grey;
  width: 100%;
  max-width:960px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 100%;
  }`;

const App = () => (
  <Wrapper>
    <Logo white='#fff' blue='#6ccef5' black='#000' />
    <Main />
  </Wrapper>
);

export default App;

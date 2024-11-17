import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html, body {
  font-family: sans-serif;
  margin: 0;
  }

  // 구글 로그인 한글 버전용 폰트
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }


`;

export default GlobalStyle;

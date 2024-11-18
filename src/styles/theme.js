import { css } from 'styled-components';

export const theme = {
  InnerSection: '24vw',
  MiddleSection: '60vw',
  MidOutSection: '72vw',
  OuterSection: '92vw',

  fixedInner: css`
    @media (min-width: 600px) {
      width: 120px;
    }
  `,

  fixedMiddle: css`
    @media (min-width: 600px) {
      width: 360px;
    }
  `,

  fixedMidOut: css`
    @media (min-width: 600px) {
      width: 400px;
    }
  `,

  fixedOuter: css`
    @media (min-width: 600px) {
      width: 480px;
    }
  `,

  fixedFontSize: css`
    @media (min-width: 600px) {
      font-size: 3rem;
    }
  `,

  backgroundColors: {
    primary: '#f0f8ff', // 기본 배경색 (Alice Blue)
    secondary: '#f5f5f5', // 서브 배경색 (Light Grey)
    accent: '#add8e6', // 강조 배경색 (Light Blue)
    dark: '#30383F', // 어두운 배경색
    light: '#FFFFFF', // 밝은 배경색
    grey: '#CCD3D9',
  },

  googleButtonColors: {
    
  }
};

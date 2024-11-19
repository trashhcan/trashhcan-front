import { css } from 'styled-components';

export const theme = {
  MinimumSection: '20vw',
  InnerSection: '24vw',
  InMidSection: '32vw',
  MiddleSection: '60vw',
  MidOutSection: '72vw',
  OuterTopSection: '88vw',
  OuterSection: '92vw',

  fixedMin: css`
    @media (min-width: 600px) {
      width: 100px;
    }
  `,

  fixedInner: css`
    @media (min-width: 600px) {
      width: 120px;
    }
  `,

  fixedInMid: css`
    @media (min-width: 600px) {
      width: 180px;
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

  fixedOuterTop: css`
    @media (min-width: 600px) {
      width: 450px;
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

  colors: {
    light: '#FFFFFF', // 밝은 배경색
    grey: '#CCD3D9',
    greySecond: '#616E7A',
    dark: '#30383F',
  },

  backgroundColors: {
    primary: '#f0f8ff', // 기본 배경색 (Alice Blue)
    secondary: '#f5f5f5', // 서브 배경색 (Light Grey)
    accent: '#add8e6', // 강조 배경색 (Light Blue)
    dark: '#30383F', // 어두운 배경색
    light: '#FFFFFF', // 밝은 배경색
    grey: '#CCD3D9',
    greySecond: '#616E7A',
  },

  googleButtonColors: {
    
  }
};

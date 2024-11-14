import { css } from 'styled-components';

export const theme = {
  InnerSection: '24vw',
  MiddleSection: '48vw',
  OuterSection: '96vw',

  fixedInner: css`
    @media (min-width: 600px) {
      width: 120px;
    }
  `,

  fixedMiddle: css`
    @media (min-width: 600px) {
      width: 240px;
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
};

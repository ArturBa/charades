import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import background from './Background.png';

/* eslint-disable-next-line */
export interface BackgroundProps {
  children?: ReactNode;
}

const StyledBackground = styled.div`
  ${(props: any) => css`
    background-color: #f2f2f2;
    min-width: 100%;
    min-height: 100%;
    background-image: url(${props.background});
  `}
`;

export function Background(props: BackgroundProps) {
  const img = { background };
  return <StyledBackground {...img}>{props.children}</StyledBackground>;
}

export default Background;

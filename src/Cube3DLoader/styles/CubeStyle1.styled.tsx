import styled, { keyframes } from 'styled-components'

import { CubeStyleProps } from './common'

const animation = keyframes`
    100% { transform: rotateY(180deg) rotateX(360deg) rotateZ(540deg);}
`

export const CubeStyle1 = styled.div<CubeStyleProps>`
  position: relative;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  animation: ${animation} 3000ms ease-in-out infinite;
  transform-style: preserve-3d;
  transform-origin: center;

  > .face {
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &.front {
      background: ${(props) => props.color};
      transform: translateZ(${(props) => props.size / 2}px);
    }

    &.back {
      background: ${(props) => props.color};
      transform: translateZ(${(props) => -props.size / 2}px);
    }

    &.left {
      background: ${(props) => props.colorLighter};
      transform: translateX(${(props) => -props.size / 2}px) rotateY(90deg);
    }

    &.right {
      background: ${(props) => props.colorLighter};
      transform: translateX(${(props) => props.size / 2}px) rotateY(90deg);
    }

    &.top {
      background: ${(props) => props.colorDarker};
      transform: translateY(${(props) => -props.size / 2}px) rotateX(90deg);
    }

    &.bottom {
      background: ${(props) => props.colorDarker};
      transform: translateY(${(props) => props.size / 2}px) rotateX(90deg);
    }
  }
`

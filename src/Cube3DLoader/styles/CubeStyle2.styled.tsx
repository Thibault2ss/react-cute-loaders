import styled, { keyframes } from 'styled-components'

import { CubeStyleProps } from './common'

const animation = keyframes`
  100% { transform: rotateY(360deg);}
`

export const CubeStyle2 = styled.div<CubeStyleProps>`
  position: relative;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  animation: ${animation} 2000ms cubic-bezier(0.65, 0, 0.35, 1) infinite;
  transform-style: preserve-3d;
  transform-origin: center;

  > .face {
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &.left {
      background: ${(props) => props.colorLighter};

      transform: rotateX(-54.7356deg) rotateY(135deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.front {
      background: ${(props) => props.color};

      transform: rotateX(-54.7356deg) rotateY(45deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.back {
      background: ${(props) => props.color};

      transform: rotateX(-54.7356deg) rotateY(225deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.bottom {
      background: ${(props) => props.colorDarker};
      transform: rotateX(35.2644deg) rotateY(180deg) rotateZ(-45deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.top {
      background: ${(props) => props.colorDarker};
      transform: rotateX(35.2644deg) rotateZ(-45deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.right {
      background: ${(props) => props.colorLighter};
      transform: rotateX(-54.7356deg) rotateY(315deg)
        translateZ(${(props) => props.size / 2}px);
    }
  }
`

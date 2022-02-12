import styled, { keyframes } from 'styled-components'

import { CubeStyleProps } from './common'

const animation = keyframes`
  100% { transform: rotateY(360deg);}
`

const animationColor = (light: string, dark: string) => keyframes`
  0% { background: ${light};}
  25% { background: ${dark};}
  50% { background: ${dark};}
  75% { background: ${light};}
  100% { background: ${light};}
  `

export const CubeStyle4 = styled.div<CubeStyleProps>`
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

    animation: ${(props) =>
        animationColor(props.colorLighter, props.colorDarker)}
      2000ms cubic-bezier(0.65, 0, 0.35, 1) infinite;

    &.left {
      animation-delay: 0ms;
      transform: rotateX(-54.7356deg) rotateY(135deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.front {
      animation-delay: -666ms;
      transform: rotateX(-54.7356deg) rotateY(45deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.back {
      animation-delay: -666ms;
      transform: rotateX(-54.7356deg) rotateY(225deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.bottom {
      animation-delay: -1332ms;
      transform: rotateX(35.2644deg) rotateY(180deg) rotateZ(-45deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.top {
      animation-delay: -1332ms;
      transform: rotateX(35.2644deg) rotateZ(-45deg)
        translateZ(${(props) => props.size / 2}px);
    }

    &.right {
      animation-delay: 0ms;
      transform: rotateX(-54.7356deg) rotateY(315deg)
        translateZ(${(props) => props.size / 2}px);
    }
  }
`

import React from 'react'
import { shadeColor } from '../utils/colors'

import { CUBES_STYLES, CubeVariant } from './styles'

type Props = {
  color?: string
  variant?: CubeVariant
  size?: number
}

const _Cube3DLoader: React.FC<Props> = ({
  color = '#004cff',
  variant = '1',
  size = 20
}) => {
  const colorLighter = shadeColor(color, 70)
  const colorDarker = shadeColor(color, -30)
  const edgeSize = size / Math.sqrt(3)
  const padding = (size - edgeSize) / 2
  const StyledCube = CUBES_STYLES[variant]

  return (
    <div style={{ padding: `${padding}px` }}>
      <StyledCube
        className='cube'
        size={edgeSize}
        color={color}
        colorLighter={colorLighter}
        colorDarker={colorDarker}
      >
        <div className='face front'></div>
        <div className='face back'></div>
        <div className='face left'></div>
        <div className='face right'></div>
        <div className='face top'></div>
        <div className='face bottom'></div>
      </StyledCube>
    </div>
  )
}

export const Cube3DLoader = React.memo(_Cube3DLoader)

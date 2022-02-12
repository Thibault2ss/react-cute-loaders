import { CubeStyle1 } from './CubeStyle1.styled'
import { CubeStyle2 } from './CubeStyle2.styled'
import { CubeStyle3 } from './CubeStyle3.styled'
import { CubeStyle4 } from './CubeStyle4.styled'
import { CubeStyle5 } from './CubeStyle5.styled'

export type CubeVariant = keyof typeof CUBES_STYLES

export const CUBES_STYLES = {
  '1': CubeStyle1,
  '2': CubeStyle2,
  '3': CubeStyle3,
  '4': CubeStyle4,
  '5': CubeStyle5,
}

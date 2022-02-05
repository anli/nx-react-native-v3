import {
  createBox,
  createRestyleComponent,
  VariantProps
} from '@shopify/restyle'
import { Theme } from '../../themes'

const Box = createBox<Theme>()

type Props = VariantProps<Theme, 'viewVariants'> &
React.ComponentProps<typeof Box>

export const View = createRestyleComponent<Props, Theme>([], Box)

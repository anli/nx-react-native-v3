import * as tokens from '@shopify/polaris-tokens'
import { createTheme } from '@shopify/restyle'
import { iOSUIKit } from 'react-native-typography'

const pxToNumber = (px: string): number => {
  return parseInt(px.replace('px', ''), 10)
}

// https://www.figma.com/file/QwZvryiWjvuE0nnBWBDUXn/Polaris-for-Admin%3A-Colors-(Community)?node-id=2989%3A136
// https://www.figma.com/file/PJfPNssHADvRCNbbEDaXql/iOS-15-UI-Kit-for-Figma-(Community)
const base = {
  colors: {
    border: '',
    surface: '',
    text: '',
    success: '',
    warning: '',
    critical: '',
    primary: '',
    icon: '',
    transparent: 'transparent'
  },
  spacing: {
    none: 0,
    extraTight: pxToNumber(tokens.spacingExtraTight),
    tight: pxToNumber(tokens.spacingTight),
    baseTight: pxToNumber(tokens.spacingBaseTight),
    base: pxToNumber(tokens.spacingBase),
    loose: pxToNumber(tokens.spacingLoose),
    extraLoose: pxToNumber(tokens.spacingExtraLoose)
  },
  borderRadii: {
    none: 0,
    extraTight: pxToNumber(tokens.spacingExtraTight),
    tight: pxToNumber(tokens.spacingTight),
    baseTight: pxToNumber(tokens.spacingBaseTight),
    base: pxToNumber(tokens.spacingBase),
    loose: pxToNumber(tokens.spacingLoose),
    extraLoose: pxToNumber(tokens.spacingExtraLoose)
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  textVariants: {
    // https://github.com/hectahertz/react-native-typography/blob/master/src/collections/iOSUIKit.js
    // https://github.com/hectahertz/react-native-typography/blob/master/src/collections/human.js
    defaults: {
      ...iOSUIKit.bodyObject,
      color: 'text'
    },
    largeTitleEmphasized: {
      ...iOSUIKit.largeTitleEmphasizedObject,
      color: 'text'
    },
    body: {
      ...iOSUIKit.bodyObject,
      color: 'text'
    },
    bodyEmphasized: {
      ...iOSUIKit.bodyEmphasizedObject,
      color: 'text'
    },
    title3Emphasized: {
      ...iOSUIKit.title3EmphasizedObject,
      color: 'text'
    },
    footnote: {
      ...iOSUIKit.footnoteObject,
      color: 'text'
    }
  },
  screenVariants: {
    defaults: {
      flex: 1,
      backgroundColor: 'surface'
    }
  },
  textInputVariants: {
    defaults: {
      backgroundColor: 'surface'
    }
  },
  buttonVariants: {
    defaults: {}
  },
  viewVariants: {
    defaults: {},
    elevated: {
      shadowColor: 'text',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5
    }
  }
}

export const baseTheme = createTheme({
  ...base
})

export type Theme = typeof baseTheme

import { Platform } from 'react-native'

export const getHeaderHeightPlatformOffset = (height: number): number =>
  Platform.select({ ios: -height, default: 0 })

import {
  NavBarFlatList,
  NavBarScreen,
  NAV_BAR_HEADER_HEIGHTS,
  View
} from '@nx-react-native/shared/ui'
import React from 'react'
import { list } from '../utils'

const Component = (): React.ReactElement => {
  return (
    <View testID="ListScreen" flex={1}>
      <NavBarScreen headerTitle="List" navTitle="Nav Title">
        <NavBarFlatList
          headerHeight={NAV_BAR_HEADER_HEIGHTS.default}
          data={list.data}
          renderItem={list.renderItem}
        />
      </NavBarScreen>
    </View>
  )
}

const options = {
  headerShown: false
}

export const ListScreen = {
  Component,
  options
}

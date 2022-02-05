import {
  IconButton,
  NavBarFlatList,
  NavBarScreen,
  NAV_BAR_HEADER_HEIGHTS,
  View
} from '@nx-react-native/shared/ui'
import React from 'react'
import { list } from '../utils'

const Component = (): React.ReactElement => {
  return (
    <View testID="HabitListScreen" flex={1}>
      <NavBarScreen
        headerTitle="Habits"
        headerSubtitle="Jan 31 - Feb 6"
        navTitle="Jan 31 - Feb 6"
        headerButtonsComponent={
          <View flexDirection="row">
            <IconButton
              marginHorizontal="extraTight"
              icon="skip-previous"
              size={24}
            />
            <IconButton
              marginHorizontal="extraTight"
              icon="skip-next"
              size={24}
            />
            <IconButton
              marginHorizontal="extraTight"
              icon="calendar"
              size={24}
            />
          </View>
        }>
        <NavBarFlatList
          headerHeight={NAV_BAR_HEADER_HEIGHTS.extended}
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

export const HabitListScreen = {
  Component,
  options
}

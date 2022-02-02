import {
  ArrayElement,
  NavBarFlatList,
  NavBarScreen,
  Text
} from '@nx-react-native/shared/ui'
import React from 'react'

const data = Array.from({ length: 20 }, (_, k) => ({
  id: `${k}`,
  title: 'This is an item'
}))

const Component = (): React.ReactElement => {
  const renderItem = ({
    item
  }: {
    item: ArrayElement<typeof data>
  }): JSX.Element => {
    return (
      <Text padding="loose">
        {item.id}. {item.title}
      </Text>
    )
  }

  return (
    <NavBarScreen title="Scroll up">
      <NavBarFlatList data={data} renderItem={renderItem} />
    </NavBarScreen>
  )
}

const options = {
  headerShown: false
}

export const ListScreen = {
  Component,
  options
}

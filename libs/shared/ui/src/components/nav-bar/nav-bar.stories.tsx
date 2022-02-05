import faker from '@faker-js/faker'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { NavBarFlatList, NavBarScreen, NAV_BAR_HEADER_HEIGHTS } from '.'
import { Text } from '..'
import { ArrayElement } from '../..'

faker.seed(0)
const headerTitle = faker.lorem.word()
const headerSubtitle = faker.lorem.words()

const Meta: ComponentMeta<typeof NavBarScreen> = {
  title: 'NavBar',
  component: NavBarScreen,
  argTypes: {},
  args: {}
}

export default Meta

type Story = ComponentStory<typeof NavBarScreen>

const data = Array.from({ length: 20 }, (_, k) => {
  faker.seed(k)
  const title = faker.lorem.words()

  return {
    id: `${k}`,
    title
  }
})

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

const Stack = createNativeStackNavigator()

const BasicComponent = (): JSX.Element => {
  return (
    <NavBarScreen headerTitle={headerTitle} navTitle={headerTitle}>
      <NavBarFlatList
        headerHeight={NAV_BAR_HEADER_HEIGHTS.default}
        data={data}
        renderItem={renderItem}
      />
    </NavBarScreen>
  )
}

export const Basic: Story = () => {
  return (
    <Stack.Navigator initialRouteName="Default">
      <Stack.Screen
        name="Default"
        component={BasicComponent}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const ExtendedComponent = (): JSX.Element => {
  return (
    <NavBarScreen
      headerTitle={headerTitle}
      headerSubtitle={headerSubtitle}
      navTitle={headerTitle}>
      <NavBarFlatList
        headerHeight={NAV_BAR_HEADER_HEIGHTS.extended}
        data={data}
        renderItem={renderItem}
      />
    </NavBarScreen>
  )
}

export const Extended: Story = () => {
  return (
    <Stack.Navigator initialRouteName="Default">
      <Stack.Screen
        name="Default"
        component={ExtendedComponent}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

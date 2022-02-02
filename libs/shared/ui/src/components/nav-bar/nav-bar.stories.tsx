import faker from '@faker-js/faker'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { NavBarFlatList, NavBarScreen } from '.'
import { Text } from '..'
import { ArrayElement } from '../..'

faker.seed(0)
const headerTitle = faker.lorem.words()

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

export const Basic: Story = () => {
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
    <NavBarScreen title={headerTitle}>
      <NavBarFlatList data={data} renderItem={renderItem} />
    </NavBarScreen>
  )
}

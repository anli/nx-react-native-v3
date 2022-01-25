import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { Screen } from './screen'

const Meta: ComponentMeta<typeof Screen> = {
  title: 'Screen',
  component: Screen,
  argTypes: {},
  args: {}
}

export default Meta

type Story = ComponentStory<typeof Screen>

export const Basic: Story = () => (
  <Screen backgroundColor="critical" />
)

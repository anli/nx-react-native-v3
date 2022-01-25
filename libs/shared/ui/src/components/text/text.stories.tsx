import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { Text } from './text'

const text = 'TEXT'

const Meta: ComponentMeta<typeof Text> = {
  title: 'Text',
  component: Text
}

export default Meta

type Story = ComponentStory<typeof Text>

export const Basic: Story = () => <Text>{text}</Text>

import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { TextInput } from './text-input'

const Meta: ComponentMeta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput
}

export default Meta

type Story = ComponentStory<typeof TextInput>

export const Basic: Story = () => (
  <TextInput label="Label" mode="outlined" margin="base" />
)

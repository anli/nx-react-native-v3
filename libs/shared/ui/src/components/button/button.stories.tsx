import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { Button } from './button'
import { action } from '@storybook/addon-actions'

const Meta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button
}

export default Meta

type Story = ComponentStory<typeof Button>

export const Basic: Story = () => (
  <Button
    margin="base"
    padding="base"
    mode="contained"
    borderRadius="extraLoose"
    onPress={action('onPress')}>
    Button
  </Button>
)

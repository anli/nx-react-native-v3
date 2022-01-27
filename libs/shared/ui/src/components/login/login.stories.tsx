import { faker } from '@faker-js/faker'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import { Screen } from '..'
import { Login } from './login'

faker.seed(0)
const title = faker.lorem.words()
const subtitle = faker.lorem.sentences()
const buttonTitle = faker.lorem.word()

const Meta: ComponentMeta<typeof Login> = {
  title: 'Login',
  component: Login
}

export default Meta

type Story = ComponentStory<typeof Login>

export const Basic: Story = () => (
  <Screen>
    <Login
      title={title}
      subtitle={subtitle}
      buttonTitle={buttonTitle}
      onPress={action('onPress')}
    />
  </Screen>
)

import { ArrayElement, Text } from '@nx-react-native/shared/ui'
import React from 'react'

const data = Array.from({ length: 20 }, (_, k) => ({
  id: `${k}`,
  title: 'This is an item'
}))

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

export const list = {
  data,
  renderItem
}

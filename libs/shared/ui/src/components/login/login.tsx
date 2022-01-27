import React, { FC } from 'react'
import { Button, Text, View } from '..'

interface Props {
  title: string
  subtitle: string
  buttonTitle: string
  onPress: () => void
}

export const Login: FC<Props> = ({
  title,
  subtitle,
  buttonTitle,
  children,
  onPress
}) => {
  return (
    <>
      <View flex={1} justifyContent="flex-end" alignItems="center">
        {children}
      </View>
      <View padding="extraLoose">
        <Text marginBottom="base" variant="largeTitleEmphasized">
          {title}
        </Text>
        <Text marginBottom="base" variant="body" textAlign="justify">
          {subtitle}
        </Text>
        <Button
          borderRadius="extraLoose"
          padding="tight"
          mode="contained"
          onPress={onPress}>
          {buttonTitle}
        </Button>
      </View>
    </>
  )
}

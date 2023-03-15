import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    children: 'Fechar',
    size: 'big',
  },
}

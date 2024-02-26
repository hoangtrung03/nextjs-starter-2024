import type { Meta, StoryObj } from '@storybook/react'

import { Banner } from './Banner'

const meta: Meta<typeof Banner> = {
  title: 'Templates/Banner',
  component: Banner,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
}

export default meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {}

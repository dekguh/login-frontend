import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
    title: 'atoms/controls/Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template : ComponentStory<typeof Button> = (args) => {
    return(<Button {...args}/>)
}

export const Primary = Template.bind({})

Primary.args = {
    text: 'submit',
    classes: '',
}
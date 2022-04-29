import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextField from './TextField'

export default {
    title: 'atoms/controls/TextField',
    component: TextField
} as ComponentMeta<typeof TextField>

const Template : ComponentStory<typeof TextField> = (args) => {
    return(<TextField {...args}/>)
}

export const Text = Template.bind({})
export const Password = Template.bind({})

Text.args = {
    classes: 'w-full',
    placeholder: 'email',
    type: 'text'
}

Password.args = {
    classes: 'max-w-xs',
    placeholder: 'password',
    type: 'password'
}
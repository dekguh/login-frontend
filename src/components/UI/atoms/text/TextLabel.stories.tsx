import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextLabel from './TextLabel'

export default {
    title: 'atoms/text/TextLabel',
    component: TextLabel
} as ComponentMeta<typeof TextLabel>

const Template : ComponentStory<typeof TextLabel> = (args) => {
    return(<TextLabel {...args}/>)
}

export const Text = Template.bind({})

Text.args = {
    text: 'email'
}
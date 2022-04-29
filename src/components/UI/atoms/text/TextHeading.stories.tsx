import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextHeading from './TextHeading'

export default {
    title: 'atoms/text/TextHeading',
    component: TextHeading
} as ComponentMeta<typeof TextHeading>

const Template : ComponentStory<typeof TextHeading> = (args) => {
    return(<TextHeading {...args}/>)
}

export const h1 = Template.bind({})

h1.args = {
    text: 'heading 1',
    component: 'h1'
}
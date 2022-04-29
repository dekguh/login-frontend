import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextLink from './TextLink'

export default {
    title: 'atoms/text/TextLink',
    component: TextLink
} as ComponentMeta<typeof TextLink>

const Template : ComponentStory<typeof TextLink> = (args) => {
    return(<TextLink {...args}/>)
}

export const Link = Template.bind({})

Link.args = {
    text: 'register now'
}
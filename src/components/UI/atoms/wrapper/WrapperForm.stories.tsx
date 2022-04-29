import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import WrapperForm from './WrapperForm'

export default {
    title: 'atoms/wrapper',
    component: WrapperForm
} as ComponentMeta<typeof WrapperForm>

const Template : ComponentStory<typeof WrapperForm> = (args) => {
    return(<WrapperForm {...args}>
        children
    </WrapperForm>)
}

export const form = Template.bind({})

form.args = {
    classes: 'px-5 py-5 max-w-xs w-full rounded-lg'
}
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import FormLogin from './FormLogin'

export default {
    title: 'molecules/form',
    component: FormLogin
} as ComponentMeta<typeof FormLogin>

const Template : ComponentStory<typeof FormLogin> = (args) => {
    return(<FormLogin {...args}/>)
}

export const Login = Template.bind({})
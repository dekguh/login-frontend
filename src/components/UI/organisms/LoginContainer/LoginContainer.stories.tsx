import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import LoginContainer from './index'

export default {
    title: 'organism/container',
    component: LoginContainer
} as ComponentMeta<typeof LoginContainer>

const Template : ComponentStory<typeof LoginContainer> = (args) => {
    return(<LoginContainer />)
}

export const Login = Template.bind({})
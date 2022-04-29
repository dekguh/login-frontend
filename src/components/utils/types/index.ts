import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';

export interface IButton {
    variant?: 'primary' | 'secondary';
    text?: string;
    onClick?: MouseEventHandler;
    classes?: string;
}

export interface ITextField extends Pick<IButton, 'classes'> {
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    onChange?: ChangeEventHandler;
}

export interface ITextLabel extends Pick<IButton, 'text' | 'classes'> {}

export interface ITextLink extends Pick<IButton, 'text' | 'classes'> {
    to?: string;
}

export interface ITextHeading extends Pick<IButton, 'text' | 'classes'> {
    component?: keyof JSX.IntrinsicElements;
}

export interface IWrapperForm extends Pick<IButton, 'classes'> {
    children?: JSX.Element | ReactNode;
}

export interface IFormLogin {
    onChangeEmail?: ChangeEventHandler;
    onChangePassword?: ChangeEventHandler;
    onClickLogin?: MouseEventHandler;
    onClickGoogle?: MouseEventHandler;
}
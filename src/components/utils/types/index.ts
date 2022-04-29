import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IButton {
    variant?: 'primary';
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
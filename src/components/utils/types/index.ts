import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';

export interface IButton {
    variant?: 'primary' | 'secondary';
    text?: string;
    onClick?: MouseEventHandler;
    classes?: string;
    dataTestId?: string;
    type?: "button" | "reset" | "submit" | undefined;
}

export interface ITextField extends Pick<IButton, 'classes'> {
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    onChange?: ChangeEventHandler;
    otherProps?: {[key: string]: any};
}

export interface ITextLabel extends Pick<IButton, 'text' | 'classes'> {}

export interface ITextLink extends Pick<IButton, 'text' | 'classes'> {
    to?: string;
    dataTestId?: string;
}

export interface ITextHeading extends Pick<IButton, 'text' | 'classes'> {
    component?: keyof JSX.IntrinsicElements;
}

export interface IWrapperForm extends Pick<IButton, 'classes'> {
    children?: JSX.Element | ReactNode;
    dataTestId?: string;
}

export interface IFormLogin {
    email?: string;
    password?: string;
}

export interface IAppProvider {
    childen?: JSX.Element;
}

export interface IAppInitialState {
    isLogin?: boolean;
    actUpdateIsLogin?: (status: boolean) => void;
}

export interface IPayloadAction {
    type: string;
    payload?: any;
}

export interface ITextError {
    classes?: string;
    text?: string;
}
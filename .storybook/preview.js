import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.css'
import AppProvider from '../src/components/utils/context/AppProvider'

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
};

addDecorator(story => <AppProvider><BrowserRouter>{story()}</BrowserRouter></AppProvider>)
import { type Story } from '@storybook/react';
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import React from 'react';
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);

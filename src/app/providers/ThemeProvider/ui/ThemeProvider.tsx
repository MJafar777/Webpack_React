import React, { type FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    initialTheme,
    children
  } = props;
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  const [theme, setTheme] = useState<Theme>((initialTheme != null) || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
  );
};

export default ThemeProvider;

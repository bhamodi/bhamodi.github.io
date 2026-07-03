import type {ReactNode} from 'react';

import {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral/built';

type ColorMode = 'light' | 'dark';

type ColorModeContextValue = {
  mode: ColorMode;
  toggle: () => void;
};

const STORAGE_KEY = 'color-mode';

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

function getInitialMode(): ColorMode {
  if (typeof window === 'undefined') {
    return 'light';
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ColorModeProvider({children}: {children: ReactNode}) {
  const [mode, setMode] = useState<ColorMode>(getInitialMode);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute('data-theme', mode);
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ColorModeContext.Provider value={{mode, toggle}}>
      <Theme theme={neutralTheme} mode={mode}>
        {children}
      </Theme>
    </ColorModeContext.Provider>
  );
}

export function useColorMode(): ColorModeContextValue {
  const value = useContext(ColorModeContext);
  if (value == null) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return value;
}

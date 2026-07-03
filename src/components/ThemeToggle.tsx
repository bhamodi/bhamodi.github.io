import {Icon} from '@astryxdesign/core/Icon';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Moon, Sun} from 'lucide-react';

import {useColorMode} from '../theme/ColorModeProvider';

export function ThemeToggle() {
  const {mode, toggle} = useColorMode();
  const isDark = mode === 'dark';
  return (
    <IconButton
      label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      tooltip={isDark ? 'Light mode' : 'Dark mode'}
      variant="ghost"
      icon={<Icon icon={isDark ? Sun : Moon} />}
      onClick={toggle}
    />
  );
}

import { useDarkMode } from './use-dark-mode';
import { IconButton } from '../icon-button/icon-button';
import { Icon } from '../icon/icon';

export const DarkModeSwitch = () => {
  const [isDark, setDark] = useDarkMode();
  return (
    <IconButton onClick={() => setDark(!isDark)}>
      {isDark ? <Icon type="sun" /> : <Icon type="moon" />}
    </IconButton>
  );
};

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { SidebarMenuButton } from '@/components/ui/sidebar';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <SidebarMenuButton
      onClick={toggleTheme}
      tooltip={theme === 'light' ? 'Dunkles Design' : 'Helles Design'}
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span>{theme === 'light' ? 'Dunkles Design' : 'Helles Design'}</span>
    </SidebarMenuButton>
  );
}

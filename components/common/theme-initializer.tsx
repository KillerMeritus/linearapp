'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePreferencesStore } from '@/store/preferences-store';

/**
 * Component to initialize theme from user preferences on app load
 * This ensures the theme from preferences store is applied when the app starts
 */
export function ThemeInitializer() {
   const { setTheme } = useTheme();
   const { preferences } = usePreferencesStore();

   useEffect(() => {
      // Initialize theme from preferences store
      if (preferences.theme) {
         setTheme(preferences.theme);
      }
   }, [preferences.theme, setTheme]);

   return null; // This component doesn't render anything
}


import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

export interface NotificationPreferences {
   emailNotifications: boolean;
   pushNotifications: boolean;
   issueAssigned: boolean;
   issueMentioned: boolean;
   issueStatusChanged: boolean;
   issueDueDateReminder: boolean;
   projectUpdates: boolean;
   teamUpdates: boolean;
}

export interface KeyboardShortcuts {
   commandPalette: string; // 'cmd+k' or 'ctrl+k'
   createIssue: string; // 'c'
   search: string; // '/'
   goToInbox: string; // 'g+i'
   goToIssues: string; // 'g+i' (alternative)
   goToTeams: string; // 'g+t'
   goToProjects: string; // 'g+p'
   goToMembers: string; // 'g+m'
   goToSettings: string; // 'g+s'
}

export interface DisplayPreferences {
   displayFullNames: boolean;
   usePointerCursors: boolean;
   fontSize: 'small' | 'default' | 'large';
   firstDayOfWeek: 'sunday' | 'monday';
}

export interface ThemePreferences {
   interfaceTheme: 'light' | 'dark' | 'system';
   translucentUI: boolean;
}

export interface BehaviorPreferences {
   defaultHomeView: 'active-issues' | 'my-issues' | 'all-issues' | 'backlog';
   developerPreview: boolean;
   openInDesktopApp: boolean;
   autoAssignToSelf: boolean;
   onGitBranchCopyMoveToInProgress: boolean;
   onGitBranchCopyAssignToSelf: boolean;
   openLinksInNewWindow: boolean;
   doubleClickToEdit: boolean;
}

export interface EducationalPreferences {
   disableKeyboardShortcutHints: boolean;
}

export interface UserPreferences {
   theme: Theme;
   notifications: NotificationPreferences;
   keyboardShortcuts: KeyboardShortcuts;
   language: string;
   timezone: string;
   dateFormat: string;
   timeFormat: '12h' | '24h';
   display: DisplayPreferences;
   themePreferences: ThemePreferences;
   behavior: BehaviorPreferences;
   educational: EducationalPreferences;
}

const defaultNotificationPreferences: NotificationPreferences = {
   emailNotifications: true,
   pushNotifications: true,
   issueAssigned: true,
   issueMentioned: true,
   issueStatusChanged: false,
   issueDueDateReminder: true,
   projectUpdates: false,
   teamUpdates: true,
};

const defaultKeyboardShortcuts: KeyboardShortcuts = {
   commandPalette: 'cmd+k',
   createIssue: 'c',
   search: '/',
   goToInbox: 'g+i',
   goToIssues: 'g+i',
   goToTeams: 'g+t',
   goToProjects: 'g+p',
   goToMembers: 'g+m',
   goToSettings: 'g+s',
};

const defaultDisplayPreferences: DisplayPreferences = {
   displayFullNames: false,
   usePointerCursors: false,
   fontSize: 'default',
   firstDayOfWeek: 'sunday',
};

const defaultThemePreferences: ThemePreferences = {
   interfaceTheme: 'dark',
   translucentUI: true,
};

const defaultBehaviorPreferences: BehaviorPreferences = {
   defaultHomeView: 'active-issues',
   developerPreview: false,
   openInDesktopApp: false,
   autoAssignToSelf: false,
   onGitBranchCopyMoveToInProgress: false,
   onGitBranchCopyAssignToSelf: false,
   openLinksInNewWindow: true,
   doubleClickToEdit: false,
};

const defaultEducationalPreferences: EducationalPreferences = {
   disableKeyboardShortcutHints: false,
};

const defaultPreferences: UserPreferences = {
   theme: 'system',
   notifications: defaultNotificationPreferences,
   keyboardShortcuts: defaultKeyboardShortcuts,
   language: 'en',
   timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
   dateFormat: 'MMM dd, yyyy',
   timeFormat: '12h',
   display: defaultDisplayPreferences,
   themePreferences: defaultThemePreferences,
   behavior: defaultBehaviorPreferences,
   educational: defaultEducationalPreferences,
};

interface PreferencesState {
   preferences: UserPreferences;
   updateTheme: (theme: Theme) => void;
   updateNotifications: (notifications: Partial<NotificationPreferences>) => void;
   updateKeyboardShortcuts: (shortcuts: Partial<KeyboardShortcuts>) => void;
   updateDisplay: (display: Partial<DisplayPreferences>) => void;
   updateThemePreferences: (themePrefs: Partial<ThemePreferences>) => void;
   updateBehavior: (behavior: Partial<BehaviorPreferences>) => void;
   updateEducational: (educational: Partial<EducationalPreferences>) => void;
   updatePreference: <K extends keyof UserPreferences>(
      key: K,
      value: UserPreferences[K]
   ) => void;
   resetPreferences: () => void;
}

export const usePreferencesStore = create<PreferencesState>()(
   persist(
      (set) => ({
         preferences: defaultPreferences,

         updateTheme: (theme) =>
            set((state) => ({
               preferences: {
                  ...state.preferences,
                  theme,
               },
            })),

         updateNotifications: (notifications) =>
            set((state) => ({
               preferences: {
                  ...state.preferences,
                  notifications: {
                     ...state.preferences.notifications,
                     ...notifications,
                  },
               },
            })),

         updateKeyboardShortcuts: (shortcuts) =>
            set((state) => ({
               preferences: {
                  ...state.preferences,
                  keyboardShortcuts: {
                     ...state.preferences.keyboardShortcuts,
                     ...shortcuts,
                  },
               },
            })),

         updateDisplay: (display) =>
            set((state) => ({
               preferences: {
                  ...state.preferences,
                  display: {
                     ...state.preferences.display,
                     ...display,
                  },
               },
            })),

         updateThemePreferences: (themePrefs) =>
            set((state) => ({
               preferences: {
                  ...state.preferences,
                  themePreferences: {
                     ...state.preferences.themePreferences,
                     ...themePrefs,
                  },
               },
            })),

         updateBehavior: (behavior) =>
            set((state) => ({
               preferences: {
                  ...state.preferences,
                  behavior: {
                     ...state.preferences.behavior,
                     ...behavior,
                  },
               },
            })),

         updateEducational: (educational) =>
            set((state) => ({
               preferences: {
                  ...state.preferences,
                  educational: {
                     ...state.preferences.educational,
                     ...educational,
                  },
               },
            })),

         updatePreference: (key, value) =>
            set((state) => ({
               preferences: {
                  ...state.preferences,
                  [key]: value,
               },
            })),

         resetPreferences: () =>
            set({
               preferences: defaultPreferences,
            }),
      }),
      {
         name: 'user-preferences-storage',
         partialize: (state) => ({ preferences: state.preferences }),
         merge: (persistedState, currentState) => {
            if (persistedState && typeof persistedState === 'object' && 'preferences' in persistedState) {
               return {
                  ...currentState,
                  preferences: {
                     ...defaultPreferences,
                     ...(persistedState as { preferences: UserPreferences }).preferences,
                     // Ensure nested objects are merged properly
                     display: {
                        ...defaultPreferences.display,
                        ...((persistedState as { preferences: UserPreferences }).preferences?.display || {}),
                     },
                     themePreferences: {
                        ...defaultPreferences.themePreferences,
                        ...((persistedState as { preferences: UserPreferences }).preferences?.themePreferences || {}),
                     },
                     behavior: {
                        ...defaultPreferences.behavior,
                        ...((persistedState as { preferences: UserPreferences }).preferences?.behavior || {}),
                     },
                     educational: {
                        ...defaultPreferences.educational,
                        ...((persistedState as { preferences: UserPreferences }).preferences?.educational || {}),
                     },
                     notifications: {
                        ...defaultPreferences.notifications,
                        ...((persistedState as { preferences: UserPreferences }).preferences?.notifications || {}),
                     },
                     keyboardShortcuts: {
                        ...defaultPreferences.keyboardShortcuts,
                        ...((persistedState as { preferences: UserPreferences }).preferences?.keyboardShortcuts || {}),
                     },
                  },
               };
            }
            return currentState;
         },
      }
   )
);


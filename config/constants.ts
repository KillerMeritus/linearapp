/**
 * Application Constants
 * Immutable constants for Scaler Hackathon Platform
 * @module config/constants
 */

export const WORKSPACE_CONSTANTS = {
   DEFAULT_WORKSPACE: 'piedpiper',
   MIN_WORKSPACE_NAME_LENGTH: 3,
   MAX_WORKSPACE_NAME_LENGTH: 50,
} as const;

export const TASK_CONSTANTS = {
   PREFIX: 'SH',
   MIN_TITLE_LENGTH: 3,
   MAX_TITLE_LENGTH: 200,
   MAX_DESCRIPTION_LENGTH: 5000,
} as const;

export const PROJECT_CONSTANTS = {
   MIN_NAME_LENGTH: 3,
   MAX_NAME_LENGTH: 100,
   MAX_DESCRIPTION_LENGTH: 1000,
} as const;

export const TEAM_CONSTANTS = {
   MIN_MEMBERS: 1,
   MAX_MEMBERS: 50,
   MIN_NAME_LENGTH: 2,
   MAX_NAME_LENGTH: 50,
} as const;

export const UI_CONSTANTS = {
   DEBOUNCE_DELAY: 300,
   ANIMATION_DURATION: 200,
   TOAST_DURATION: 3000,
   SIDEBAR_TRANSITION: 150,
} as const;

export const PAGINATION_CONSTANTS = {
   DEFAULT_PAGE_SIZE: 50,
   PAGE_SIZE_OPTIONS: [25, 50, 100, 200],
} as const;

export const KEYBOARD_SHORTCUTS = {
   SEARCH: '/',
   NEW_TASK: 'c',
   NEW_PROJECT: 'p',
   COMMAND_PALETTE: 'cmd+k',
   SETTINGS: ',',
} as const;

export const STATUS_COLORS = {
   TODO: '#8B92A5',
   IN_PROGRESS: '#5E6AD2',
   IN_REVIEW: '#FFA500',
   DONE: '#00D26A',
   CANCELLED: '#95A2B3',
   BACKLOG: '#6C757D',
} as const;

export const PRIORITY_COLORS = {
   NO_PRIORITY: '#8B92A5',
   LOW: '#00B8D9',
   MEDIUM: '#FFA500',
   HIGH: '#FF8C00',
   URGENT: '#FF6B6B',
} as const;

export const HEALTH_COLORS = {
   ON_TRACK: '#00D26A',
   AT_RISK: '#FFA500',
   OFF_TRACK: '#FF6B6B',
   NO_UPDATE: '#8B92A5',
} as const;

export const ROUTES = {
   HOME: '/',
   WORKSPACE: (orgId: string) => `/${orgId}`,
   INBOX: (orgId: string) => `/${orgId}/inbox`,
   TEAM: (orgId: string, teamId: string) => `/${orgId}/team/${teamId}`,
   TEAMS: (orgId: string) => `/${orgId}/teams`,
   PROJECTS: (orgId: string) => `/${orgId}/projects`,
   MEMBERS: (orgId: string) => `/${orgId}/members`,
   SETTINGS: (orgId: string) => `/${orgId}/settings`,
} as const;

export const STORAGE_KEYS = {
   THEME: 'scaler-theme',
   SIDEBAR_STATE: 'scaler-sidebar',
   USER_PREFERENCES: 'scaler-preferences',
   RECENT_WORKSPACES: 'scaler-recent-workspaces',
} as const;

export const ERROR_MESSAGES = {
   GENERIC: 'An error occurred. Please try again.',
   NETWORK: 'Network error. Please check your connection.',
   NOT_FOUND: 'Resource not found.',
   UNAUTHORIZED: 'You are not authorized to perform this action.',
   VALIDATION: 'Please check your input and try again.',
} as const;

export const SUCCESS_MESSAGES = {
   TASK_CREATED: 'Task created successfully',
   TASK_UPDATED: 'Task updated successfully',
   TASK_DELETED: 'Task deleted successfully',
   PROJECT_CREATED: 'Project created successfully',
   PROJECT_UPDATED: 'Project updated successfully',
   SETTINGS_SAVED: 'Settings saved successfully',
} as const;

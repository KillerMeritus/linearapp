/**
 * Application Configuration
 * Central configuration for Scaler Hackathon Platform
 * @module config/app
 */

export const AppConfig = {
   // Application metadata
   app: {
      name: 'Scaler Hackathon Platform',
      shortName: 'Scaler',
      version: '1.0.0',
      description: 'Modern project management solution by Team Pied Piper',
      team: 'Pied Piper',
   },

   // URLs and links
   urls: {
      base: 'https://scaler-hackathon.piedpiper.dev',
      github: 'https://github.com/pied-piper/scaler-hackathon',
      documentation: 'https://github.com/pied-piper/scaler-hackathon',
      issues: 'https://github.com/pied-piper/scaler-hackathon/issues',
   },

   // Features configuration
   features: {
      taskManagement: true,
      projectTracking: true,
      teamCollaboration: true,
      notifications: true,
      analytics: true,
      darkMode: true,
      keyboardShortcuts: true,
   },

   // Default settings
   defaults: {
      workspaceName: 'piedpiper',
      defaultTeam: 'CORE',
      defaultView: 'all',
      itemsPerPage: 50,
      maxFileSize: 10 * 1024 * 1024, // 10MB
   },

   // UI Configuration
   ui: {
      sidebarWidth: {
         collapsed: 64,
         expanded: 280,
      },
      headerHeight: 64,
      maxContentWidth: 1440,
   },

   // Date/Time formats
   formats: {
      date: 'MMM dd, yyyy',
      dateTime: 'MMM dd, yyyy HH:mm',
      time: 'HH:mm',
   },

   // Social media handles
   social: {
      twitter: '@piedpiper_team',
      github: 'pied-piper',
   },

   // API Configuration (for future backend integration)
   api: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
      timeout: 30000,
   },

   // Development settings
   dev: {
      isDevelopment: process.env.NODE_ENV === 'development',
      showDebugInfo: process.env.NEXT_PUBLIC_DEBUG === 'true',
      mockDataEnabled: true,
   },
} as const;

export type AppConfigType = typeof AppConfig;

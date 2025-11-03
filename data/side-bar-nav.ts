import {
   Inbox,
   FolderKanban,
   ContactRound,
   Box,
   Settings,
   Bell,
   KeyRound,
   Users,
   Tag,
   Layers,
   FileText,
   MessageSquare,
   Clock,
   Zap,
   UserRound,
   BarChart3,
   Target,
   Archive,
   Calendar,
   Sparkles,
} from 'lucide-react';

export const inboxItems = [
   {
      name: 'Inbox',
      url: '/piedpiper/inbox',
      icon: Inbox,
   },
   {
      name: 'My issues',
      url: '#',
      icon: FolderKanban,
   },
];

export const workspaceItems = [
   {
      name: 'Teams',
      url: '/piedpiper/teams',
      icon: ContactRound,
   },
   {
      name: 'Projects',
      url: '/piedpiper/projects',
      icon: Box,
   },
   {
      name: 'Views',
      url: '/piedpiper/views',
      icon: Layers,
   },
   {
      name: 'Roadmap',
      url: '/piedpiper/roadmap',
      icon: Target,
   },
   {
      name: 'Analytics',
      url: '/piedpiper/analytics',
      icon: BarChart3,
   },
   {
      name: 'Archive',
      url: '/piedpiper/archive',
      icon: Archive,
   },
   {
      name: 'Calendar',
      url: '/piedpiper/calendar',
      icon: Calendar,
   },
   {
      name: 'Members',
      url: '/piedpiper/members',
      icon: UserRound,
   },
];

export const accountItems = [
   {
      name: 'Account',
      url: '/settings/account',
      icon: UserRound,
   },
   {
      name: 'Preferences',
      url: '/settings/preferences',
      icon: Settings,
   },
   {
      name: 'Profile',
      url: '/settings/profile',
      icon: UserRound,
   },
   {
      name: 'Notifications',
      url: '/settings/notifications',
      icon: Bell,
   },
   {
      name: 'Security & access',
      url: '/settings/security',
      icon: KeyRound,
   },
   {
      name: 'Connected accounts',
      url: '/settings/connected-accounts',
      icon: Users,
   },
];

export const workspaceSettingsItems = [
   {
      name: 'Overview',
      url: '/piedpiper/settings',
      icon: BarChart3,
   },
   {
      name: 'General',
      url: '/piedpiper/settings/general',
      icon: Settings,
   },
   {
      name: 'Security',
      url: '/piedpiper/settings/security',
      icon: KeyRound,
   },
   {
      name: 'Members',
      url: '/piedpiper/settings/members',
      icon: Users,
   },
   {
      name: 'Labels',
      url: '/piedpiper/settings/labels',
      icon: Tag,
   },
   {
      name: 'Templates',
      url: '/piedpiper/settings/templates',
      icon: FileText,
   },
   {
      name: 'Roadmaps',
      url: '/piedpiper/settings/roadmaps',
      icon: Target,
   },
   {
      name: 'SLAs',
      url: '/piedpiper/settings/slas',
      icon: Clock,
   },
   {
      name: 'Project Updates',
      url: '/piedpiper/settings/project-updates',
      icon: Sparkles,
   },
   {
      name: 'Emojis',
      url: '/piedpiper/settings/emojis',
      icon: MessageSquare,
   },
   {
      name: 'Plans',
      url: '/piedpiper/settings/plans',
      icon: Archive,
   },
   {
      name: 'Billing',
      url: '/piedpiper/settings/billing',
      icon: Archive,
   },
   {
      name: 'Import / Export',
      url: '/piedpiper/settings/import-export',
      icon: Archive,
   },
   {
      name: 'Integrations',
      url: '/piedpiper/settings/integrations',
      icon: Zap,
   },
];

export const accountSettingsItems = [
   {
      name: 'Profile',
      url: '/piedpiper/settings/profile',
      icon: UserRound,
   },
   {
      name: 'Preferences',
      url: '/piedpiper/settings/preferences',
      icon: Settings,
   },
   {
      name: 'Linked Accounts',
      url: '/piedpiper/settings/linked-accounts',
      icon: Users,
   },
   {
      name: 'Notifications',
      url: '/piedpiper/settings/notifications',
      icon: Bell,
   },
   {
      name: 'Applications, API',
      url: '/piedpiper/settings/api',
      icon: KeyRound,
   },
];

export const featuresItems = [
   {
      name: 'Labels',
      url: '/settings/labels',
      icon: Tag,
   },
   {
      name: 'Projects',
      url: '/settings/projects',
      icon: Box,
   },
   {
      name: 'Initiatives',
      url: '/settings/initiatives',
      icon: Layers,
   },
   {
      name: 'Customer requests',
      url: '/settings/customer-requests',
      icon: Inbox,
   },
   {
      name: 'Templates',
      url: '/settings/templates',
      icon: FileText,
   },
   {
      name: 'Asks',
      url: '/settings/asks',
      icon: MessageSquare,
   },
   {
      name: 'SLAs',
      url: '/settings/slas',
      icon: Clock,
   },
   {
      name: 'Emojis',
      url: '/settings/emojis',
      icon: MessageSquare,
   },
   {
      name: 'Integrations',
      url: '/settings/integrations',
      icon: Zap,
   },
];

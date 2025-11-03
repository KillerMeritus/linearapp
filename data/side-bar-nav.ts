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
   Shield,
   Code,
   CreditCard,
   ArrowLeftRight,
   Building2,
   UsersRound,
   CheckCircle2,
   FileUp,
   Smile,
   Bot,
   MessageCircleQuestion,
   Flame,
   CircleDot,
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
      name: 'Preferences',
      url: '/piedpiper/settings/preferences',
      icon: Settings,
   },
   {
      name: 'Profile',
      url: '/piedpiper/settings/profile',
      icon: UserRound,
   },
   {
      name: 'Notifications',
      url: '/piedpiper/settings/notifications',
      icon: Bell,
   },
   {
      name: 'Security & access',
      url: '/piedpiper/settings/security',
      icon: KeyRound,
   },
   {
      name: 'Connected accounts',
      url: '/piedpiper/settings/connected-accounts',
      icon: Users,
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

// Settings sidebar navigation items (matches the image structure)
export const settingsIssuesItems = [
   {
      name: 'Labels',
      url: '/piedpiper/settings/issues/labels',
      icon: Tag,
   },
   {
      name: 'Templates',
      url: '/piedpiper/settings/issues/templates',
      icon: FileText,
   },
   {
      name: 'SLAs',
      url: '/piedpiper/settings/issues/slas',
      icon: Clock,
   },
];

export const settingsProjectsItems = [
   {
      name: 'Labels',
      url: '/piedpiper/settings/projects/labels',
      icon: Tag,
   },
   {
      name: 'Templates',
      url: '/piedpiper/settings/projects/templates',
      icon: FileText,
   },
   {
      name: 'Statuses',
      url: '/piedpiper/settings/projects/statuses',
      icon: CircleDot,
   },
   {
      name: 'Updates',
      url: '/piedpiper/settings/projects/updates',
      icon: CheckCircle2,
   },
];

export const settingsFeaturesItems = [
   {
      name: 'Initiatives',
      url: '/piedpiper/settings/features/initiatives',
      icon: Target,
   },
   {
      name: 'Documents',
      url: '/piedpiper/settings/features/documents',
      icon: FileText,
   },
   {
      name: 'Customer requests',
      url: '/piedpiper/settings/features/customer-requests',
      icon: MessageCircleQuestion,
   },
   {
      name: 'Pulse',
      url: '/piedpiper/settings/features/pulse',
      icon: Flame,
   },
   {
      name: 'AI',
      url: '/piedpiper/settings/features/ai',
      icon: Sparkles,
   },
   {
      name: 'Agents',
      url: '/piedpiper/settings/features/agents',
      icon: Bot,
   },
   {
      name: 'Asks',
      url: '/piedpiper/settings/features/asks',
      icon: MessageCircleQuestion,
   },
   {
      name: 'Emojis',
      url: '/piedpiper/settings/features/emojis',
      icon: Smile,
   },
   {
      name: 'Integrations',
      url: '/piedpiper/settings/features/integrations',
      icon: Zap,
   },
];

export const settingsAdministrationItems = [
   {
      name: 'Workspace',
      url: '/piedpiper/settings/administration/workspace',
      icon: Building2,
   },
   {
      name: 'Teams',
      url: '/piedpiper/settings/administration/teams',
      icon: UsersRound,
   },
   {
      name: 'Members',
      url: '/piedpiper/settings/administration/members',
      icon: Users,
   },
   {
      name: 'Security',
      url: '/piedpiper/settings/administration/security',
      icon: Shield,
   },
   {
      name: 'API',
      url: '/piedpiper/settings/administration/api',
      icon: Code,
   },
   {
      name: 'Applications',
      url: '/piedpiper/settings/administration/applications',
      icon: Box,
   },
   {
      name: 'Billing',
      url: '/piedpiper/settings/administration/billing',
      icon: CreditCard,
   },
   {
      name: 'Import / Export',
      url: '/piedpiper/settings/administration/import-export',
      icon: ArrowLeftRight,
   },
];

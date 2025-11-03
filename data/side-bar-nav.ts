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

import { Status, status } from './status';
import {
   Accessibility,
   Bell,
   Blocks,
   Bomb,
   BrickWall,
   Code,
   Database,
   Zap,
   Cloud,
   Shield,
   Workflow,
   Boxes,
   GitBranch,
   Smartphone,
   Globe,
   LayoutDashboard,
   Search,
   Lock,
   LucideIcon,
   Users,
   Gauge,
   MessageSquare,
   FileText,
   ChartBar,
} from 'lucide-react';
import { RemixiconComponentType } from '@remixicon/react';
import { User, users } from './users';
import { Priority, priorities } from './priorities';
import { LabelInterface } from './labels';

export interface Project {
   id: string;
   name: string;
   summary?: string;
   status: Status;
   icon: LucideIcon | RemixiconComponentType;
   percentComplete: number;
   startDate: string;
   targetDate?: string;
   description?: string;
   lead: User;
   priority: Priority;
   health: Health;
   archived?: boolean;
   workspaceId?: string;
   members?: User[];
   labels?: LabelInterface[];
   milestones?: {
      id: string;
      title: string;
      dueDate?: string;
   }[];
}

interface Health {
   id: 'no-update' | 'off-track' | 'on-track' | 'at-risk';
   name: string;
   color: string;
   description: string;
}

export const health: Health[] = [
   {
      id: 'no-update',
      name: 'No Update',
      color: '#8B92A5',
      description: 'The project has not been updated recently.',
   },
   {
      id: 'off-track',
      name: 'Off Track',
      color: '#FF6B6B',
      description: 'The project is behind schedule and needs attention.',
   },
   {
      id: 'on-track',
      name: 'On Track',
      color: '#00D26A',
      description: 'The project is progressing as planned.',
   },
   {
      id: 'at-risk',
      name: 'At Risk',
      color: '#FFA500',
      description: 'The project has potential blockers that need resolution.',
   },
];

export const projects: Project[] = [
   {
      id: 'pp-1',
      name: 'Linear.app – Auth redirect bug',
      status: status[1],
      icon: Workflow,
      percentComplete: 20,
      startDate: '2025-02-10',
      lead: users[0],
      priority: priorities[0],
      health: health[3],
      workspaceId: 'piedpiper',
      description: 'Users intermittently redirected to login after refresh.'
   },
   {
      id: 'pp-2',
      name: 'Linear.app – Hydration mismatch investigation',
      status: status[0],
      icon: LayoutDashboard,
      percentComplete: 40,
      startDate: '2025-02-09',
      lead: users[2],
      priority: priorities[1],
      health: health[2],
      workspaceId: 'piedpiper',
      description: 'Mismatch due to extension-injected attributes; add guards and docs.'
   },
   {
      id: 'pp-3',
      name: 'Linear.app – Projects board DnD polish',
      status: status[2],
      icon: Boxes,
      percentComplete: 75,
      startDate: '2025-02-08',
      lead: users[1],
      priority: priorities[1],
      health: health[2],
      workspaceId: 'piedpiper',
      description: 'Refine card drag preview and drop targets.'
   },
   {
      id: '1',
      name: 'Linear Clone - Core Features',
      status: status[1],
      icon: LayoutDashboard,
      percentComplete: 65,
      startDate: '2025-01-15',
      lead: users[0],
      priority: priorities[0],
      health: health[2],
   },
   {
      id: '2',
      name: 'Sidebar & Navigation System',
      status: status[1],
      icon: Blocks,
      percentComplete: 85,
      startDate: '2025-01-20',
      lead: users[1],
      priority: priorities[0],
      health: health[2],
   },
   {
      id: '3',
      name: 'Issue Management System',
      status: status[1],
      icon: FileText,
      percentComplete: 70,
      startDate: '2025-01-18',
      lead: users[2],
      priority: priorities[0],
      health: health[2],
   },
   {
      id: '4',
      name: 'Project & Team Management',
      status: status[1],
      icon: Users,
      percentComplete: 60,
      startDate: '2025-01-22',
      lead: users[3],
      priority: priorities[1],
      health: health[2],
   },
   {
      id: '5',
      name: 'Dark Mode & Theming',
      status: status[0],
      icon: Zap,
      percentComplete: 90,
      startDate: '2025-01-10',
      lead: users[1],
      priority: priorities[1],
      health: health[2],
   },
   {
      id: '6',
      name: 'Keyboard Shortcuts & Command Palette',
      status: status[1],
      icon: Code,
      percentComplete: 75,
      startDate: '2025-01-25',
      lead: users[0],
      priority: priorities[1],
      health: health[2],
   },
   {
      id: '7',
      name: 'Notifications & Activity Feed',
      status: status[2],
      icon: Bell,
      percentComplete: 30,
      startDate: '2025-02-01',
      lead: users[2],
      priority: priorities[2],
      health: health[0],
   },
   {
      id: '8',
      name: 'Search & Filtering',
      status: status[1],
      icon: Search,
      percentComplete: 55,
      startDate: '2025-01-28',
      lead: users[3],
      priority: priorities[1],
      health: health[2],
   },
   {
      id: '9',
      name: 'Cycles & Roadmap View',
      status: status[2],
      icon: ChartBar,
      percentComplete: 25,
      startDate: '2025-02-05',
      lead: users[1],
      priority: priorities[2],
      health: health[0],
   },
];

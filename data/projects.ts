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

export interface Project {
   id: string;
   name: string;
   status: Status;
   icon: LucideIcon | RemixiconComponentType;
   percentComplete: number;
   startDate: string;
   lead: User;
   priority: Priority;
   health: Health;
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

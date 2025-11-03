import { Project, projects } from './projects';
import { User, users } from './users';

export interface Team {
   id: string;
   name: string;
   icon: string;
   joined: boolean;
   color: string;
   members: User[];
   projects: Project[];
}

export const teams: Team[] = [
   {
      id: 'CORE',
      name: 'Core Team',
      icon: '⚡',
      joined: true,
      color: '#5E6AD2',
      members: [users[0], users[1], users[2], users[3]],
      projects: [projects[0], projects[1], projects[2]],
   },
   {
      id: 'FRONTEND',
      name: 'Frontend',
      icon: '🎨',
      joined: true,
      color: '#26B5CE',
      members: [users[0], users[1], users[3]],
      projects: [projects[0], projects[2]],
   },
   {
      id: 'BACKEND',
      name: 'Backend',
      icon: '🔧',
      joined: true,
      color: '#F2C94C',
      members: [users[0], users[2], users[3]],
      projects: [projects[1]],
   },
   {
      id: 'DESIGN',
      name: 'Design',
      icon: '✨',
      joined: true,
      color: '#B4F481',
      members: [users[1], users[2]],
      projects: [projects[2]],
   },
];

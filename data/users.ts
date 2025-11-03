export interface User {
   id: string;
   name: string;
   username?: string;
   avatarUrl: string;
   email: string;
   status: 'online' | 'offline' | 'away';
   role: 'Member' | 'Admin' | 'Guest';
   joinedDate: string;
   teamIds: string[];
}

const avatarUrl = (seed: string) => `https://api.dicebear.com/9.x/glass/svg?seed=${seed}`;

export const statusUserColors = {
   online: '#00cc66',
   offline: '#969696',
   away: '#ffcc00',
};

export const users: User[] = [
   {
      id: 'vivek',
      name: 'Vivek Sarathe',
      username: 'vivek',
      avatarUrl: avatarUrl('vivek'),
      email: 'vivek@piedpiper.com',
      status: 'online',
      role: 'Admin',
      joinedDate: '2025-01-01',
      teamIds: ['CORE', 'FRONTEND', 'BACKEND'],
   },
   {
      id: 'ashdeep',
      name: 'Ashdeep Singh',
      username: 'singh.ashdeep.2006',
      avatarUrl: avatarUrl('ashdeep'),
      email: 'singh.ashdeep.2006@gmail.com',
      status: 'online',
      role: 'Admin',
      joinedDate: '2025-01-01',
      teamIds: ['CORE', 'FRONTEND', 'DESIGN'],
   },
   {
      id: 'atharva',
      name: 'Atharva',
      username: 'atharva',
      avatarUrl: avatarUrl('atharva'),
      email: 'atharva@piedpiper.com',
      status: 'online',
      role: 'Member',
      joinedDate: '2025-01-01',
      teamIds: ['CORE', 'BACKEND', 'DESIGN'],
   },
   {
      id: 'aman',
      name: 'Aman',
      username: 'aman',
      avatarUrl: avatarUrl('aman'),
      email: 'aman@piedpiper.com',
      status: 'online',
      role: 'Member',
      joinedDate: '2025-01-01',
      teamIds: ['CORE', 'FRONTEND', 'BACKEND'],
   },
];

import { create } from 'zustand';
import { Team, teams as seedTeams } from '@/data/teams';

export interface TeamsState {
   teams: Team[];

   // Queries
   getAllTeams: () => Team[];
   getTeamsByWorkspace: (workspaceId: string) => Team[];
   getTeamById: (id: string) => Team | undefined;

   // Mutations
   createTeam: (input: {
      id: string;
      name: string;
      icon?: string;
      color?: string;
      workspaceId?: string;
   }) => void;
   renameTeam: (id: string, name: string) => void;
   archiveTeam: (id: string) => void;
   unarchiveTeam: (id: string) => void;
}

export const useTeamsStore = create<TeamsState>((set, get) => ({
   teams: seedTeams.map((t) => ({ ...t, archived: t.archived ?? false })),

   // Queries
   getAllTeams: () => get().teams,

   getTeamsByWorkspace: (workspaceId: string) => {
      return get().teams.filter(
         (team) => (team.workspaceId === undefined || team.workspaceId === workspaceId) && !team.archived
      );
   },

   getTeamById: (id: string) => get().teams.find((t) => t.id === id),

   // Mutations
   createTeam: (input) => {
      const icon = input.icon ?? '👥';
      const color = input.color ?? '#5E6AD2';
      const newTeam: Team = {
         id: input.id,
         name: input.name,
         icon,
         color,
         joined: true,
         members: [],
         projects: [],
         archived: false,
         workspaceId: input.workspaceId,
      };

      set((state) => ({ teams: [newTeam, ...state.teams] }));
   },

   renameTeam: (id, name) => {
      set((state) => ({
         teams: state.teams.map((t) => (t.id === id ? { ...t, name } : t)),
      }));
   },

   archiveTeam: (id) => {
      set((state) => ({
         teams: state.teams.map((t) => (t.id === id ? { ...t, archived: true } : t)),
      }));
   },

   unarchiveTeam: (id) => {
      set((state) => ({
         teams: state.teams.map((t) => (t.id === id ? { ...t, archived: false } : t)),
      }));
   },
}));



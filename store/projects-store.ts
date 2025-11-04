import { create } from 'zustand';
import { Project, projects as seedProjects, health } from '@/data/projects';
import { status } from '@/data/status';
import { priorities } from '@/data/priorities';
import { users } from '@/data/users';
import { labels as allLabels } from '@/data/labels';
import { LayoutDashboard } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

export interface ProjectsState {
   projects: Project[];

   // Queries
   getAllProjects: () => Project[];
   getProjectsByWorkspace: (workspaceId: string) => Project[];
   getProjectById: (id: string) => Project | undefined;

   // Mutations
   createProject: (input: {
      name: string;
      workspaceId?: string;
      description?: string;
      priorityId?: string;
      leadId?: string;
      startDate?: string;
      targetDate?: string;
      memberIds?: string[];
      labelIds?: string[];
      milestones?: { id: string; title: string; dueDate?: string }[];
   }) => string; // returns id
   renameProject: (id: string, name: string) => void;
   updateProject: (id: string, updates: Partial<Project>) => void;
   archiveProject: (id: string) => void;
   unarchiveProject: (id: string) => void;
   deleteProject: (id: string) => void;

   // Field helpers
   updateProjectField: (id: string, partial: Partial<Project>) => void;

   // Labels
   addProjectLabel: (id: string, label: { id: string; name: string; color: string }) => void;
   removeProjectLabel: (id: string, labelId: string) => void;

   // Milestones
   createMilestone: (id: string, title: string, dueDate?: string) => string;
   updateMilestone: (
      id: string,
      milestoneId: string,
      partial: { title?: string; dueDate?: string }
   ) => void;
   deleteMilestone: (id: string, milestoneId: string) => void;
}

export const useProjectsStore = create<ProjectsState>((set, get) => ({
   projects: seedProjects.map((p) => ({ ...p, archived: p.archived ?? false })),

   // Queries
   getAllProjects: () => get().projects,

   getProjectsByWorkspace: (workspaceId: string) => {
      return get().projects.filter(
         (p) => (p.workspaceId === undefined || p.workspaceId === workspaceId) && !p.archived
      );
   },

   getProjectById: (id: string) => get().projects.find((p) => p.id === id),

   // Mutations
   createProject: ({ name, workspaceId, description, priorityId, leadId, startDate, targetDate, memberIds, labelIds, milestones }) => {
      const id = uuidv4();
      const members = (memberIds ?? [])
         .map((uid) => users.find((u) => u.id === uid))
         .filter(Boolean) as typeof users;
      const labels = (labelIds ?? [])
         .map((lid) => allLabels.find((l) => l.id === lid))
         .filter(Boolean) as typeof allLabels;
      const newProject: Project = {
         id,
         name,
         status: status[1],
         icon: LayoutDashboard,
         percentComplete: 0,
         startDate: startDate ?? new Date().toISOString().slice(0, 10),
         targetDate,
         description,
         lead: users.find((u) => u.id === (leadId ?? users[0].id)) ?? users[0],
         priority: priorities.find((p) => p.id === (priorityId ?? priorities[1].id)) ?? priorities[1],
         health: health[0],
         archived: false,
         workspaceId,
         members,
         labels,
         milestones: milestones ?? [],
      };
      set((state) => ({ projects: [newProject, ...state.projects] }));
      return id;
   },

   renameProject: (id, name) => {
      set((state) => ({
         projects: state.projects.map((p) => (p.id === id ? { ...p, name } : p)),
      }));
   },

   updateProject: (id, updates) => {
      set((state) => ({
         projects: state.projects.map((p) => (p.id === id ? { ...p, ...updates } : p)),
      }));
   },

   archiveProject: (id) => {
      set((state) => ({
         projects: state.projects.map((p) => (p.id === id ? { ...p, archived: true } : p)),
      }));
   },

   unarchiveProject: (id) => {
      set((state) => ({
         projects: state.projects.map((p) => (p.id === id ? { ...p, archived: false } : p)),
      }));
   },

   deleteProject: (id) => {
      set((state) => ({ projects: state.projects.filter((p) => p.id !== id) }));
   },

   updateProjectField: (id, partial) => {
      set((state) => ({
         projects: state.projects.map((p) => (p.id === id ? { ...p, ...partial } : p)),
      }));
   },

   addProjectLabel: (id, label) => {
      set((state) => ({
         projects: state.projects.map((p) =>
            p.id === id
               ? { ...p, labels: [...(p.labels ?? []), label] }
               : p
         ),
      }));
   },

   removeProjectLabel: (id, labelId) => {
      set((state) => ({
         projects: state.projects.map((p) =>
            p.id === id
               ? { ...p, labels: (p.labels ?? []).filter((l) => l.id !== labelId) }
               : p
         ),
      }));
   },

   createMilestone: (id, title, dueDate) => {
      const milestoneId = uuidv4();
      set((state) => ({
         projects: state.projects.map((p) =>
            p.id === id
               ? {
                    ...p,
                    milestones: [...(p.milestones ?? []), { id: milestoneId, title, dueDate }],
                 }
               : p
         ),
      }));
      return milestoneId;
   },

   updateMilestone: (id, milestoneId, partial) => {
      set((state) => ({
         projects: state.projects.map((p) =>
            p.id === id
               ? {
                    ...p,
                    milestones: (p.milestones ?? []).map((m) =>
                       m.id === milestoneId ? { ...m, ...partial } : m
                    ),
                 }
               : p
         ),
      }));
   },

   deleteMilestone: (id, milestoneId) => {
      set((state) => ({
         projects: state.projects.map((p) =>
            p.id === id
               ? {
                    ...p,
                    milestones: (p.milestones ?? []).filter((m) => m.id !== milestoneId),
                 }
               : p
         ),
      }));
   },
}));



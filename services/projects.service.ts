import { Project } from '@/data/projects';
import { useProjectsStore } from '@/store/projects-store';

type CreateProjectInput = {
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
};

export class ProjectsService {
   static createProject(input: CreateProjectInput): string {
      return useProjectsStore.getState().createProject(input);
   }

   static updateProject(id: string, partial: Partial<Project>): void {
      useProjectsStore.getState().updateProject(id, partial);
   }

   static updateProjectField(id: string, partial: Partial<Project>): void {
      useProjectsStore.getState().updateProjectField(id, partial);
   }

   static addProjectLabel(id: string, label: { id: string; name: string; color: string }): void {
      useProjectsStore.getState().addProjectLabel(id, label);
   }

   static removeProjectLabel(id: string, labelId: string): void {
      useProjectsStore.getState().removeProjectLabel(id, labelId);
   }

   static createMilestone(id: string, title: string, dueDate?: string): string {
      return useProjectsStore.getState().createMilestone(id, title, dueDate);
   }

   static updateMilestone(id: string, milestoneId: string, partial: { title?: string; dueDate?: string }): void {
      useProjectsStore.getState().updateMilestone(id, milestoneId, partial);
   }

   static deleteMilestone(id: string, milestoneId: string): void {
      useProjectsStore.getState().deleteMilestone(id, milestoneId);
   }
}



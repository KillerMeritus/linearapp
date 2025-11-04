import { Project } from '@/data/projects';
import { useProjectsStore } from '@/store/projects-store';

export class ProjectsService {
   static createProject(input: Parameters<typeof useProjectsStore.getState()['createProject']>[0]): string {
      return useProjectsStore.getState().createProject(input);
   }

   static updateProject(id: string, partial: Partial<Project>) {
      useProjectsStore.getState().updateProject(id, partial);
   }

   static updateProjectField(id: string, partial: Partial<Project>) {
      useProjectsStore.getState().updateProjectField(id, partial);
   }

   static addProjectLabel(id: string, label: { id: string; name: string; color: string }) {
      useProjectsStore.getState().addProjectLabel(id, label);
   }

   static removeProjectLabel(id: string, labelId: string) {
      useProjectsStore.getState().removeProjectLabel(id, labelId);
   }

   static createMilestone(id: string, title: string, dueDate?: string) {
      return useProjectsStore.getState().createMilestone(id, title, dueDate);
   }

   static updateMilestone(id: string, milestoneId: string, partial: { title?: string; dueDate?: string }) {
      useProjectsStore.getState().updateMilestone(id, milestoneId, partial);
   }

   static deleteMilestone(id: string, milestoneId: string) {
      useProjectsStore.getState().deleteMilestone(id, milestoneId);
   }
}



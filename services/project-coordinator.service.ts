/**
 * Project Coordinator Service
 * Manages project-related operations for Scaler Hackathon
 * @module services/project-coordinator
 */

import { Project, projects } from '@/data/projects';
import { issues } from '@/data/issues';

export class ProjectCoordinatorService {
   /**
    * Get all projects
    */
   static getAllProjects(): Project[] {
      return projects;
   }

   /**
    * Get project by ID
    */
   static getProjectById(id: string): Project | undefined {
      return projects.find((project) => project.id === id);
   }

   /**
    * Get projects by status
    */
   static getProjectsByStatus(statusId: string): Project[] {
      return projects.filter((project) => project.status.id === statusId);
   }

   /**
    * Get projects by health status
    */
   static getProjectsByHealth(healthId: string): Project[] {
      return projects.filter((project) => project.health.id === healthId);
   }

   /**
    * Get projects led by a user
    */
   static getProjectsByLead(userId: string): Project[] {
      return projects.filter((project) => project.lead.id === userId);
   }

   /**
    * Get active projects (not completed or cancelled)
    */
   static getActiveProjects(): Project[] {
      return projects.filter(
         (project) => project.status.id !== 'completed' && project.status.id !== 'cancelled'
      );
   }

   /**
    * Get at-risk projects
    */
   static getAtRiskProjects(): Project[] {
      return projects.filter(
         (project) => project.health.id === 'at-risk' || project.health.id === 'off-track'
      );
   }

   /**
    * Get project completion percentage
    */
   static getProjectCompletion(projectId: string): number {
      const project = projects.find((p) => p.id === projectId);
      return project ? project.percentComplete : 0;
   }

   /**
    * Get project tasks count
    */
   static getProjectTasksCount(projectId: string): number {
      return issues.filter((issue) => issue.projectId === projectId).length;
   }

   /**
    * Get project statistics
    */
   static getProjectStatistics(projectId: string) {
      const projectTasks = issues.filter((issue) => issue.projectId === projectId);
      const completed = projectTasks.filter((task) => task.status.id === 'done').length;
      const inProgress = projectTasks.filter((task) => task.status.id === 'in-progress').length;
      const total = projectTasks.length;

      return {
         total,
         completed,
         inProgress,
         pending: total - completed - inProgress,
         completionRate: total > 0 ? (completed / total) * 100 : 0,
      };
   }

   /**
    * Get overall project metrics
    */
   static getOverallMetrics() {
      const total = projects.length;
      const completed = projects.filter((p) => p.status.id === 'completed').length;
      const active = projects.filter((p) => p.status.id === 'in-progress').length;
      const atRisk = projects.filter((p) => p.health.id === 'at-risk').length;

      const avgCompletion = projects.reduce((sum, p) => sum + p.percentComplete, 0) / total;

      return {
         total,
         completed,
         active,
         atRisk,
         averageCompletion: avgCompletion,
      };
   }

   /**
    * Search projects by name
    */
   static searchProjects(query: string): Project[] {
      const lowerQuery = query.toLowerCase();
      return projects.filter((project) => project.name.toLowerCase().includes(lowerQuery));
   }
}

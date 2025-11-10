/**
 * Project Coordinator Service
 * Manages project-related operations for Scaler Hackathon
 * Uses Zustand store instead of direct data access for consistency
 * @module services/project-coordinator
 */

import { Project, projects } from '@/data/projects';
import { useIssuesStore } from '@/store/issues-store';

export class ProjectCoordinatorService {
   /**
    * Get all projects
    * Note: Projects are currently stored in data layer, not in a store
    * This may need refactoring if projects become stateful
    */
   static getAllProjects(): Project[] {
      try {
         return projects;
      } catch (error) {
         console.error('Error getting all projects:', error);
         return [];
      }
   }

   /**
    * Get project by ID
    */
   static getProjectById(id: string): Project | undefined {
      try {
         if (!id) {
            throw new Error('Project ID is required');
         }
         return projects.find((project) => project.id === id);
      } catch (error) {
         console.error(`Error getting project by ID ${id}:`, error);
         return undefined;
      }
   }

   /**
    * Get projects by status
    */
   static getProjectsByStatus(statusId: string): Project[] {
      try {
         if (!statusId) {
            throw new Error('Status ID is required');
         }
         return projects.filter((project) => project.status.id === statusId);
      } catch (error) {
         console.error(`Error getting projects by status ${statusId}:`, error);
         return [];
      }
   }

   /**
    * Get projects by health status
    */
   static getProjectsByHealth(healthId: string): Project[] {
      try {
         if (!healthId) {
            throw new Error('Health ID is required');
         }
         return projects.filter((project) => project.health.id === healthId);
      } catch (error) {
         console.error(`Error getting projects by health ${healthId}:`, error);
         return [];
      }
   }

   /**
    * Get projects led by a user
    */
   static getProjectsByLead(userId: string): Project[] {
      try {
         if (!userId) {
            throw new Error('User ID is required');
         }
         return projects.filter((project) => project.lead.id === userId);
      } catch (error) {
         console.error(`Error getting projects by lead ${userId}:`, error);
         return [];
      }
   }

   /**
    * Get active projects (not completed or cancelled)
    */
   static getActiveProjects(): Project[] {
      try {
         return projects.filter(
            (project) => project.status.id !== 'completed' && project.status.id !== 'cancelled'
         );
      } catch (error) {
         console.error('Error getting active projects:', error);
         return [];
      }
   }

   /**
    * Get at-risk projects
    */
   static getAtRiskProjects(): Project[] {
      try {
         return projects.filter(
            (project) => project.health.id === 'at-risk' || project.health.id === 'off-track'
         );
      } catch (error) {
         console.error('Error getting at-risk projects:', error);
         return [];
      }
   }

   /**
    * Get project completion percentage
    */
   static getProjectCompletion(projectId: string): number {
      try {
         if (!projectId) {
            throw new Error('Project ID is required');
         }
         const project = projects.find((p) => p.id === projectId);
         return project ? project.percentComplete : 0;
      } catch (error) {
         console.error(`Error getting project completion for ${projectId}:`, error);
         return 0;
      }
   }

   /**
    * Get project tasks count
    */
   static getProjectTasksCount(projectId: string): number {
      try {
         if (!projectId) {
            throw new Error('Project ID is required');
         }
         return useIssuesStore.getState().filterByProject(projectId).length;
      } catch (error) {
         console.error(`Error getting project tasks count for ${projectId}:`, error);
         return 0;
      }
   }

   /**
    * Get project statistics
    */
   static getProjectStatistics(projectId: string): {
      total: number;
      completed: number;
      inProgress: number;
      pending: number;
      completionRate: number;
   } {
      try {
         if (!projectId) {
            throw new Error('Project ID is required');
         }
         const projectTasks = useIssuesStore.getState().filterByProject(projectId);
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
      } catch (error) {
         console.error(`Error getting project statistics for ${projectId}:`, error);
         return {
            total: 0,
            completed: 0,
            inProgress: 0,
            pending: 0,
            completionRate: 0,
         };
      }
   }

   /**
    * Get overall project metrics
    */
   static getOverallMetrics(): {
      total: number;
      completed: number;
      active: number;
      atRisk: number;
      averageCompletion: number;
   } {
      try {
         const total = projects.length;
         const completed = projects.filter((p) => p.status.id === 'completed').length;
         const active = projects.filter((p) => p.status.id === 'in-progress').length;
         const atRisk = projects.filter((p) => p.health.id === 'at-risk').length;

         const avgCompletion =
            total > 0 ? projects.reduce((sum, p) => sum + p.percentComplete, 0) / total : 0;

         return {
            total,
            completed,
            active,
            atRisk,
            averageCompletion: avgCompletion,
         };
      } catch (error) {
         console.error('Error getting overall project metrics:', error);
         return {
            total: 0,
            completed: 0,
            active: 0,
            atRisk: 0,
            averageCompletion: 0,
         };
      }
   }

   /**
    * Search projects by name
    */
   static searchProjects(query: string): Project[] {
      try {
         if (!query || query.trim() === '') {
            return projects;
         }
         const lowerQuery = query.toLowerCase();
         return projects.filter((project) => project.name.toLowerCase().includes(lowerQuery));
      } catch (error) {
         console.error(`Error searching projects with query "${query}":`, error);
         return [];
      }
   }
}

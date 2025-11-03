/**
 * Task Manager Service
 * Handles all task-related business logic for Scaler Hackathon
 * Uses Zustand store instead of direct data access for consistency
 * @module services/task-manager
 */

import { Issue } from '@/data/issues';
import { useIssuesStore } from '@/store/issues-store';

export class TaskManagerService {
   /**
    * Get all tasks from store
    */
   static getAllTasks(): Issue[] {
      try {
         return useIssuesStore.getState().getAllIssues();
      } catch (error) {
         console.error('Error getting all tasks:', error);
         return [];
      }
   }

   /**
    * Get tasks by status
    */
   static getTasksByStatus(statusId: string): Issue[] {
      try {
         return useIssuesStore.getState().filterByStatus(statusId);
      } catch (error) {
         console.error(`Error getting tasks by status ${statusId}:`, error);
         return [];
      }
   }

   /**
    * Get tasks by priority
    */
   static getTasksByPriority(priorityId: string): Issue[] {
      try {
         return useIssuesStore.getState().filterByPriority(priorityId);
      } catch (error) {
         console.error(`Error getting tasks by priority ${priorityId}:`, error);
         return [];
      }
   }

   /**
    * Get tasks assigned to a user
    */
   static getTasksByAssignee(userId: string): Issue[] {
      try {
         return useIssuesStore.getState().filterByAssignee(userId);
      } catch (error) {
         console.error(`Error getting tasks by assignee ${userId}:`, error);
         return [];
      }
   }

   /**
    * Get high priority tasks
    */
   static getHighPriorityTasks(): Issue[] {
      try {
         const issues = useIssuesStore.getState().getAllIssues();
         return issues.filter(
            (task) => task.priority.id === 'urgent' || task.priority.id === 'high'
         );
      } catch (error) {
         console.error('Error getting high priority tasks:', error);
         return [];
      }
   }

   /**
    * Search tasks by title or description
    */
   static searchTasks(query: string): Issue[] {
      try {
         if (!query || query.trim() === '') {
            return useIssuesStore.getState().getAllIssues();
         }
         return useIssuesStore.getState().searchIssues(query);
      } catch (error) {
         console.error(`Error searching tasks with query "${query}":`, error);
         return [];
      }
   }

   /**
    * Get task by ID
    */
   static getTaskById(id: string): Issue | undefined {
      try {
         if (!id) {
            throw new Error('Task ID is required');
         }
         return useIssuesStore.getState().getIssueById(id);
      } catch (error) {
         console.error(`Error getting task by ID ${id}:`, error);
         return undefined;
      }
   }

   /**
    * Get tasks for a specific project
    */
   static getTasksByProject(projectId: string): Issue[] {
      try {
         if (!projectId) {
            throw new Error('Project ID is required');
         }
         return useIssuesStore.getState().filterByProject(projectId);
      } catch (error) {
         console.error(`Error getting tasks by project ${projectId}:`, error);
         return [];
      }
   }

   /**
    * Get overdue tasks
    */
   static getOverdueTasks(): Issue[] {
      try {
         const issues = useIssuesStore.getState().getAllIssues();
         const now = new Date();
         return issues.filter((task) => {
            if (!task.dueDate) return false;
            return new Date(task.dueDate) < now && task.status.id !== 'done';
         });
      } catch (error) {
         console.error('Error getting overdue tasks:', error);
         return [];
      }
   }

   /**
    * Get tasks due soon (within 7 days)
    */
   static getTasksDueSoon(): Issue[] {
      try {
         const issues = useIssuesStore.getState().getAllIssues();
         const now = new Date();
         const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

         return issues.filter((task) => {
            if (!task.dueDate) return false;
            const dueDate = new Date(task.dueDate);
            return dueDate > now && dueDate <= weekFromNow && task.status.id !== 'done';
         });
      } catch (error) {
         console.error('Error getting tasks due soon:', error);
         return [];
      }
   }

   /**
    * Get task statistics
    */
   static getTaskStatistics() {
      try {
         const issues = useIssuesStore.getState().getAllIssues();
         const total = issues.length;
         const completed = issues.filter((task) => task.status.id === 'done').length;
         const inProgress = issues.filter((task) => task.status.id === 'in-progress').length;
         const todo = issues.filter((task) => task.status.id === 'todo').length;

         return {
            total,
            completed,
            inProgress,
            todo,
            completionRate: total > 0 ? (completed / total) * 100 : 0,
         };
      } catch (error) {
         console.error('Error getting task statistics:', error);
         return {
            total: 0,
            completed: 0,
            inProgress: 0,
            todo: 0,
            completionRate: 0,
         };
      }
   }
}

/**
 * Task Manager Service
 * Handles all task-related business logic for Scaler Hackathon
 * @module services/task-manager
 */

import { Issue, issues } from '@/data/issues';
import { Status } from '@/data/status';
import { Priority } from '@/data/priorities';

export class TaskManagerService {
   /**
    * Get all tasks
    */
   static getAllTasks(): Issue[] {
      return issues;
   }

   /**
    * Get tasks by status
    */
   static getTasksByStatus(statusId: string): Issue[] {
      return issues.filter((task) => task.status.id === statusId);
   }

   /**
    * Get tasks by priority
    */
   static getTasksByPriority(priorityId: string): Issue[] {
      return issues.filter((task) => task.priority.id === priorityId);
   }

   /**
    * Get tasks assigned to a user
    */
   static getTasksByAssignee(userId: string): Issue[] {
      return issues.filter((task) => task.assignee?.id === userId);
   }

   /**
    * Get high priority tasks
    */
   static getHighPriorityTasks(): Issue[] {
      return issues.filter((task) => task.priority.id === 'urgent' || task.priority.id === 'high');
   }

   /**
    * Search tasks by title or description
    */
   static searchTasks(query: string): Issue[] {
      const lowerQuery = query.toLowerCase();
      return issues.filter(
         (task) =>
            task.title.toLowerCase().includes(lowerQuery) ||
            (task.description && task.description.toLowerCase().includes(lowerQuery))
      );
   }

   /**
    * Get task by ID
    */
   static getTaskById(id: string): Issue | undefined {
      return issues.find((task) => task.id === id);
   }

   /**
    * Get tasks for a specific project
    */
   static getTasksByProject(projectId: string): Issue[] {
      return issues.filter((task) => task.projectId === projectId);
   }

   /**
    * Get overdue tasks
    */
   static getOverdueTasks(): Issue[] {
      const now = new Date();
      return issues.filter((task) => {
         if (!task.dueDate) return false;
         return new Date(task.dueDate) < now && task.status.id !== 'done';
      });
   }

   /**
    * Get tasks due soon (within 7 days)
    */
   static getTasksDueSoon(): Issue[] {
      const now = new Date();
      const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

      return issues.filter((task) => {
         if (!task.dueDate) return false;
         const dueDate = new Date(task.dueDate);
         return dueDate > now && dueDate <= weekFromNow && task.status.id !== 'done';
      });
   }

   /**
    * Get task statistics
    */
   static getTaskStatistics() {
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
   }
}

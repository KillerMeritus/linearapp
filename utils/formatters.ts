/**
 * Formatting Utilities
 * Helper functions for formatting data
 * @module utils/formatters
 */

import { format, formatDistanceToNow, isValid } from 'date-fns';

/**
 * Format a date to a readable string
 */
export function formatDate(date: string | Date, formatString = 'MMM dd, yyyy'): string {
   try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      if (!isValid(dateObj)) return 'Invalid date';
      return format(dateObj, formatString);
   } catch {
      return 'Invalid date';
   }
}

/**
 * Format a date relative to now
 */
export function formatRelativeTime(date: string | Date): string {
   try {
      const dateObj = typeof date === 'string' ? new Date(date) : date;
      if (!isValid(dateObj)) return 'Invalid date';
      return formatDistanceToNow(dateObj, { addSuffix: true });
   } catch {
      return 'Invalid date';
   }
}

/**
 * Format a number as percentage
 */
export function formatPercentage(value: number, decimals = 0): string {
   return `${value.toFixed(decimals)}%`;
}

/**
 * Format task ID with prefix
 */
export function formatTaskId(id: string | number, prefix = 'SH'): string {
   return `${prefix}-${id}`;
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
   if (text.length <= maxLength) return text;
   return `${text.substring(0, maxLength)}...`;
}

/**
 * Capitalize first letter of each word
 */
export function capitalizeWords(text: string): string {
   return text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

/**
 * Convert snake_case or kebab-case to Title Case
 */
export function toTitleCase(text: string): string {
   return text
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

/**
 * Format file size in bytes to human readable
 */
export function formatFileSize(bytes: number): string {
   if (bytes === 0) return '0 Bytes';

   const k = 1024;
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   const i = Math.floor(Math.log(bytes) / Math.log(k));

   return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`;
}

/**
 * Format duration in seconds to human readable
 */
export function formatDuration(seconds: number): string {
   if (seconds < 60) return `${seconds}s`;
   if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
   if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
   return `${Math.floor(seconds / 86400)}d`;
}

/**
 * Format user name
 */
export function formatUserName(firstName?: string, lastName?: string, email?: string): string {
   if (firstName && lastName) return `${firstName} ${lastName}`;
   if (firstName) return firstName;
   if (email) return email.split('@')[0];
   return 'Unknown User';
}

/**
 * Generate initials from name
 */
export function getInitials(name: string): string {
   const parts = name.trim().split(' ');
   if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
   }
   return name.substring(0, 2).toUpperCase();
}

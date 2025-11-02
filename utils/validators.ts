/**
 * Validation Utilities
 * Helper functions for data validation
 * @module utils/validators
 */

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
   try {
      new URL(url);
      return true;
   } catch {
      return false;
   }
}

/**
 * Validate task title
 */
export function isValidTaskTitle(title: string): boolean {
   return title.trim().length >= 3 && title.trim().length <= 200;
}

/**
 * Validate project name
 */
export function isValidProjectName(name: string): boolean {
   return name.trim().length >= 3 && name.trim().length <= 100;
}

/**
 * Validate workspace name
 */
export function isValidWorkspaceName(name: string): boolean {
   const workspaceRegex = /^[a-z0-9-]+$/;
   return name.length >= 3 && name.length <= 50 && workspaceRegex.test(name);
}

/**
 * Validate date is in future
 */
export function isFutureDate(date: string | Date): boolean {
   const dateObj = typeof date === 'string' ? new Date(date) : date;
   return dateObj > new Date();
}

/**
 * Validate date is in past
 */
export function isPastDate(date: string | Date): boolean {
   const dateObj = typeof date === 'string' ? new Date(date) : date;
   return dateObj < new Date();
}

/**
 * Check if string is empty or whitespace
 */
export function isEmpty(value: string | null | undefined): boolean {
   return !value || value.trim().length === 0;
}

/**
 * Check if value is numeric
 */
export function isNumeric(value: string): boolean {
   return !isNaN(Number(value)) && isFinite(Number(value));
}

/**
 * Validate file size
 */
export function isValidFileSize(sizeInBytes: number, maxSizeInMB = 10): boolean {
   return sizeInBytes <= maxSizeInMB * 1024 * 1024;
}

/**
 * Validate file type
 */
export function isValidFileType(filename: string, allowedTypes: string[]): boolean {
   const extension = filename.split('.').pop()?.toLowerCase();
   return extension ? allowedTypes.includes(extension) : false;
}

/**
 * Validate password strength
 */
export function isStrongPassword(password: string): boolean {
   // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
   const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
   return strongPasswordRegex.test(password);
}

/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
   const div = document.createElement('div');
   div.textContent = html;
   return div.innerHTML;
}

/**
 * Validate hex color code
 */
export function isValidHexColor(color: string): boolean {
   const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
   return hexColorRegex.test(color);
}

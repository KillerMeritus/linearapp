import { LexoRank } from '@/lib/utils';
import { LabelInterface, labels } from './labels';
import { Priority, priorities } from './priorities';
import { Project, projects } from './projects';
import { Status, status } from './status';
import { User, users } from './users';

export interface Issue {
   id: string;
   identifier: string;
   title: string;
   description: string;
   status: Status;
   assignee: User | null;
   priority: Priority;
   labels: LabelInterface[];
   createdAt: string;
   cycleId: string;
   project?: Project;
   projectId?: string;
   subissues?: string[];
   rank: string;
   dueDate?: string;
}

// Generates issues ranks using LexoRank algorithm
export const ranks: string[] = [];
const generateIssuesRanks = () => {
   const firstRank = new LexoRank('a3c');
   ranks.push(firstRank.toString());
   for (let i = 1; i < 30; i++) {
      const previousRank = LexoRank.from(ranks[i - 1]);
      const currentRank = previousRank.increment();
      ranks.push(currentRank.toString());
   }
};
generateIssuesRanks();

export const issues: Issue[] = [
   // AI-Powered Code Review System
   {
      id: '1',
      identifier: 'SH-101',
      title: 'Implement ML model for code quality analysis',
      description:
         'Train and integrate machine learning model to analyze code patterns and detect potential bugs',
      status: status[1],
      priority: priorities[0],
      assignee: users[0],
      labels: [labels[0], labels[2]],
      createdAt: '2025-01-15',
      cycleId: '1',
      project: projects[0],
      projectId: '1',
      rank: ranks[0],
      dueDate: '2025-02-10',
   },
   {
      id: '2',
      identifier: 'SH-102',
      title: 'Build REST API for code review submissions',
      description:
         'Create endpoints for submitting code, retrieving reviews, and managing feedback',
      status: status[0],
      priority: priorities[0],
      assignee: users[1],
      labels: [labels[1]],
      createdAt: '2025-01-16',
      cycleId: '1',
      project: projects[0],
      projectId: '1',
      rank: ranks[1],
      dueDate: '2025-02-05',
   },
   {
      id: '3',
      identifier: 'SH-103',
      title: 'Design UI for code review dashboard',
      description:
         'Create wireframes and implement responsive dashboard for displaying code reviews',
      status: status[1],
      priority: priorities[1],
      assignee: users[2],
      labels: [labels[3]],
      createdAt: '2025-01-17',
      cycleId: '1',
      project: projects[0],
      projectId: '1',
      rank: ranks[2],
      dueDate: '2025-02-08',
   },

   // Real-time Collaboration Platform
   {
      id: '4',
      identifier: 'SH-201',
      title: 'Set up WebSocket server for real-time communication',
      description: 'Configure Socket.io or WebSocket server for handling concurrent connections',
      status: status[1],
      priority: priorities[0],
      assignee: users[0],
      labels: [labels[1]],
      createdAt: '2025-01-20',
      cycleId: '2',
      project: projects[1],
      projectId: '2',
      rank: ranks[3],
      dueDate: '2025-02-12',
   },
   {
      id: '5',
      identifier: 'SH-202',
      title: 'Implement cursor tracking and presence indicators',
      description: 'Show real-time cursor positions and user presence in collaborative documents',
      status: status[1],
      priority: priorities[0],
      assignee: users[1],
      labels: [labels[0]],
      createdAt: '2025-01-21',
      cycleId: '2',
      project: projects[1],
      projectId: '2',
      rank: ranks[4],
      dueDate: '2025-02-15',
   },
   {
      id: '6',
      identifier: 'SH-203',
      title: 'Add operational transformation for concurrent editing',
      description: 'Implement OT algorithm to handle simultaneous edits without conflicts',
      status: status[2],
      priority: priorities[1],
      assignee: users[2],
      labels: [labels[0], labels[2]],
      createdAt: '2025-01-22',
      cycleId: '2',
      project: projects[1],
      projectId: '2',
      rank: ranks[5],
      dueDate: '2025-02-20',
   },

   // Microservices Architecture Migration
   {
      id: '7',
      identifier: 'SH-301',
      title: 'Break monolith into user service microservice',
      description:
         'Extract user management logic into independent microservice with its own database',
      status: status[1],
      priority: priorities[0],
      assignee: users[0],
      labels: [labels[1]],
      createdAt: '2025-01-18',
      cycleId: '3',
      project: projects[2],
      projectId: '3',
      rank: ranks[6],
      dueDate: '2025-02-25',
   },
   {
      id: '8',
      identifier: 'SH-302',
      title: 'Implement API Gateway with rate limiting',
      description: 'Set up API Gateway to route requests and enforce rate limits',
      status: status[2],
      priority: priorities[1],
      assignee: users[1],
      labels: [labels[1], labels[4]],
      createdAt: '2025-01-19',
      cycleId: '3',
      project: projects[2],
      projectId: '3',
      rank: ranks[7],
      dueDate: '2025-03-01',
   },
   {
      id: '9',
      identifier: 'SH-303',
      title: 'Set up service discovery with Consul',
      description: 'Configure Consul for dynamic service registration and discovery',
      status: status[3],
      priority: priorities[2],
      assignee: users[2],
      labels: [labels[5]],
      createdAt: '2025-01-20',
      cycleId: '3',
      project: projects[2],
      projectId: '3',
      rank: ranks[8],
      dueDate: '2025-03-05',
   },

   // Cloud Infrastructure Optimization
   {
      id: '10',
      identifier: 'SH-401',
      title: 'Migrate to containerized deployment with Docker',
      description: 'Dockerize all services and create multi-stage builds for optimization',
      status: status[0],
      priority: priorities[0],
      assignee: users[0],
      labels: [labels[5]],
      createdAt: '2025-01-10',
      cycleId: '4',
      project: projects[3],
      projectId: '4',
      rank: ranks[9],
      dueDate: '2025-02-01',
   },
   {
      id: '11',
      identifier: 'SH-402',
      title: 'Set up Kubernetes cluster for orchestration',
      description: 'Configure K8s cluster with auto-scaling, load balancing, and health checks',
      status: status[1],
      priority: priorities[0],
      assignee: users[1],
      labels: [labels[5]],
      createdAt: '2025-01-11',
      cycleId: '4',
      project: projects[3],
      projectId: '4',
      rank: ranks[10],
      dueDate: '2025-02-10',
   },
   {
      id: '12',
      identifier: 'SH-403',
      title: 'Implement CDN for static asset delivery',
      description: 'Configure CloudFlare CDN to serve static assets globally with low latency',
      status: status[0],
      priority: priorities[1],
      assignee: users[2],
      labels: [labels[6]],
      createdAt: '2025-01-12',
      cycleId: '4',
      project: projects[3],
      projectId: '4',
      rank: ranks[11],
      dueDate: '2025-02-05',
   },

   // Mobile App Development
   {
      id: '13',
      identifier: 'SH-501',
      title: 'Set up React Native project structure',
      description: 'Initialize RN project with TypeScript, navigation, and state management',
      status: status[1],
      priority: priorities[0],
      assignee: users[0],
      labels: [labels[7]],
      createdAt: '2025-01-22',
      cycleId: '5',
      project: projects[4],
      projectId: '5',
      rank: ranks[12],
      dueDate: '2025-02-15',
   },
   {
      id: '14',
      identifier: 'SH-502',
      title: 'Implement biometric authentication (Face ID/Touch ID)',
      description: 'Add biometric login support for iOS and Android',
      status: status[1],
      priority: priorities[1],
      assignee: users[1],
      labels: [labels[7], labels[4]],
      createdAt: '2025-01-23',
      cycleId: '5',
      project: projects[4],
      projectId: '5',
      rank: ranks[13],
      dueDate: '2025-02-20',
   },
   {
      id: '15',
      identifier: 'SH-503',
      title: 'Integrate push notifications with FCM',
      description: 'Configure Firebase Cloud Messaging for cross-platform push notifications',
      status: status[2],
      priority: priorities[2],
      assignee: users[2],
      labels: [labels[7]],
      createdAt: '2025-01-24',
      cycleId: '5',
      project: projects[4],
      projectId: '5',
      rank: ranks[14],
      dueDate: '2025-02-25',
   },

   // Database Performance Tuning
   {
      id: '16',
      identifier: 'SH-601',
      title: 'Add database indexes for frequently queried fields',
      description: 'Analyze query patterns and create composite indexes for optimization',
      status: status[2],
      priority: priorities[1],
      assignee: users[0],
      labels: [labels[1], labels[6]],
      createdAt: '2025-02-01',
      cycleId: '6',
      project: projects[5],
      projectId: '6',
      rank: ranks[15],
      dueDate: '2025-02-28',
   },
   {
      id: '17',
      identifier: 'SH-602',
      title: 'Implement database connection pooling',
      description: 'Configure connection pooling to reduce overhead and improve throughput',
      status: status[3],
      priority: priorities[2],
      assignee: users[1],
      labels: [labels[1]],
      createdAt: '2025-02-02',
      cycleId: '6',
      project: projects[5],
      projectId: '6',
      rank: ranks[16],
      dueDate: '2025-03-05',
   },
   {
      id: '18',
      identifier: 'SH-603',
      title: 'Set up read replicas for scaling reads',
      description: 'Configure database replication to distribute read load across replicas',
      status: status[4],
      priority: priorities[2],
      assignee: users[2],
      labels: [labels[1], labels[5]],
      createdAt: '2025-02-03',
      cycleId: '6',
      project: projects[5],
      projectId: '6',
      rank: ranks[17],
      dueDate: '2025-03-10',
   },

   // Security Audit & Penetration Testing
   {
      id: '19',
      identifier: 'SH-701',
      title: 'Conduct OWASP Top 10 vulnerability assessment',
      description:
         'Test application for SQL injection, XSS, CSRF, and other common vulnerabilities',
      status: status[0],
      priority: priorities[0],
      assignee: users[0],
      labels: [labels[4]],
      createdAt: '2025-01-05',
      cycleId: '7',
      project: projects[6],
      projectId: '7',
      rank: ranks[18],
      dueDate: '2025-01-30',
   },
   {
      id: '20',
      identifier: 'SH-702',
      title: 'Implement Content Security Policy headers',
      description: 'Add CSP headers to prevent XSS and other code injection attacks',
      status: status[0],
      priority: priorities[0],
      assignee: users[1],
      labels: [labels[4]],
      createdAt: '2025-01-06',
      cycleId: '7',
      project: projects[6],
      projectId: '7',
      rank: ranks[19],
      dueDate: '2025-02-01',
   },
   {
      id: '21',
      identifier: 'SH-703',
      title: 'Set up automated security scanning in CI/CD',
      description: 'Integrate Snyk or Dependabot for automated dependency vulnerability scanning',
      status: status[1],
      priority: priorities[1],
      assignee: users[2],
      labels: [labels[4], labels[5]],
      createdAt: '2025-01-07',
      cycleId: '7',
      project: projects[6],
      projectId: '7',
      rank: ranks[20],
      dueDate: '2025-02-05',
   },

   // GraphQL API Implementation
   {
      id: '22',
      identifier: 'SH-801',
      title: 'Design GraphQL schema for core entities',
      description: 'Define types, queries, mutations, and subscriptions for the API',
      status: status[1],
      priority: priorities[1],
      assignee: users[0],
      labels: [labels[1]],
      createdAt: '2025-01-25',
      cycleId: '8',
      project: projects[7],
      projectId: '8',
      rank: ranks[21],
      dueDate: '2025-02-18',
   },
   {
      id: '23',
      identifier: 'SH-802',
      title: 'Implement DataLoader for N+1 query optimization',
      description: 'Add batching and caching layer to prevent N+1 query problems',
      status: status[1],
      priority: priorities[0],
      assignee: users[1],
      labels: [labels[1], labels[6]],
      createdAt: '2025-01-26',
      cycleId: '8',
      project: projects[7],
      projectId: '8',
      rank: ranks[22],
      dueDate: '2025-02-20',
   },
   {
      id: '24',
      identifier: 'SH-803',
      title: 'Add real-time subscriptions with WebSocket',
      description: 'Implement GraphQL subscriptions for live data updates',
      status: status[2],
      priority: priorities[2],
      assignee: users[2],
      labels: [labels[1], labels[0]],
      createdAt: '2025-01-27',
      cycleId: '8',
      project: projects[7],
      projectId: '8',
      rank: ranks[23],
      dueDate: '2025-02-25',
   },

   // Analytics Dashboard Redesign
   {
      id: '25',
      identifier: 'SH-901',
      title: 'Create interactive charts with D3.js',
      description: 'Build custom visualizations for user analytics and metrics',
      status: status[1],
      priority: priorities[2],
      assignee: users[0],
      labels: [labels[3]],
      createdAt: '2025-01-28',
      cycleId: '9',
      project: projects[8],
      projectId: '9',
      rank: ranks[24],
      dueDate: '2025-02-22',
   },
   {
      id: '26',
      identifier: 'SH-902',
      title: 'Implement real-time data streaming to dashboard',
      description: 'Set up WebSocket connection for live metric updates',
      status: status[1],
      priority: priorities[1],
      assignee: users[1],
      labels: [labels[0], labels[3]],
      createdAt: '2025-01-29',
      cycleId: '9',
      project: projects[8],
      projectId: '9',
      rank: ranks[25],
      dueDate: '2025-02-24',
   },
   {
      id: '27',
      identifier: 'SH-903',
      title: 'Add export functionality (PDF, CSV, Excel)',
      description: 'Allow users to export dashboard data in multiple formats',
      status: status[2],
      priority: priorities[2],
      assignee: users[2],
      labels: [labels[0]],
      createdAt: '2025-01-30',
      cycleId: '9',
      project: projects[8],
      projectId: '9',
      rank: ranks[26],
      dueDate: '2025-02-28',
   },

   // WebSocket Real-time Notifications
   {
      id: '28',
      identifier: 'SH-1001',
      title: 'Set up Redis pub/sub for notification broadcasting',
      description: 'Configure Redis to handle notification distribution across server instances',
      status: status[0],
      priority: priorities[1],
      assignee: users[0],
      labels: [labels[1]],
      createdAt: '2025-01-12',
      cycleId: '10',
      project: projects[9],
      projectId: '10',
      rank: ranks[27],
      dueDate: '2025-02-08',
   },
   {
      id: '29',
      identifier: 'SH-1002',
      title: 'Implement notification preferences and filtering',
      description: 'Allow users to customize which notifications they receive',
      status: status[1],
      priority: priorities[2],
      assignee: users[1],
      labels: [labels[0]],
      createdAt: '2025-01-13',
      cycleId: '10',
      project: projects[9],
      projectId: '10',
      rank: ranks[28],
      dueDate: '2025-02-12',
   },
   {
      id: '30',
      identifier: 'SH-1003',
      title: 'Add notification badge with unread count',
      description: 'Display real-time unread notification count in UI',
      status: status[0],
      priority: priorities[1],
      assignee: users[2],
      labels: [labels[3]],
      createdAt: '2025-01-14',
      cycleId: '10',
      project: projects[9],
      projectId: '10',
      rank: ranks[29],
      dueDate: '2025-02-10',
   },
];

/**
 * Group issues by status
 */
export function groupIssuesByStatus(issues: Issue[]): Record<string, Issue[]> {
   const grouped: Record<string, Issue[]> = {};

   issues.forEach((issue) => {
      const statusId = issue.status.id;
      if (!grouped[statusId]) {
         grouped[statusId] = [];
      }
      grouped[statusId].push(issue);
   });

   return grouped;
}

/**
 * Sort issues by priority (urgent > high > medium > low > no-priority)
 */
export function sortIssuesByPriority(issues: Issue[]): Issue[] {
   const priorityOrder: Record<string, number> = {
      'urgent': 0,
      'high': 1,
      'medium': 2,
      'low': 3,
      'no-priority': 4,
   };

   return [...issues].sort((a, b) => {
      const aPriority = priorityOrder[a.priority.id] ?? 4;
      const bPriority = priorityOrder[b.priority.id] ?? 4;

      if (aPriority !== bPriority) {
         return aPriority - bPriority;
      }

      // If priorities are equal, maintain original order using rank
      return a.rank.localeCompare(b.rank);
   });
}

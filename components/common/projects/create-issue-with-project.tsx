'use client';

import { CreateNewIssue } from '@/components/layout/sidebar/create-new-issue';
import { Project } from '@/data/projects';

interface CreateNewIssueWithProjectProps {
   project: Project;
}

export function CreateNewIssueWithProject({ project }: CreateNewIssueWithProjectProps) {
   // Pass projectId to CreateNewIssue so it pre-selects the project
   return <CreateNewIssue projectId={project.id} />;
}


'use client';

import React from 'react';
import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import dynamic from 'next/dynamic';
const CreateIssueModalProvider = dynamic(
   () => import('@/components/common/issues/create-issue-modal-provider').then((m) => m.CreateIssueModalProvider),
   { ssr: false }
);
const CommandPalette = dynamic(
   () => import('@/components/common/command-palette').then((m) => m.CommandPalette),
   { ssr: false }
);
import { ErrorBoundary } from '@/components/common/error-boundary';
import { ThemeInitializer } from '@/components/common/theme-initializer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
   children: React.ReactNode;
   header?: React.ReactNode;
   headersNumber?: 1 | 2;
}

const isEmptyHeader = (header: React.ReactNode | undefined): boolean => {
   if (!header) return true;

   if (React.isValidElement(header) && header.type === React.Fragment) {
      const props = header.props as { children?: React.ReactNode };

      if (!props.children) return true;

      if (Array.isArray(props.children) && props.children.length === 0) {
         return true;
      }
   }

   return false;
};

export default function MainLayout({ children, header, headersNumber = 2 }: MainLayoutProps) {
   const height = {
      1: 'h-[calc(100svh-40px)] lg:h-[calc(100svh-56px)]',
      2: 'h-[calc(100svh-80px)] lg:h-[calc(100svh-96px)]',
   };
   return (
      <ErrorBoundary>
         <ThemeInitializer />
         <SidebarProvider>
            <CreateIssueModalProvider />
            <CommandPalette />
            <AppSidebar />
            <DndProvider backend={HTML5Backend}>
               <div className="h-svh overflow-hidden w-full">
                  <div className="overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full">
                     {header}
                     <div
                        className={cn(
                           'overflow-auto w-full',
                           isEmptyHeader(header)
                              ? 'h-full'
                              : height[headersNumber as keyof typeof height]
                        )}
                     >
                        {children}
                     </div>
                  </div>
               </div>
            </DndProvider>
         </SidebarProvider>
      </ErrorBoundary>
   );
}

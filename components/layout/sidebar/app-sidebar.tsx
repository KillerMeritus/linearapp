'use client';

import * as React from 'react';

import { HelpButton } from '@/components/layout/sidebar/help-button';
import { NavInbox } from '@/components/layout/sidebar/nav-inbox';
import { NavTeams } from '@/components/layout/sidebar/nav-teams';
import { NavWorkspace } from '@/components/layout/sidebar/nav-workspace';
import { NavTry } from '@/components/layout/sidebar/nav-try';
import { NavAccount } from '@/components/layout/sidebar/nav-account';
import { NavFeatures } from '@/components/layout/sidebar/nav-features';
import { NavTeamsSettings } from '@/components/layout/sidebar/nav-teams-settings';
import { NavWorkspaceSettings } from '@/components/layout/sidebar/nav-workspace-settings';
import { NavAccountSettings } from '@/components/layout/sidebar/nav-account-settings';
import { OrgSwitcher } from '@/components/layout/sidebar/org-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { BackToApp } from '@/components/layout/sidebar/back-to-app';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   const pathname = usePathname();
   const isSettings = pathname.includes('/settings');
   return (
      <Sidebar collapsible="offcanvas" {...props}>
         <SidebarHeader className="border-b border-sidebar-border pb-2">
            {isSettings ? <BackToApp /> : <OrgSwitcher />}
         </SidebarHeader>
         <SidebarContent className="px-2 pt-3 gap-4">
            {isSettings ? (
               <>
                  <NavWorkspaceSettings />
                  <NavAccountSettings />
                  <NavTeamsSettings />
               </>
            ) : (
               <>
                  <NavInbox />
                  <NavWorkspace />
                  <NavTeams />
                  <NavTry />
               </>
            )}
         </SidebarContent>
         <SidebarFooter className="border-t border-sidebar-border pt-2">
            <div className="w-full flex items-center px-2">
               <HelpButton />
            </div>
         </SidebarFooter>
      </Sidebar>
   );
}

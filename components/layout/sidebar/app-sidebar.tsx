'use client';

import { RiGithubLine } from '@remixicon/react';
import * as React from 'react';
import { Search } from 'lucide-react';

import { HelpButton } from '@/components/layout/sidebar/help-button';
import { NavInbox } from '@/components/layout/sidebar/nav-inbox';
import { NavTeams } from '@/components/layout/sidebar/nav-teams';
import { NavWorkspace } from '@/components/layout/sidebar/nav-workspace';
import { NavAccount } from '@/components/layout/sidebar/nav-account';
import { NavFeatures } from '@/components/layout/sidebar/nav-features';
import { NavTeamsSettings } from '@/components/layout/sidebar/nav-teams-settings';
import { OrgSwitcher } from '@/components/layout/sidebar/org-switcher';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import Link from 'next/link';
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
                  <NavAccount />
                  <NavFeatures />
                  <NavTeamsSettings />
               </>
            ) : (
               <>
                  <NavInbox />
                  <NavWorkspace />
                  <NavTeams />
               </>
            )}
         </SidebarContent>
         <SidebarFooter className="border-t border-sidebar-border pt-2">
            <div className="w-full flex items-center justify-between px-2">
               <HelpButton />
               <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                  <Link
                     href="https://github.com/pied-piper/scaler-hackathon"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <RiGithubLine className="h-4 w-4" />
                  </Link>
               </Button>
            </div>
         </SidebarFooter>
      </Sidebar>
   );
}

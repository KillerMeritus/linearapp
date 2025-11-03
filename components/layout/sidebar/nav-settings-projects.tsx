'use client';

import Link from 'next/link';
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import { settingsProjectsItems } from '@/data/side-bar-nav';
import { usePathname } from 'next/navigation';

export function NavSettingsProjects() {
   const pathname = usePathname();

   return (
      <SidebarGroup>
         <SidebarGroupLabel>Projects</SidebarGroupLabel>
         <SidebarMenu>
            {settingsProjectsItems.map((item) => {
               const isActive = pathname === item.url;
               return (
                  <SidebarMenuItem key={item.name}>
                     <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={item.url}>
                           <item.icon className="size-4" />
                           <span>{item.name}</span>
                        </Link>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
               );
            })}
         </SidebarMenu>
      </SidebarGroup>
   );
}

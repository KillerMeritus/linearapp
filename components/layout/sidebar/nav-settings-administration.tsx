'use client';

import Link from 'next/link';
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import { settingsAdministrationItems } from '@/data/side-bar-nav';
import { usePathname } from 'next/navigation';

export function NavSettingsAdministration() {
   const pathname = usePathname();

   return (
      <SidebarGroup>
         <SidebarGroupLabel>Administration</SidebarGroupLabel>
         <SidebarMenu>
            {settingsAdministrationItems.map((item) => {
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

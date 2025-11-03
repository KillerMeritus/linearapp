'use client';

import Link from 'next/link';
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import { settingsFeaturesItems } from '@/data/side-bar-nav';
import { usePathname } from 'next/navigation';

export function NavSettingsFeatures() {
   const pathname = usePathname();

   return (
      <SidebarGroup>
         <SidebarGroupLabel>Features</SidebarGroupLabel>
         <SidebarMenu>
            {settingsFeaturesItems.map((item) => {
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

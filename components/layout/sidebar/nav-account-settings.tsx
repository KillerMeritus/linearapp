'use client';

import Link from 'next/link';
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import { accountSettingsItems } from '@/data/side-bar-nav';
import { usePathname } from 'next/navigation';

export function NavAccountSettings() {
   const pathname = usePathname();

   return (
      <SidebarGroup>
         <SidebarGroupLabel>Account</SidebarGroupLabel>
         <SidebarMenu>
            {accountSettingsItems.map((item) => {
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


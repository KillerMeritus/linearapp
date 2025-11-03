'use client';

import {
   SidebarGroup,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { InboxIcon, MyIssuesIcon } from './icons';

const inboxItems = [
   {
      name: 'Inbox',
      url: '/piedpiper/inbox',
      icon: InboxIcon,
   },
   {
      name: 'My issues',
      url: '#',
      icon: MyIssuesIcon,
   },
];

export function NavInbox() {
   const pathname = usePathname();

   return (
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
         <SidebarMenu className="gap-0.5">
            {inboxItems.map((item) => {
               const isActive = pathname === item.url || (item.url === '/piedpiper/inbox' && pathname.includes('/inbox'));
               const Icon = item.icon;
               return (
                  <SidebarMenuItem key={item.name}>
                     <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={cn(
                           "h-7 px-2 gap-1.5",
                           isActive
                              ? "bg-sidebar-accent text-sidebar-accent-foreground"
                              : "hover:bg-sidebar-accent/50"
                        )}
                     >
                        <Link href={item.url}>
                           <Icon className="text-muted-foreground/70" />
                           <span className="text-[13px] font-normal">{item.name}</span>
                        </Link>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
               );
            })}
         </SidebarMenu>
      </SidebarGroup>
   );
}

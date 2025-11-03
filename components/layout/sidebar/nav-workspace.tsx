'use client';

import { LayoutList, MoreHorizontal, Box } from 'lucide-react';
import { RiArrowDropRightFill } from '@remixicon/react';
import { useState } from 'react';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { workspaceItems } from '@/data/side-bar-nav';
import { RiPresentationLine } from '@remixicon/react';
import { ViewsIcon } from './icons';

// Custom workspace items with Linear icons
const customWorkspaceItems = [
   {
      name: 'Projects',
      url: '/piedpiper/projects',
      icon: Box,
   },
   {
      name: 'Views',
      url: '/piedpiper/views',
      icon: ViewsIcon,
   },
];

export function NavWorkspace() {
   const [isOpen, setIsOpen] = useState(true);
   // Show Projects and Views directly, everything else in More
   const visibleItems = customWorkspaceItems;
   const moreItems = workspaceItems.filter(item => item.name !== 'Projects' && item.name !== 'Views');

   return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
         <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <CollapsibleTrigger className="w-full">
               <SidebarGroupLabel className="text-[13px] font-semibold text-muted-foreground px-2 mb-1 flex items-center gap-1 hover:bg-sidebar-accent/50 rounded-md py-1 cursor-pointer">
                  <span>Workspace</span>
                  <RiArrowDropRightFill className="h-5 w-5 transition-transform duration-150" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
               </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
               <SidebarMenu className="gap-0.5">
                  {visibleItems.map((item) => {
                     const Icon = item.icon;
                     return (
                        <SidebarMenuItem key={item.name}>
                           <SidebarMenuButton asChild className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                              <Link href={item.url}>
                                 <Icon className="h-4 w-4 text-muted-foreground/70" />
                                 <span className="text-[13px] font-normal">{item.name}</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     );
                  })}
                  <SidebarMenuItem>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <SidebarMenuButton asChild className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                              <span>
                                 <MoreHorizontal className="h-4 w-4 text-muted-foreground/70" />
                                 <span className="text-[13px] font-normal">More</span>
                              </span>
                           </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 rounded-lg" side="bottom" align="start">
                           {moreItems.map((item) => (
                              <DropdownMenuItem key={item.name} asChild>
                                 <Link href={item.url}>
                                    <item.icon className="text-muted-foreground h-4 w-4" />
                                    <span>{item.name}</span>
                                 </Link>
                              </DropdownMenuItem>
                           ))}
                           <DropdownMenuSeparator />
                           <DropdownMenuItem>
                              <RiPresentationLine className="text-muted-foreground h-4 w-4" />
                              <span>Initiatives</span>
                           </DropdownMenuItem>
                           <DropdownMenuSeparator />
                           <DropdownMenuItem>
                              <LayoutList className="text-muted-foreground h-4 w-4" />
                              <span>Customize sidebar</span>
                           </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </SidebarMenuItem>
               </SidebarMenu>
            </CollapsibleContent>
         </SidebarGroup>
      </Collapsible>
   );
}

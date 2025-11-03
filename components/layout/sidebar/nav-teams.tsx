'use client';

import {
   Archive,
   Bell,
   Box,
   ChevronRight,
   CopyMinus,
   Layers,
   Link as LinkIcon,
   MoreHorizontal,
   Settings,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuAction,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSub,
   SidebarMenuSubButton,
   SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { teams } from '@/data/teams';
import { RiDonutChartFill } from '@remixicon/react';

export function NavTeams() {
   const joinedTeams = teams.filter((t) => t.joined);
   const [cyclesOpen, setCyclesOpen] = useState<{ [key: string]: boolean }>({});

   return (
      <SidebarGroup>
         <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground px-2 mb-1">
            Your teams
         </SidebarGroupLabel>
         <SidebarMenu className="gap-0.5">
            {joinedTeams.map((item, index) => (
               <Collapsible
                  key={item.name}
                  asChild
                  defaultOpen={index === 0}
                  className="group/collapsible"
               >
                  <SidebarMenuItem>
                     <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.name} className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                           <div className="inline-flex size-4 items-center justify-center shrink-0">
                              <div className="text-xs leading-none">{item.icon}</div>
                           </div>
                           <span className="text-[13px] font-normal leading-none">{item.name}</span>
                           <ChevronRight className="h-3 w-3 ml-auto shrink-0 text-muted-foreground/50 transition-transform duration-150 group-data-[state=open]/collapsible:rotate-90" />
                           <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                 <SidebarMenuAction asChild showOnHover className="h-5 w-5">
                                    <div>
                                       <MoreHorizontal className="h-3.5 w-3.5" />
                                       <span className="sr-only">More</span>
                                    </div>
                                 </SidebarMenuAction>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                 className="w-48 rounded-lg"
                                 side="right"
                                 align="start"
                              >
                                 <DropdownMenuItem>
                                    <Settings className="size-4" />
                                    <span>Team settings</span>
                                 </DropdownMenuItem>
                                 <DropdownMenuItem>
                                    <LinkIcon className="size-4" />
                                    <span>Copy link</span>
                                 </DropdownMenuItem>
                                 <DropdownMenuItem>
                                    <Archive className="size-4" />
                                    <span>Open archive</span>
                                 </DropdownMenuItem>
                                 <DropdownMenuSeparator />
                                 <DropdownMenuItem>
                                    <Bell className="size-4" />
                                    <span>Subscribe</span>
                                 </DropdownMenuItem>
                                 <DropdownMenuSeparator />
                                 <DropdownMenuItem>
                                    <span>Leave team...</span>
                                 </DropdownMenuItem>
                              </DropdownMenuContent>
                           </DropdownMenu>
                        </SidebarMenuButton>
                     </CollapsibleTrigger>
                     <CollapsibleContent className="pb-0">
                        <SidebarMenuSub className="gap-0 border-l-0 ml-3 pl-0">
                           <SidebarMenuSubItem>
                              <SidebarMenuSubButton asChild className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                                 <Link href={`/piedpiper/team/${item.id}/all`}>
                                    <CopyMinus size={14} className="text-muted-foreground/70" />
                                    <span className="text-[13px] font-normal">Issues</span>
                                 </Link>
                              </SidebarMenuSubButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <Collapsible
                                 open={cyclesOpen[item.id]}
                                 onOpenChange={(open) => setCyclesOpen({ ...cyclesOpen, [item.id]: open })}
                              >
                                 <CollapsibleTrigger asChild>
                                    <SidebarMenuSubButton className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                                       <RiDonutChartFill size={14} className="text-muted-foreground/70" />
                                       <span className="text-[13px] font-normal">Cycles</span>
                                       <ChevronRight className="h-3 w-3 ml-auto shrink-0 text-muted-foreground/50 transition-transform duration-150 data-[state=open]:rotate-90" />
                                    </SidebarMenuSubButton>
                                 </CollapsibleTrigger>
                                 <CollapsibleContent className="pb-0">
                                    <SidebarMenuSub className="gap-0 border-l-0 ml-5 pl-0">
                                       <SidebarMenuSubItem>
                                          <SidebarMenuSubButton asChild className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                                             <Link href={`/piedpiper/team/${item.id}/cycles/upcoming`}>
                                                <span className="text-[13px] font-normal">Upcoming</span>
                                             </Link>
                                          </SidebarMenuSubButton>
                                       </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                 </CollapsibleContent>
                              </Collapsible>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuSubButton asChild className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                                 <Link href="/piedpiper/projects">
                                    <Box size={14} className="text-muted-foreground/70" />
                                    <span className="text-[13px] font-normal">Projects</span>
                                 </Link>
                              </SidebarMenuSubButton>
                           </SidebarMenuSubItem>
                           <SidebarMenuSubItem>
                              <SidebarMenuSubButton asChild className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                                 <Link href="#">
                                    <Layers size={14} className="text-muted-foreground/70" />
                                    <span className="text-[13px] font-normal">Views</span>
                                 </Link>
                              </SidebarMenuSubButton>
                           </SidebarMenuSubItem>
                        </SidebarMenuSub>
                     </CollapsibleContent>
                  </SidebarMenuItem>
               </Collapsible>
            ))}
         </SidebarMenu>
      </SidebarGroup>
   );
}

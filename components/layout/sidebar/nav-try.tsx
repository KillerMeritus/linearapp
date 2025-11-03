'use client';

import { Plus, Upload } from 'lucide-react';
import { useState } from 'react';

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
import { RiArrowDropRightFill } from '@remixicon/react';

export function NavTry() {
   const [isOpen, setIsOpen] = useState(true);

   return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
         <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <CollapsibleTrigger className="w-full">
               <SidebarGroupLabel className="text-[13px] font-semibold text-muted-foreground px-2 mb-1 flex items-center gap-1 hover:bg-sidebar-accent/50 rounded-md py-1 cursor-pointer">
                  <span>Try</span>
                  <RiArrowDropRightFill className="h-5 w-5 transition-transform duration-150" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
               </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
               <SidebarMenu className="gap-0.5">
                  <SidebarMenuItem>
                     <SidebarMenuButton asChild className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                        <button>
                           <Upload className="h-4 w-4 text-muted-foreground/70" />
                           <span className="text-[13px] font-normal">Import issues</span>
                        </button>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                     <SidebarMenuButton asChild className="h-7 px-2 gap-1.5 hover:bg-sidebar-accent/50">
                        <button>
                           <Plus className="h-4 w-4 text-muted-foreground/70" />
                           <span className="text-[13px] font-normal">Invite people</span>
                        </button>
                     </SidebarMenuButton>
                  </SidebarMenuItem>
               </SidebarMenu>
            </CollapsibleContent>
         </SidebarGroup>
      </Collapsible>
   );
}

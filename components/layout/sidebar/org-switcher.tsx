'use client';

import * as React from 'react';
import { ChevronDown, Search } from 'lucide-react';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuPortal,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { CreateNewIssue } from './create-new-issue';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export function OrgSwitcher() {
   const params = useParams();
   const orgId = params.orgId as string;
   const { signOut } = useAuth();
   const router = useRouter();

   const handleLogout = () => {
      signOut();
      router.push('/login');
   };

   return (
      <SidebarMenu>
         <SidebarMenuItem>
            <DropdownMenu>
               <div className="w-full flex gap-1 items-center pt-2 px-2">
                  <DropdownMenuTrigger asChild>
                     <SidebarMenuButton
                        size="lg"
                        className="h-8 p-1 flex-1 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                     >
                        <div className="flex aspect-square size-6 items-center justify-center rounded-full bg-[#00C853] text-white font-semibold text-xs">
                           HA
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                           <span className="truncate font-semibold">Hackthon-Li...</span>
                        </div>
                        <ChevronDown className="ml-auto h-4 w-4" />
                     </SidebarMenuButton>
                  </DropdownMenuTrigger>

                  <Button
                     variant="ghost"
                     size="icon"
                     asChild
                     className="h-8 w-8 shrink-0 group-data-[collapsible=icon]:hidden"
                  >
                     <Link href={`/${orgId}/search`}>
                        <Search className="h-4 w-4" />
                     </Link>
                  </Button>

                  <CreateNewIssue />
               </div>
               <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-60 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
               >
                  <DropdownMenuGroup>
                     <DropdownMenuItem asChild>
                        <Link href="/piedpiper/settings">
                           Settings
                           <DropdownMenuShortcut>G then S</DropdownMenuShortcut>
                        </Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem>Invite and manage members</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                     <DropdownMenuItem>Download desktop app</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                     <DropdownMenuSubTrigger>Switch Workspace</DropdownMenuSubTrigger>
                     <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                           <DropdownMenuLabel>leonelngoya@gmail.com</DropdownMenuLabel>
                           <DropdownMenuSeparator />
                           <DropdownMenuItem>
                              <div className="flex aspect-square size-6 items-center justify-center rounded bg-orange-500 text-sidebar-primary-foreground">
                                 LN
                              </div>
                              piedpiper
                           </DropdownMenuItem>
                           <DropdownMenuSeparator />
                           <DropdownMenuItem>Create or join workspace</DropdownMenuItem>
                           <DropdownMenuItem>Add an account</DropdownMenuItem>
                        </DropdownMenuSubContent>
                     </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem onClick={handleLogout}>
                     Log out
                     <DropdownMenuShortcut>⌥⇧Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </SidebarMenuItem>
      </SidebarMenu>
   );
}

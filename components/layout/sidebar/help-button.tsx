'use client';

import * as React from 'react';
import { ExternalLink, HelpCircle, Keyboard, Search } from 'lucide-react';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export function HelpButton() {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
               <HelpCircle className="size-4" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="w-60">
            <div className="p-2">
               <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search for help..." className="pl-8" />
               </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Shortcuts</DropdownMenuLabel>
            <DropdownMenuItem>
               <Keyboard className="mr-2 h-4 w-4" />
               <span>Keyboard shortcuts</span>
               <span className="ml-auto text-xs text-muted-foreground">⌘/</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Team Pied Piper</DropdownMenuLabel>
            <DropdownMenuItem asChild>
               <Link href="https://github.com/pied-piper/scaler-hackathon" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <span>View Project</span>
                  <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
               </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Resources</DropdownMenuLabel>
            <DropdownMenuItem asChild>
               <Link
                  href="https://github.com/pied-piper/scaler-hackathon/issues"
                  target="_blank"
                  className="flex items-center"
               >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                     <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Report Issues</span>
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
               <Link
                  href="https://github.com/pied-piper/scaler-hackathon"
                  target="_blank"
                  className="flex items-center"
               >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                     <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Documentation</span>
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
               <Link
                  href="https://github.com/pied-piper/scaler-hackathon"
                  target="_blank"
                  className="flex items-center"
               >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                     <div className="h-1.5 w-1.5 rounded-full bg-transparent"></div>
                  </div>
                  <span>GitHub Repository</span>
                  <ExternalLink className="ml-2 h-3 w-3 text-muted-foreground" />
               </Link>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}

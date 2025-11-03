'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import Notifications from './notifications';

export default function HeaderNav() {
   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <SidebarTrigger className="" />
         <Notifications />
      </div>
   );
}

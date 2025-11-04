'use client';

import { useViewsStore, SavedView } from '@/store/views-store';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Star, StarOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useMemo, useState } from 'react';

export function SavedViewsMenu() {
   const { views, favouriteIds, recentIds } = useViewsStore();
   const selectView = useViewsStore((s) => s.selectView);
   const saveView = useViewsStore((s) => s.saveView);
   const updateView = useViewsStore((s) => s.updateView);
   const deleteView = useViewsStore((s) => s.deleteView);
   const toggleFavourite = useViewsStore((s) => s.toggleFavourite);
   const currentConfig = useViewsStore((s) => s.currentConfig);

   const [name, setName] = useState('New view');

   const favSet = useMemo(() => new Set(favouriteIds), [favouriteIds]);
   const recent = useMemo(() => recentIds.map((id) => views.find((v) => v.id === id)).filter(Boolean) as SavedView[], [recentIds, views]);

   return (
      <div className="flex items-center gap-2">
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button size="xs" variant="secondary">Views</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72">
               <DropdownMenuLabel>Favourites</DropdownMenuLabel>
               {views.filter((v) => favSet.has(v.id)).map((v) => (
                  <DropdownMenuItem key={v.id} onClick={() => selectView(v.id)}>{v.name}</DropdownMenuItem>
               ))}
               <DropdownMenuSeparator />
               <DropdownMenuLabel>Recent</DropdownMenuLabel>
               {recent.map((v) => (
                  <DropdownMenuItem key={v.id} onClick={() => selectView(v.id)}>{v.name}</DropdownMenuItem>
               ))}
               <DropdownMenuSeparator />
               <DropdownMenuLabel>All</DropdownMenuLabel>
               {views.map((v) => (
                  <DropdownMenuItem key={v.id} onClick={() => selectView(v.id)}>{v.name}</DropdownMenuItem>
               ))}
            </DropdownMenuContent>
         </DropdownMenu>

         <div className="flex items-center gap-2">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="View name" className="h-8 w-40" />
            <Button size="xs" variant="secondary" onClick={() => saveView({ name: name.trim() || 'New view', scope: 'personal', config: currentConfig })}>Save</Button>
         </div>

         {views[0] && (
            <>
               <Button size="xs" variant="ghost" onClick={() => updateView(views[0].id, { config: currentConfig })}>Update last</Button>
               <Button size="xs" variant="ghost" onClick={() => deleteView(views[0].id)}>Delete last</Button>
               <Button size="xs" variant="ghost" onClick={() => toggleFavourite(views[0].id)}>
                  {favSet.has(views[0].id) ? <Star className="size-4" /> : <StarOff className="size-4" />}
               </Button>
            </>
         )}
      </div>
   );
}



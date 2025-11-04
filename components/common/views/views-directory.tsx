'use client';

import { useViewsStore, SavedView } from '@/store/views-store';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { teams } from '@/data/teams';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ViewsDisplayMenu } from './display-menu';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
   return (
      <div className="w-full">
         <div className="px-6 py-2 text-sm text-muted-foreground flex items-center gap-2">
            <span>{title}</span>
         </div>
         <div className="divide-y">
            {children}
         </div>
      </div>
   );
}

function Row({ view, onClick }: { view: SavedView; onClick: () => void }) {
   return (
      <div className="px-6 h-10 flex items-center hover:bg-sidebar/50 cursor-pointer" onClick={onClick}>
         <div className="flex-1 flex items-center gap-2">
            <span className="text-sm">{view.name}</span>
         </div>
         <div className="text-xs text-muted-foreground">
            {new Date(view.createdAt).toLocaleString(undefined, { month: 'short', day: 'numeric' })}
         </div>
      </div>
   );
}

export default function ViewsDirectory() {
   const { orgId } = useParams<{ orgId: string }>();
   const router = useRouter();
   const { views } = useViewsStore();
   const saveView = useViewsStore((s) => s.saveView);

   const [open, setOpen] = useState(false);
   const [name, setName] = useState('New view');
   const [scope, setScope] = useState<'personal' | 'shared' | 'team'>('personal');
   const [teamId, setTeamId] = useState<string | undefined>(undefined);
   const [tab, setTab] = useState<'views' | 'issues' | 'projects'>('issues');
   const [kind, setKind] = useState<'issues' | 'projects'>('issues');

   const personal = useMemo(() => views.filter((v) => v.scope === 'personal' && (v.kind ?? 'issues') === (tab === 'projects' ? 'projects' : 'issues')), [views, tab]);
   const shared = useMemo(() => views.filter((v) => v.scope === 'shared' && (v.kind ?? 'issues') === (tab === 'projects' ? 'projects' : 'issues')), [views, tab]);
   const teamViewsByTeam = useMemo(() => {
      const map = new Map<string, SavedView[]>();
      views.filter((v) => v.scope === 'team' && v.teamId && (v.kind ?? 'issues') === (tab === 'projects' ? 'projects' : 'issues')).forEach((v) => {
         const tid = v.teamId as string;
         if (!map.has(tid)) map.set(tid, []);
         map.get(tid)!.push(v);
      });
      return map;
   }, [views]);

   return (
      <div className="w-full">
         <div className="w-full flex items-center justify-between px-6 py-2 border-b bg-container/60">
            <Tabs value={tab} onValueChange={(v) => setTab(v as any)}>
               <TabsList>
                  <TabsTrigger value="issues">Issues</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
               </TabsList>
            </Tabs>
            <div className="flex items-center gap-2">
               <Popover>
                  <PopoverTrigger asChild>
                     <Button size="xs" variant="secondary" className="gap-1">
                        <SlidersHorizontal className="size-4" /> Display
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" align="end" sideOffset={8} className="p-0 w-[360px] z-[100]">
                     <ViewsDisplayMenu />
                  </PopoverContent>
               </Popover>
               <Button size="xs" className="gap-1" onClick={() => setOpen(true)}>
                  <Plus className="size-4" /> New view
               </Button>
            </div>
         </div>

         <Section title="Personal views · Only visible to you">
            {personal.map((v) => (
               <Row key={v.id} view={v} onClick={() => router.push(`/${orgId}/views/${v.id}`)} />
            ))}
         </Section>

         {shared.length > 0 && (
            <Section title="Shared views">
               {shared.map((v) => (
                  <Row key={v.id} view={v} onClick={() => router.push(`/${orgId}/views/${v.id}`)} />
               ))}
            </Section>
         )}

         {[...teamViewsByTeam.entries()].map(([tid, list]) => {
            const team = teams.find((t) => t.id === tid);
            if (!team) return null;
            return (
               <Section key={tid} title={`Team views · ${team.name}`}>
                  {list.map((v) => (
                     <Row key={v.id} view={v} onClick={() => router.push(`/${orgId}/views/${v.id}`)} />
                  ))}
               </Section>
            );
         })}

         <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Create view</DialogTitle>
               </DialogHeader>
               <div className="space-y-3 py-2">
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="View name" />
                  <Select value={scope} onValueChange={(v) => setScope(v as any)}>
                     <SelectTrigger><SelectValue placeholder="Scope" /></SelectTrigger>
                     <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="shared">Shared</SelectItem>
                        <SelectItem value="team">Team</SelectItem>
                     </SelectContent>
                  </Select>
                  <Select value={kind} onValueChange={(v) => setKind(v as any)}>
                     <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
                     <SelectContent>
                        <SelectItem value="issues">Issues</SelectItem>
                        <SelectItem value="projects">Projects</SelectItem>
                     </SelectContent>
                  </Select>
                  {scope === 'team' && (
                     <Select value={teamId} onValueChange={(v) => setTeamId(v)}>
                        <SelectTrigger><SelectValue placeholder="Select team" /></SelectTrigger>
                        <SelectContent>
                           {teams.map((t) => (
                              <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  )}
               </div>
               <DialogFooter>
                  <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
                  <Button size="sm" onClick={() => {
                     const payload: any = { name: name.trim() || 'New view', scope, kind, config: useViewsStore.getState().currentConfig };
                     if (scope === 'team') payload.teamId = teamId;
                     const id = saveView(payload);
                     setOpen(false);
                     router.push(`/${orgId}/views/${id}`);
                  }}>Create</Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
}



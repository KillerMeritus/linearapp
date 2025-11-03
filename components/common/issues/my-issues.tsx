'use client';

import { status } from '@/data/status';
import { useIssuesStore } from '@/store/issues-store';
import { useCurrentUserStore } from '@/store/current-user-store';
import { useSearchStore } from '@/store/search-store';
import { useViewStore } from '@/store/view-store';
import { useFilterStore } from '@/store/filter-store';
import { FC, useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GroupIssues } from './group-issues';
import { SearchIssues } from './search-issues';
import { CustomDragLayer } from './issue-grid';
import { cn } from '@/lib/utils';
import { Issue } from '@/data/issues';

export default function MyIssues() {
   const { isSearchOpen, searchQuery } = useSearchStore();
   const { viewType } = useViewStore();
   const { hasActiveFilters } = useFilterStore();

   const isSearching = isSearchOpen && searchQuery.trim() !== '';
   const isViewTypeGrid = viewType === 'grid';
   const isFiltering = hasActiveFilters();

   return (
      <div className={cn('w-full h-full', isViewTypeGrid && 'overflow-x-auto')}>
         {isSearching ? (
            <SearchIssuesView />
         ) : isFiltering ? (
            <FilteredMyIssuesView isViewTypeGrid={isViewTypeGrid} />
         ) : (
            <MyIssuesListView isViewTypeGrid={isViewTypeGrid} />
         )}
      </div>
   );
}

const SearchIssuesView = () => (
   <div className="px-6 mb-6">
      <SearchIssues />
   </div>
);

const FilteredMyIssuesView: FC<{
   isViewTypeGrid: boolean;
}> = ({ isViewTypeGrid = false }) => {
   const { filters } = useFilterStore();
   const { filterIssues } = useIssuesStore();
   const { currentUser } = useCurrentUserStore();

   // Apply filters and then filter by current user
   const filteredMyIssues = useMemo(() => {
      const filteredIssues = filterIssues(filters);
      return filteredIssues.filter((issue) => issue.assignee?.id === currentUser.id);
   }, [filterIssues, filters, currentUser.id]);

   // Group filtered issues by status
   const filteredIssuesByStatus = useMemo(() => {
      const result: Record<string, Issue[]> = {};

      status.forEach((statusItem) => {
         result[statusItem.id] = filteredMyIssues.filter(
            (issue) => issue.status.id === statusItem.id
         );
      });

      return result;
   }, [filteredMyIssues]);

   return (
      <DndProvider backend={HTML5Backend}>
         <CustomDragLayer />
         <div className={cn(isViewTypeGrid && 'flex h-full gap-3 px-2 py-2 min-w-max')}>
            {status.map((statusItem) => (
               <GroupIssues
                  key={statusItem.id}
                  status={statusItem}
                  issues={filteredIssuesByStatus[statusItem.id] || []}
                  count={filteredIssuesByStatus[statusItem.id]?.length || 0}
               />
            ))}
         </div>
      </DndProvider>
   );
};

const MyIssuesListView: FC<{
   isViewTypeGrid: boolean;
}> = ({ isViewTypeGrid = false }) => {
   const { issues } = useIssuesStore();
   const { currentUser } = useCurrentUserStore();

   // Filter all issues by current user and group by status
   const myIssuesByStatus = useMemo(() => {
      const myIssues = issues.filter((issue) => issue.assignee?.id === currentUser.id);
      const result: Record<string, Issue[]> = {};

      status.forEach((statusItem) => {
         result[statusItem.id] = myIssues.filter((issue) => issue.status.id === statusItem.id);
      });

      return result;
   }, [issues, currentUser.id]);

   return (
      <DndProvider backend={HTML5Backend}>
         <CustomDragLayer />
         <div className={cn(isViewTypeGrid && 'flex h-full gap-3 px-2 py-2 min-w-max')}>
            {status.map((statusItem) => (
               <GroupIssues
                  key={statusItem.id}
                  status={statusItem}
                  issues={myIssuesByStatus[statusItem.id] || []}
                  count={myIssuesByStatus[statusItem.id]?.length || 0}
               />
            ))}
         </div>
      </DndProvider>
   );
};

'use client';

import { useSearchStore } from '@/store/search-store';
import { useIssuesStore } from '@/store/issues-store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon, X, ListFilter, SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { IssueLine } from '@/components/common/issues/issue-line';
import { cn } from '@/lib/utils';
import { SidebarTrigger } from '@/components/ui/sidebar';

type TabType = 'all' | 'issues' | 'projects' | 'documents';

export default function SearchView() {
   const { searchQuery, setSearchQuery, recentSearches, addRecentSearch, clearRecentSearches } =
      useSearchStore();
   const { searchIssues } = useIssuesStore();
   const [activeTab, setActiveTab] = useState<TabType>('all');
   const [searchResults, setSearchResults] = useState<
      ReturnType<typeof useIssuesStore.getState>['issues']
   >([]);

   useEffect(() => {
      if (searchQuery.trim() === '') {
         setSearchResults([]);
         return;
      }

      const results = searchIssues(searchQuery);
      setSearchResults(results);
   }, [searchQuery, searchIssues]);

   const handleSearch = (query: string) => {
      setSearchQuery(query);
      if (query.trim()) {
         addRecentSearch(query);
      }
   };

   const tabs: { id: TabType; label: string }[] = [
      { id: 'all', label: 'All' },
      { id: 'issues', label: 'Issues' },
      { id: 'projects', label: 'Projects' },
      { id: 'documents', label: 'Documents' },
   ];

   return (
      <div className="flex flex-col h-full bg-container">
         {/* Top Header with Sidebar Trigger and Search Icon */}
         <div className="w-full flex items-center gap-3 border-b py-2.5 px-6 h-[52px] bg-container">
            <SidebarTrigger className="rounded-md" />
            <SearchIcon className="h-5 w-5 text-muted-foreground shrink-0" />
            <Input
               autoFocus
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               placeholder="Search by describing your issue..."
               className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base h-auto p-0 bg-transparent"
            />
         </div>

         {/* Tabs and Filter/Display Section */}
         <div className="border-b bg-container">
            <div className="flex items-center justify-between gap-1 px-6 py-2">
               <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 border rounded-md p-0.5">
                     {tabs.map((tab) => (
                        <Button
                           key={tab.id}
                           variant="ghost"
                           size="sm"
                           onClick={() => setActiveTab(tab.id)}
                           className={cn(
                              'h-7 px-3 text-sm rounded-md',
                              activeTab === tab.id
                                 ? 'bg-accent text-accent-foreground'
                                 : 'text-muted-foreground hover:text-foreground'
                           )}
                        >
                           {tab.label}
                        </Button>
                     ))}
                  </div>
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-sm">
                     <ListFilter className="h-4 w-4 mr-1.5" />
                     Filter
                  </Button>
               </div>
               <Button variant="secondary" size="sm" className="h-7 px-2 text-sm">
                  <SlidersHorizontal className="h-4 w-4 mr-1.5" />
                  Display
               </Button>
            </div>
         </div>

         {/* Content Section */}
         <div className="flex-1 overflow-y-auto">
            {searchQuery.trim() === '' ? (
               <div className="p-6">
                  {recentSearches.length > 0 && (
                     <>
                        <h3 className="text-sm font-medium text-muted-foreground mb-3">
                           Recent searches
                        </h3>
                        <div className="space-y-1">
                           {recentSearches.map((search, index) => (
                              <button
                                 key={index}
                                 onClick={() => handleSearch(search)}
                                 className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors text-left"
                              >
                                 <SearchIcon className="h-4 w-4 text-muted-foreground" />
                                 <span>{search}</span>
                              </button>
                           ))}
                           <button
                              onClick={clearRecentSearches}
                              className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors text-left text-muted-foreground"
                           >
                              <X className="h-4 w-4" />
                              <span>Clear History</span>
                           </button>
                        </div>
                     </>
                  )}
               </div>
            ) : (
               <div>
                  {searchResults.length > 0 ? (
                     <div className="divide-y">
                        {searchResults.map((issue) => (
                           <IssueLine key={issue.id} issue={issue} layoutId={false} />
                        ))}
                     </div>
                  ) : (
                     <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="text-muted-foreground mb-2">
                           No results found for &quot;{searchQuery}&quot;
                        </div>
                        <div className="text-sm text-muted-foreground">
                           Try searching for something else
                        </div>
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
}

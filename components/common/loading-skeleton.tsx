import { Skeleton } from '@/components/ui/skeleton';

export function IssueListSkeleton() {
   return (
      <div className="w-full space-y-0">
         {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="flex items-center justify-start h-11 px-6 gap-2">
               <Skeleton className="h-4 w-4 rounded" />
               <Skeleton className="h-4 w-16" />
               <Skeleton className="h-4 w-4 rounded-full" />
               <Skeleton className="h-4 flex-1 max-w-md" />
               <div className="flex items-center gap-2 ml-auto">
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-6 w-6 rounded-full" />
               </div>
            </div>
         ))}
      </div>
   );
}

export function ProjectCardSkeleton() {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
         {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-4 space-y-3">
               <div className="flex items-start justify-between">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-5 rounded" />
               </div>
               <Skeleton className="h-4 w-full" />
               <Skeleton className="h-4 w-3/4" />
               <div className="flex items-center gap-2 pt-2">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16 ml-auto" />
               </div>
            </div>
         ))}
      </div>
   );
}

export function TeamListSkeleton() {
   return (
      <div className="space-y-2 p-6">
         {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
               <Skeleton className="h-10 w-10 rounded-full" />
               <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-48" />
               </div>
               <Skeleton className="h-4 w-24" />
               <Skeleton className="h-4 w-16" />
            </div>
         ))}
      </div>
   );
}

export function InboxSkeleton() {
   return (
      <div className="w-full space-y-0">
         {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-start gap-4 p-4 border-b">
               <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
               <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-3 w-full" />
               </div>
               <Skeleton className="h-4 w-16" />
            </div>
         ))}
      </div>
   );
}

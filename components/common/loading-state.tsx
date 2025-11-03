'use client';

import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingStateProps {
   message?: string;
   className?: string;
   size?: 'sm' | 'md' | 'lg';
}

export function LoadingState({
   message = 'Loading...',
   className,
   size = 'md',
}: LoadingStateProps) {
   const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
   };

   return (
      <div
         className={cn(
            'flex flex-col items-center justify-center p-6 text-muted-foreground',
            className
         )}
      >
         <Loader2 className={cn('animate-spin mb-2', sizeClasses[size])} />
         <p className="text-sm">{message}</p>
      </div>
   );
}

interface LoadingOverlayProps {
   isLoading: boolean;
   children: React.ReactNode;
   message?: string;
}

export function LoadingOverlay({ isLoading, children, message = 'Loading...' }: LoadingOverlayProps) {
   if (!isLoading) return <>{children}</>;

   return (
      <div className="relative">
         <div className="opacity-50 pointer-events-none">{children}</div>
         <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
            <LoadingState message={message} />
         </div>
      </div>
   );
}


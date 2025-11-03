'use client';

import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorFallbackProps {
   error: Error;
   resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
   return (
      <div className="flex items-center justify-center min-h-[400px] p-6">
         <Card className="w-full max-w-md">
            <CardHeader>
               <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <CardTitle>Something went wrong</CardTitle>
               </div>
               <CardDescription>
                  An unexpected error occurred. Please try again or refresh the page.
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {process.env.NODE_ENV === 'development' && (
                  <div className="p-3 bg-muted rounded-md">
                     <p className="text-sm font-mono text-muted-foreground">{error.message}</p>
                     {error.stack && (
                        <details className="mt-2">
                           <summary className="text-xs cursor-pointer text-muted-foreground">
                              Stack trace
                           </summary>
                           <pre className="text-xs mt-2 overflow-auto max-h-40">
                              {error.stack}
                           </pre>
                        </details>
                     )}
                  </div>
               )}
               <div className="flex gap-2">
                  <Button onClick={resetErrorBoundary} variant="default">
                     Try Again
                  </Button>
                  <Button onClick={() => window.location.reload()} variant="outline">
                     Refresh Page
                  </Button>
               </div>
            </CardContent>
         </Card>
      </div>
   );
}


'use client';

import React, { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorBoundaryProps {
   children: ReactNode;
   fallback?: ReactNode;
}

interface ErrorBoundaryState {
   hasError: boolean;
   error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false, error: null };
   }

   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      return { hasError: true, error };
   }

   componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      // Log error to console in development
      if (process.env.NODE_ENV === 'development') {
         console.error('ErrorBoundary caught an error:', error, errorInfo);
      }

      // In production, you would send this to an error reporting service
      // e.g., Sentry, LogRocket, etc.
   }

   handleReset = () => {
      this.setState({ hasError: false, error: null });
   };

   render() {
      if (this.state.hasError) {
         if (this.props.fallback) {
            return this.props.fallback;
         }

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
                     {process.env.NODE_ENV === 'development' && this.state.error && (
                        <div className="p-3 bg-muted rounded-md">
                           <p className="text-sm font-mono text-muted-foreground">
                              {this.state.error.message}
                           </p>
                        </div>
                     )}
                     <div className="flex gap-2">
                        <Button onClick={this.handleReset} variant="default">
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

      return this.props.children;
   }
}


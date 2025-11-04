'use client';

import { useMemo } from 'react';
import { useIssuesStore } from '@/store/issues-store';
import { useViewsStore } from '@/store/views-store';
import { IssueLine } from '@/components/common/issues/issue-line';

export default function ViewsList() {
   const issues = useIssuesStore((s) => s.getAllIssues());
   const filterIssues = useViewsStore((s) => s.filterIssues);
   const orderIssues = useViewsStore((s) => s.orderIssues);
   const config = useViewsStore((s) => s.currentConfig);

   const displayed = useMemo(() => orderIssues(filterIssues(issues)), [issues, filterIssues, orderIssues, config]);

   return (
      <div className="w-full">
         {displayed.map((issue) => (
            <IssueLine key={issue.id} issue={issue} />
         ))}
      </div>
   );
}



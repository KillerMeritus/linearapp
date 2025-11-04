"use client";

import MainLayout from '@/components/layout/main-layout';
import Views from '@/components/common/views/views';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useViewsStore } from '@/store/views-store';

export default function ViewDetailPage() {
   const params = useParams<{ viewId: string; orgId: string }>();
   const selectView = useViewsStore((s) => s.selectView);

   useEffect(() => {
      if (params?.viewId) {
         selectView(params.viewId);
      }
   }, [params?.viewId, selectView]);

   return (
      <MainLayout>
         <Views />
      </MainLayout>
   );
}



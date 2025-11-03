import MainLayout from '@/components/layout/main-layout';
import { PreferencesContent } from '@/components/common/settings/preferences-content';
import Header from '@/components/layout/headers/settings/header';

export default function PreferencesPage() {
   return (
      <MainLayout header={<Header />} headersNumber={1}>
         <PreferencesContent />
      </MainLayout>
   );
}


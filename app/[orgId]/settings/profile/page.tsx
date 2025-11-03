import MainLayout from '@/components/layout/main-layout';
import { ProfileContent } from '@/components/common/settings/profile-content';
import Header from '@/components/layout/headers/settings/header';

export default function ProfilePage() {
   return (
      <MainLayout header={<Header />} headersNumber={1}>
         <ProfileContent />
      </MainLayout>
   );
}


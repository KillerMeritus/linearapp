import MainLayout from '@/components/layout/main-layout';
import Header from '@/components/layout/headers/issues/header';
import MyIssues from '@/components/common/issues/my-issues';

export default function MyIssuesPage() {
   return (
      <MainLayout header={<Header />}>
         <MyIssues />
      </MainLayout>
   );
}

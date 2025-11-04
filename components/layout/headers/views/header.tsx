import HeaderNav from '@/components/layout/headers/projects/header-nav';
import HeaderOptions from '@/components/layout/headers/projects/header-options';

export default function Header() {
   return (
      <div className="w-full flex flex-col items-center">
         <HeaderNav />
         <HeaderOptions />
      </div>
   );
}



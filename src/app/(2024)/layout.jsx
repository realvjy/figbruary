import '@/styles/globals/2024.scss'
import PageLayout from '@/components/layout'




export default function Layout({children}){

  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
}
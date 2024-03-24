import { Metadata } from 'next';

import { LoginForm } from './components/LoginForm/LoginForm';
import { LoginHeroSection } from './components/LoginHeroSection/LoginHeroSection';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <main className='flex h-dvh w-dvw items-center justify-center bg-[#F7F8FC]'>
      <div className='grid h-2/3 w-3/4 xl:grid-cols-2 divide-x rounded-xl bg-white shadow-2xl'>
        <LoginForm />
        <LoginHeroSection />
      </div>
    </main>
  );
}

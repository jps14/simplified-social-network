import { Metadata } from 'next';
import { AuthHeroSection } from '../../components/AuthComponents/AuthHeroSection/AuthHeroSection';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

export const metadata: Metadata = {
  title: 'Register',
};

export default function Register() {
  return (
    <main className='flex h-dvh w-dvw items-center justify-center bg-[#F7F8FC]'>
      <div className='grid h-4/5 w-5/6 divide-x rounded-xl bg-white shadow-2xl xl:h-3/4 xl:w-3/4 xl:grid-cols-2'>
        <RegisterForm />
        <AuthHeroSection />
      </div>
    </main>
  );
}

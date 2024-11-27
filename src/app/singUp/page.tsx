import { RegistrationForm } from '@/components/RegistrationForm';
import { Toaster } from '@/components/ui/toaster';

export default function RegistrationPage() {
  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-5'>Register</h1>
      <RegistrationForm />
      <Toaster />
    </div>
  );
}

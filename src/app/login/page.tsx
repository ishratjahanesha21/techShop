import { LoginForm } from '@/components/LoginForm';

export default function Login() {
  return (
    <div className='max-w-md mx-auto mt-10 '>
      <div className='my-40'>
        <h2>Log in</h2>
        <LoginForm />
      </div>
    </div>
  );
}

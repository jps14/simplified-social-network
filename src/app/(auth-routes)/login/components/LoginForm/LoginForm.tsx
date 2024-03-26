'use client';

import { ILoginForm } from '@/ts/interfaces/ILoginForm';
import { Button, Form, Input, message } from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { MdLockOutline, MdOutlineEmail } from 'react-icons/md';

export function LoginForm(): JSX.Element {
  const router = useRouter();

  const onFinish = async (values: ILoginForm) => {
    const loadingMessage = message.loading('Loading...', 0);
    const email = values.email;
    const password = values.password;
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      loadingMessage();
      message.error('Invalid credentials!');
      return;
    }

    loadingMessage();
    message.success('Logged in successfully!');
    router.replace('/private-route');
  };

  return (
    <Form
      className='flex w-full flex-col items-center justify-safe-center overflow-y-auto'
      name='login_form'
      onFinish={onFinish}
      layout='vertical'
    >
      <h1 className='mb-16 text-3xl font-semibold text-gray-800'>Enter Now!</h1>
      <Form.Item
        className='w-1/2'
        name='email'
        label='Email'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<MdOutlineEmail />}
          type='email'
          placeholder='Enter your email'
          size='large'
        />
      </Form.Item>
      <Form.Item
        className='w-1/2'
        name='password'
        label='Password'
        rules={[{ required: true, message: 'Please input your password!' }]}
        hasFeedback
      >
        <Input.Password
          prefix={<MdLockOutline />}
          placeholder='Enter your password'
          size='large'
        />
      </Form.Item>
      <Form.Item className='mt-1 w-1/2'>
        <Button
          type='primary'
          htmlType='submit'
          size='large'
          className='w-full bg-[#60a5fa]'
        >
          Log in
        </Button>
      </Form.Item>
      <p className='text-center'>
        Dont&apos;t have an account?{' '}
        <a href='/register' className='text-blue-500 hover:text-blue-600'>
          Sign-up
        </a>
      </p>
    </Form>
  );
}

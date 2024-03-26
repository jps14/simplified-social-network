'use client';

import { useRouter } from 'next/navigation';

import { Button, Form, Input, message } from 'antd';
import { LuUser2 } from 'react-icons/lu';
import { MdLockOutline, MdOutlineEmail, MdOutlineLock } from 'react-icons/md';

import { registerUserRequest } from '@/app/api/auth/registerUserRequest';
import { IRegisterForm } from '@/ts/interfaces/IRegisterForm';

export function RegisterForm() {
  const router = useRouter();

  async function onFinish(values: IRegisterForm) {
    const loadingMessage = message.loading('Loading...', 0);
    try {
      await registerUserRequest(values);
      loadingMessage();
      message.success('User registered successfully!');
      message.info('Please try to login now!');
      router.replace('/login');
    } catch (error) {
      if (error instanceof Error) {
        loadingMessage();
        message.error(error.message);
      }
    }
  }

  return (
    <Form
      className='justify-safe-center flex w-full flex-col items-center overflow-y-auto'
      name='register_form'
      onFinish={onFinish}
      layout='vertical'
    >
      <h1 className='mb-8 text-3xl font-semibold text-gray-800'>
        Register Now!
      </h1>
      <Form.Item
        className='w-1/2'
        name='name'
        label='Name'
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
          {
            pattern: /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u,
            message: 'Name must be valid!',
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<LuUser2 />}
          type='text'
          placeholder='Enter your name'
          size='large'
        />
      </Form.Item>
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
        rules={[
          { required: true, message: 'Please input your password!' },
          {
            min: 8,
            message: 'Password must be at least 8 characters long',
          },
          {
            max: 20,
            message: 'Password must be at most 20 characters long',
          },
          {
            pattern:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            message:
              'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<MdLockOutline />}
          placeholder='Enter your password'
          size='large'
        />
      </Form.Item>
      <Form.Item
        className='w-1/2'
        name='confirm_password'
        label='Confirm Password'
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Password confirmation is required!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords that you entered do not match!')
              );
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<MdOutlineLock />}
          placeholder='Confirm your password'
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
          Sign Up
        </Button>
      </Form.Item>
      <p className='text-center'>
        Already have an account?{' '}
        <a href='/login' className='text-blue-500 hover:text-blue-600'>
          Sign-in
        </a>
      </p>
    </Form>
  );
}

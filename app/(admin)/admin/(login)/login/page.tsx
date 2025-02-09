"use client";

import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import avatar from '@/public/avatar.png';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

interface ILoginForm {
  userName: string,
  password: string
}

const Login = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ILoginForm>();
    const router = useRouter();

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
      console.log(data)
      router.push('/admin/dashboard')
    }

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block bg-gray-900">
        {/* <Image
          src={avatar}
          alt="Placeholder Image"
          className="object-cover w-full h-full"
          width={100}
          height={100}
        /> */}
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 text-gray-900">
        <div className='mb-12'>
          <Image 
            src={avatar}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <h1 className="text-6xl font-medium mb-8">Login</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          {/* Username Input */}
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="username" className="block text-lg font-medium">
              Username
            </label>
            <Input
              type="text"
              className="border border-gray-300 rounded-md py-6 focus:outline-none"
              autoComplete="off"
              defaultValue=""
              {...register("userName", { required: true })}
            />
            {errors.userName && <p className="error">User Name is required.</p>}
          </div>
          {/* Password Input */}
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="password" className="block text-lg font-medium">
              Password
            </label>
            <Input
              type="password"
              className="border border-gray-300 rounded-md py-6 focus:outline-none"
              autoComplete="off"
              defaultValue=""
              {...register("password", { required: true })}
            />
            {errors.password && <p className="error">Last Name is required.</p>}
          </div>
          <div className='flex justify-between w-full'>
            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-grey-900"
              />
              <label htmlFor="remember" className="text-gray-800 ml-2 font-medium">
                Remember Me
              </label>
            </div>

            {/* Forgot Password Link */}
            <div className="mb-6 text-grey-800 font-medium">
              <Link href={'/login'} className="hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>
          {/* Login Button */}
          <Button type="submit" variant="default" className="text-lg py-7 font-medium">
            Login
          </Button>
        </form>
        {/* Sign up Link */}
        {/* <div className="mt-6 text-blue-500 text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Login
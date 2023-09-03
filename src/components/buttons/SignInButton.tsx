'use client'
import React from 'react'
import { Button } from '../ui/button'
import { signIn } from 'next-auth/react';
import Image from 'next/image';

type Props = {
    text: string;
}

const SignInButton = ({text}: Props) => {
  return (
    <button
              type="button"
              onClick={() => {
                signIn("google").catch(console.error);
              }}
              
            >
              <Image
                src="/google.png"
                alt="google sign"
                width={40}
                height={40}
              />
            </button>
  )
}

export default SignInButton
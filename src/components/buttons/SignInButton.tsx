'use client'
import React from 'react'

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { Button } from '@mui/material';

type Props = {
    text: string;
}

const SignInButton = ({text}: Props) => {
  return (
    <Button variant='outlined'
    className="border-black text-black hover:border-orange-500 hover:bg-orange-500 flex gap-5 items-center w-[320px] "
              type="button"
              onClick={() => {
                signIn("google").catch(console.error);
              }}
              
            >
              {text}
              <Image
                src="/google.png"
                alt="google sign"
                width={20}
                height={20}
              />
            </Button>
  )
}

export default SignInButton
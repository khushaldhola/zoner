"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu';
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs';
import { Logout } from '@mui/icons-material';

const LeftSideBar = () => {


  const [userData, setUserData] = useState({});


  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
      <Link href="/">
        <Image src='/assets/tea.jpg' alt="logo" width={200} height={200} /> 
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={`/profile/${userData._id}/posts`}>
            <Image
              // src={userData?.profilePhoto}
              src='/assets/Andrew.jpg'
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <p className="text-small-bold">
            {userData?.firstName} {userData?.lastName}
          </p>
        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            {/* <p className="text-base-bold">{userData?.posts?.length}</p> */}
            <p className="text-base-bold">69</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.followers?.length}</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.following?.length}</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>

      <hr />
      <Menu />
      <hr />

      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/sign-in"/>
        <p className="text-light-1 text-body-bold">Manage Account</p>
      </div>

      <SignedIn>
        <SignOutButton>
          <div className='flex cursor-pointer gap-4 items-center'>
            <Logout sx={{color: "White", fontSize: "32px"}}/>
            <p className='text-body-bold text-light-1'>Log Out</p>
          </div>
        </SignOutButton>
      </SignedIn>

      </div>
    </div>
  )
}

export default LeftSideBar
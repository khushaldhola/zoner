"use client"
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs';
import { Add, Logout, Person, Search } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const TopBar = () => {

  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className='flex justify-between items-center mt-6'>
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
          onClick={() => router.push(`/search/posts/${search}`)}
        />
      </div>
      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add />
        Create A Post</button>

      <div className="flex gap-4">
        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer items-center md:hidden'>
              <Logout sx={{ color: "White", fontSize: "32px" }} />
              {/* <p className='text-body-bold text-light-1'>Log Out</p> */}
            </div>
          </SignOutButton>
        </SignedIn>

        <Link href={`/profile/khushal/posts`}>
          <Person sx={{ fontSize: "35px", color: "white" }} />
        </Link>
      </div>

      {/* <Link href={`/profile/${userData._id}/posts`}> */}

    </div>
  )
}

export default TopBar
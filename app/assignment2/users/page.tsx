import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <div>List Users
      <ul>
        <li>
          <Link href={"/assignment2/users/1"}>User 1</Link> 
        </li>
        <li>
          <Link href={"/assignment2/users/2"}>User 2</Link> 
        </li>
        <li>
          <Link href={"/assignment2/users/3"}>User 3</Link> 
        </li>
        <li>
          <Link href={"/assignment2/users/4"}>User 4</Link> 
        </li>
        <li>
          <Link href={"/assignment2/users/5"}>User 5</Link> 
        </li>
      </ul>
      <Link href="/assignment2">
      <Button className='cursor-pointer'>Back Home</Button>
      </Link> 
    </div>
  )
}

export default Users
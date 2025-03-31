import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className="text-black">
    <h1>Welcome to Contact page</h1>
    <nav>
      <Link href="/assignment2">
      <Button className='cursor-pointer'>Back Home</Button>
      </Link> 
    </nav>
    </div>
  )
}

export default Contact
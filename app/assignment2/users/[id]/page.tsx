import { Button } from '@/components/ui/button'
import Link from 'next/link'

import React from 'react'

const User =  async ({params} : {params: Promise<{id: string}>}) => {
  const { id } = await params
  console.log(id)
  return (
    <div>
      User {id} 
      <Link href={"/assignment2/users"}>
        <Button>Go back</Button>
      </Link>  
    </div>
  )
}

export default User
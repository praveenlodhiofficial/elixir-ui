import Link from 'next/link'
import React from 'react'

const RequestComponent = () => {
  return (
    <div className='flex flex-col items-center justify-center py-40 space-y-4'>
      <h1 className='text-8xl font-bold'>Request Component</h1>
      <p className='text-base text-muted-foreground'>
        If you have a component in mind that you think would be useful for others, please contact me on&nbsp;
        <Link href='https://x.com/praveenlodhi99' target='_blank' className='font-semibold text-white'>Twitter</Link>
        &nbsp;or&nbsp;
        <Link href='https://www.linkedin.com/in/praveenlodhiofficial' target='_blank' className='font-semibold text-white'>LinkedIn</Link>.
      </p>
    </div>
  )
}

export default RequestComponent
import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div  className='flex items-center gap-2.5'>
      <Image
      src={"/elements/logo.png"}
      alt='logo icon'
      width={28}
      height={31}
      className='w-7 h-8'
      />
      <h3 className='font-clashDisplay text-2xl font-bold mt-1'>ByteSpace</h3>
    </div>
  )
}

export default Logo

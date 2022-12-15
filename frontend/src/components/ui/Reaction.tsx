import React from 'react'
import Like from '@assets/icons/like.svg'
import Love from '@assets/icons/love.svg'
const Reaction = () => {
  return (
    <div className="group relative">
      <Like className="h-5 w-5 " />
      <div className="absolute top-0 left-0 hidden -translate-x-1/2 -translate-y-full flex-row space-x-2 rounded-full bg-white py-2 px-3 transition duration-500 ease-in-out group-hover:flex">
        <Like className="h-8 w-8" />
        <Love className="h-8 w-8" />
      </div>
    </div>
  )
}

export default Reaction
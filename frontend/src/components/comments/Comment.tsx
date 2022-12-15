import React from 'react'
import { Comment as CommentType, CommentSubscription } from 'src/types'
import { useQuery } from 'urql'

// type cc = Pick<CommentSubscription, "Comment">
// type ccc = typeof cc[number]
type CommentsProps = {
  content?: any
}


export const Comment = ({ content }: CommentsProps) => {
  return (
    <div className="w-full max-w-xs rounded-lg bg-white p-4 text-gray-900 shadow dark:bg-gray-800 dark:text-gray-300">
      <div className="flex items-center">
        <div className="relative inline-block shrink-0 self-start">
          <img
            className="h-8 w-8 rounded-full "
            src="/img/default.jpg"
            alt="Jese Leos image"
          />
        </div>
        <div className="ml-3 flex flex-col text-sm font-normal">
          <h4 className="self-start text-sm font-semibold text-gray-900 dark:text-white">
            {content?.User?.firstname}
          </h4>
          <div className="text-sm font-normal">{content?.content}</div>
        </div>
      </div>
    </div>
  )
}

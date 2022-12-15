import React, { CSSProperties, MouseEvent, ReactElement } from 'react'
import classNames from 'classnames'
import { Post } from 'src/types'
import { useRouter } from 'next/router'

export default function SourceButton({
  post,
  className,
  style,
}: {
  post: Post
  className?: string
  style?: CSSProperties
}): ReactElement {
  const router = useRouter()
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    router.push(`/sources/${post?.Source?.Publisher?.name}`)
  }
  return (
    <button onClick={handleClick}>
      <img
        src={post?.Source?.Publisher?.image || '/img/default.jpg'}
        alt={post?.Source?.Publisher?.name}
        className="bg-theme-bg-tertiary h-7 w-7 rounded-full"
      />
    </button>
  )
}

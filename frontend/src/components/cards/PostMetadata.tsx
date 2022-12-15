import React, { ReactElement, ReactNode, useMemo } from "react"
import classNames from "classnames"

import { postDateFormat } from "@lib/dateFormat"
import { Post } from "src/types"

export default function PostMetadata({
  post,
  className,
  children,
}: {
  post: Post
  className?: string
  children?: ReactNode
}): ReactElement {
  const date = useMemo(() => post.createdAt && postDateFormat(post.createdAt), [post.createdAt])

  return (
    <div
      className={classNames("flex items-center text-theme-label-tertiary typo-footnote", className)}
    >
      {!!post.createdAt && <time dateTime={post.createdAt}>{date}</time>}
      {children}
    </div>
  )
}

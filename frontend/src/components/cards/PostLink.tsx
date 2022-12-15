import React, { ReactElement } from "react"
import { Post } from "src/types"
import { CardLink } from "./Card"

export type PostLinkProps = {
  post: Post
  openNewTab?: boolean
  onLinkClick?: (post: Post) => unknown
}

export default function PostLink({ post, openNewTab }: PostLinkProps): ReactElement {
  return (
    <CardLink
      href={post?.permalink || "/"}
      {...(openNewTab ? { target: "_blank", rel: "noopener" } : { target: "_self" })}
      title={post.title}
    />
  )
}

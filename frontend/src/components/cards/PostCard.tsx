import React, {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  Ref,
  useState,
} from 'react'
import classNames from 'classnames'
import {
  Card,
  CardHeader,
  CardImage,
  CardNotification,
  CardSpace,
  CardTextContainer,
  CardTitle,
} from './Card'
import PostLink from './PostLink'
import PostMetadata from './PostMetadata'
import SourceButton from './SourceButton'
import { ProfilePicture } from './ProfilePicture'

import ActionButtons from './ActionButtons'
import { useModalAction } from '@components/ui/modal/ModalContext'
import { Post } from 'src/types'
import { useRouter } from 'next/router'
export type PostCardProps = {
  post: Post
  openNewTab?: boolean
  showImage?: boolean
} & HTMLAttributes<HTMLDivElement>

export const PostCard = forwardRef(function PostCard(
  {
    post,
    openNewTab,
    className,
    children,
    showImage = true,
    style,
    ...props
  }: PostCardProps,
  ref: Ref<HTMLElement>
): ReactElement {
  const { openModal, closeModal } = useModalAction()
  const router = useRouter()

  const handleCartClick = () => {
    openModal('POST_VIEW', post)
    window.history.pushState("", "Title", "/post/" + post.slug);
  }

  const card = (
    <Card
      {...props}
      className={classNames(className)}
      style={{ ...style }}
      ref={ref}
      onClick={handleCartClick}
    >
      {/* <PostLink post={post} openNewTab={openNewTab} /> */}
      <CardTextContainer>
        <CardHeader>
          <SourceButton post={post} style={{ marginRight: '0.875rem' }} />
        </CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardTextContainer>
      <CardSpace />
      <PostMetadata post={post} className="mx-4" />

      <CardImage
        imgAlt="Post Cover image"
        imgSrc={post.image || '/img/default.jpg'}
        fallbackSrc=""
        className="my-2 post-gradient"
      >
        {/* {post?.Source?.Publisher && (
          <div
            className={classNames(
              'z-1 typo-callout invisible absolute flex w-full items-center bg-[#F4F4F2] py-2 px-3 font-bold group-hover:visible transition-all duration-200 ease-in-out'
            )}
          >
            <ProfilePicture
              className="rounded-full"
              size="small"
              user={post.Source.Publisher}
            />
            <span className="flex-1 mx-3 truncate">
              {post.Source.Publisher.name}
            </span>
          </div>
        )} */}
      </CardImage>
      <ActionButtons post={post} />
    </Card>
  )
  return card
})

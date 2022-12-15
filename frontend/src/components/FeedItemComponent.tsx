import React, { ReactElement } from 'react'
import { Post } from 'src/types'

import { PostCard } from './cards/PostCard'

export type FeedItemComponentProps = {
  items: Post[]
  index: number

  openNewTab: boolean
  insaneMode: boolean
  displayPublicationDate: boolean
}

export function getFeedItemKey(items: Post[], index: number): number {
  const item = items[index]
  return item.id
}

export default function FeedItemComponent({
  items,
  index,
  insaneMode,
  openNewTab,
  displayPublicationDate,
}: FeedItemComponentProps): ReactElement {
  const item = items[index]
  return (
    <PostCard
      post={{
        ...item,
        createdAt: displayPublicationDate && item.createdAt,
      }}
      data-testid="postItem"
      openNewTab={openNewTab}
      showImage={!insaneMode}
    ></PostCard>
  )
}

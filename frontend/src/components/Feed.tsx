import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import useFeedInfiniteScroll, {
  InfiniteScrollScreenOffset,
} from '@hooks/feed/useFeedInfiniteScroll'
import FeedItemComponent, {getFeedItemKey} from './FeedItemComponent'
import useVirtualFeedGrid, {
  cardHeightPx,
} from '@hooks/feed/useVirtualFeedGrid'
import VirtualizedFeedGrid from './VirtualizedFeedGrid'
import FeedContext from '@contexts/FeedContext'
import {usePostQuery} from 'src/types'
import usePagination from '@hooks/usePagination'

export type FeedProps<T> = {
  className?: string
}

export default function Feed<T>({className}: FeedProps<T>): ReactElement {
  const currentSettings = useContext(FeedContext)
  const numCards = currentSettings.numCards['eco']
  const [{data: items, error}, fetchMore, isFetchMore] = usePagination()
  const infiniteScrollRef = useFeedInfiniteScroll({
    fetchPage: fetchMore,
    canFetchMore: isFetchMore,
  })
  const parentRef = useRef<HTMLDivElement>(null)
  const {virtualizer, feedGapPx, virtualizedNumCards} = useVirtualFeedGrid(
    items,
    true,
    numCards,
    parentRef as React.MutableRefObject<HTMLDivElement>
  )

  const style = {
    height: `${virtualizer.totalSize}px`,
    '--num-cards': numCards,
    '--feed-gap': `${feedGapPx / 16}rem`,
    '--card-height': `${cardHeightPx / 16}rem`,
    gridTemplateColumns: '100%',
  }
  // if (error) return <p>Something went wrong...</p>
  // if (fetching || !data) return <p>Loading...</p>
  return (
    <div
      className={classNames(
        className,
        'relative mt-2 mx-auto w-full max-w-screen-2xl'
      )}
      style={style}
      ref={parentRef}>
      <VirtualizedFeedGrid
        items={items}
        virtualizer={virtualizer}
        virtualizedNumCards={virtualizedNumCards}
        getNthChild={(index, column, row) => (
          <FeedItemComponent
            items={items}
            index={index}
            insaneMode={false}
            openNewTab={true}
            displayPublicationDate={true}
            key={getFeedItemKey(items, index)}
          />
        )}
      />
      <InfiniteScrollScreenOffset ref={infiniteScrollRef}/>
    </div>
  )
}

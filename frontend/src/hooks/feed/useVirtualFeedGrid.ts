import { MutableRefObject, useCallback } from 'react'
import { VirtualItem } from 'react-virtual'
import { Post } from 'src/types'
import { useVirtualWindow } from '../useVirtualWindow'

export const cardHeightPx = 366
export const listHeightPx = 78

export default function useVirtualFeedGrid(
  items: Post[],
  useList: boolean,
  numCards: number,
  parentRef: MutableRefObject<HTMLElement>
): {
  virtualizer: { virtualItems: VirtualItem[]; totalSize: number }
  feedGapPx: number
  virtualizedNumCards: number
} {
  const virtualizedNumCards = numCards
  const feedGapPx = 32
  const virtualizer = useVirtualWindow({
    size: Math.ceil(items?.length / virtualizedNumCards),
    overscan: 1,
    parentRef,
    estimateSize: useCallback(
      () => (useList ? listHeightPx : cardHeightPx) + feedGapPx,
      []
    ),
  })
  return {
    virtualizer,
    feedGapPx,
    virtualizedNumCards,
  }
}

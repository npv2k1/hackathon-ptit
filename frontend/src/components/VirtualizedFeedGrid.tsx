import React, { ReactElement } from "react";
import { VirtualItem } from "react-virtual";
import { Post } from "src/types";


export type VirtualizedFeedGridProps = {
  items: Post[];
  virtualizer: { virtualItems: VirtualItem[]; totalSize: number };
  virtualizedNumCards: number;
  getNthChild: (index: number, column: number, row: number) => ReactElement;
};

export default function VirtualizedFeedGrid({
  items,
  virtualizer,
  virtualizedNumCards,
  getNthChild,
}: VirtualizedFeedGridProps): ReactElement {
  return (
    <>
      {virtualizer.virtualItems.map((virtualItem) => (
        <div
          key={virtualItem.index}
          ref={virtualItem.measureRef}
          className={`absolute grid top-0 left-0 w-full last:pb-0`}
          style={{
            transform: `translateY(${virtualItem.start}px)`,
            gridTemplateColumns: "repeat(var(--num-cards), 1fr)",
            gridGap: "var(--feed-gap)",
            paddingBottom: "var(--feed-gap)",
          }}
        >
          {[
            ...new Array(
              Math.min(
                virtualizedNumCards,
                items.length - virtualItem.index * virtualizedNumCards
              )
            ),
          ].map((_, i) =>
            getNthChild(
              virtualItem.index * virtualizedNumCards + i,
              i,
              virtualItem.index
            )
          )}
        </div>
      ))}
    </>
  );
}

import React, {
  ReactElement,
  ReactNode,
  useMemo,
  useState,
  MouseEvent,
  useEffect,
} from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { FaBookmark, FaComments, FaArrowUp } from 'react-icons/fa'
import {
  Post,
  useDelete_Bookmark_By_PkMutation,
  useDelete_Vote_By_PkMutation,
  useInsert_Bookmark_OneMutation,
  useMeQuery,
  useUpVoteMutation,
  useVote_AggregateQuery,
} from 'src/types'

export type ActionButtonsProps = {
  post: Post
  className?: string
}

export default function ActionButtons({
  post,
  className,
}: ActionButtonsProps): ReactElement {

    const [{ data: user, fetching, error }, reload] = useMeQuery()

  const [{}, handleBookmark] = useInsert_Bookmark_OneMutation()
  const [{}, handleRemoveBookmark] = useDelete_Bookmark_By_PkMutation()

  const isBookmark = post.Bookmarks.length ? true : false
  const [isUpvote,setIsUpvote] =  useState(false)


  useEffect(()=>{
  post.Votes.map(vote => {
    if(vote.userId === user?.me.id){
      setIsUpvote(true)
    }    
  })
  },[post,user])


  const [{}, handleVote] = useUpVoteMutation()
  const [{}, handleRemoveVote] = useDelete_Vote_By_PkMutation()
  const context = useMemo(() => ({ additionalTypenames: ['Posts'] }), [])
  const bookMarkClick = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation()
    if (!isBookmark) {
      handleBookmark(
        {
          object: {
            postId: post.id,
          },
        },
        context
      )
    } else {
      handleRemoveBookmark(
        {
          deleteBookmarkByPkId: post.Bookmarks[0].id,
        },
        context
      )
    }
  }
  const upvoteClick = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation()
    console.log(post.Votes)
    if (!isUpvote) {
      handleVote(
        {
          objects: {
            postId: post.id,
          },
        },
        context
      )
    } else {
      handleRemoveVote({
        deleteVoteByPkId: post.Votes[0].id,
      })
    }
  }

  return (
    <div
      className={classNames(
        'pointer-events-auto flex flex-row items-center justify-around ',
        className
      )}
    >
      <div className="flex items-center space-x-1">
        <div className="flex cursor-pointer rounded-xl p-3 transition-all duration-200 hover:bg-[#e2e7ee]">
          <FaArrowUp
            onClick={upvoteClick}
            className={`${isUpvote ? 'text-[#1fbf66]' : 'text-[#374151]'}`}
            size={20}
          />
        </div>
        <p className="font-bold text-[#374151]">
          {post.Votes_aggregate.aggregate?.count || 0}
        </p>
      </div>

      <div className="flex items-center space-x-1">
        <div className="flex cursor-pointer rounded-xl p-3 transition-all duration-200 hover:bg-[#e2e7ee]">
          <FaComments className="text-[#374151]" size={20} />
        </div>
        <p className="font-bold text-[#374151]"></p>
      </div>

      <div className="cursor-pointer rounded-xl p-3 transition-all duration-200 hover:bg-[#e2e7ee] ">
        <FaBookmark
          onClick={bookMarkClick}
          className={`${isBookmark ? 'text-[#ffb743]' : 'text-[#374151]'}`}
          size={20}
        />
      </div>
    </div>
  )
}

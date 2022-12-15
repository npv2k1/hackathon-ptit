import classNames from 'classnames'
import React, { useEffect } from 'react'
import {
  CommentSubscription,
  Order_By,
  useCommentSubscription,
  useGetPostCommentsQuery,
  useInsert_Comment_OneMutation,
} from 'src/types'
import { Comment as CommentType, } from 'src/types'

import { Comment } from './Comment'
import CommentInput from './CommentInput'

export type CommentsProps = {
  postId?: number
  hide: boolean
}
const Comments = ({ postId, hide }: CommentsProps) => {
  const [{ data, fetching, error }] = useCommentSubscription({
    variables: {
      where: {
        postId: {
          _eq: postId,
        },
      },
      orderBy: {
        createdAt: Order_By.Desc,
      },
    },
  })

  const commentsRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    // const scroll =  commentsRef.current?.scrollHeight - commentsRef.current?.clientHeight
    const scroll =
      Number(commentsRef.current?.scrollHeight) -
      Number(commentsRef.current?.clientHeight)
    commentsRef.current?.scrollTo(0, scroll + 1000)
    // console.log('scrollToBottom',scroll)
  }

  console.log("comments Error", error)


  useEffect(() => {
    scrollToBottom()
  }, [data])

  const [{}, inserComment] = useInsert_Comment_OneMutation()
  const handleSubmit = async (content: string) => {
    if (content.length > 0) {
      await inserComment({
        object: {
          postId: postId,
          content: content,
        },
      })
      scrollToBottom()
    }
  }
  // console.log('Comments', data, fetching, error)

  if (fetching) return <div className={classNames(hide ? 'hidden' : 'flex')}>Loading...</div>
  if (error)
    return <div className={classNames(hide ? 'hidden' : 'flex')}>Error...</div>
  return (
    <div
      className={"bottom-0 left-0  flex h-full max-h-96 w-full flex-col overflow-hidden rounded-2xl border-t-2 bg-white p-5"}
    >
      {/* <Comment /> */}
      <div>
        <CommentInput onSubmit={handleSubmit} />
      </div>
      <div className="overflow-y-auto" ref={commentsRef}>
        {data?.Comment.map((comment) => (
          <Comment key={comment.id} content={comment} />
        ))}
      </div>
      
    </div>
  )
}

export default Comments

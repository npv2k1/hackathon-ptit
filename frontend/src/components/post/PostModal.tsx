import ActionButtons from '@components/cards/ActionButtons'
import { LazyImage } from '@components/cards/LazyImage'
import PostAuthor from '@components/cards/PostAuthor'
import Comment from '@components/comments/Comments'
import Header from '@components/layouts/Header'
import {
  useModalAction,
  useModalState,
} from '@components/ui/modal/ModalContext'
import { useAuthState } from '@contexts/AuthContext'
import classed from '@lib/classed'
import React, { MouseEvent, useMemo, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FaArrowUp, FaBookmark, FaComments } from 'react-icons/fa'
import { RiArrowGoBackLine } from 'react-icons/ri'
import {
  useDelete_Bookmark_By_PkMutation,
  useInsert_Bookmark_OneMutation,
  useUpVoteMutation,
  Post,
  usePost_By_PkQuery,
  useDelete_Vote_By_PkMutation,
} from 'src/types'

import { HiOutlineX } from 'react-icons/hi'

const CardImage = classed(LazyImage, 'rounded-xl h-52')
const PostModal = () => {
  const { data: modalData } = useModalState()
  const context = useMemo(() => ({ additionalTypenames: ['PostModal'] }), [])

  const [{ data: post, fetching: postFetching, error: postError }] =
    usePost_By_PkQuery({
      variables: {
        postByPkId: modalData.id,
      },
      context: context,
      requestPolicy: 'cache-and-network',
    })

  const { isAuthorized } = useAuthState()
  const { openModal, closeModal } = useModalAction()

  // const post: Post = modalData as Post
  const [isHide, setIsHide] = useState(true)
  const [{}, handleBookmark] = useInsert_Bookmark_OneMutation()
  const [{}, handleRemoveBookmark] = useDelete_Bookmark_By_PkMutation()

  // const [isBookmark, setIsBookmark] = useState( > 0 || 0)
  const isBookmark = post?.Post_by_pk?.Bookmarks.length ? true : false
  const isUpvote = post?.Post_by_pk?.Votes.length ? true : false

  const [{}, handleVote] = useUpVoteMutation()
  const [{}, handleRemoveVote] = useDelete_Vote_By_PkMutation()
  // if (fetching) return <div>Loading...</div>
  // const []

  const upvoteClick = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation()

    if (!isUpvote) {
      handleVote(
        {
          objects: {
            postId: post?.Post_by_pk?.id,
          },
        },
        {
          additionalTypenames: ['PostModal'],
        }
      )
    } else {
      handleRemoveVote(
        {
          deleteVoteByPkId: post?.Post_by_pk?.Votes[0].id || 0,
        },
        {
          additionalTypenames: ['PostModal'],
        }
      )
    }
  }
  const bookMarkClick = () => {
    if (!isBookmark) {
      handleBookmark(
        {
          object: {
            postId: post?.Post_by_pk?.id,
          },
        },
        {
          additionalTypenames: ['PostModal'],
        }
      )
    } else {
      handleRemoveBookmark(
        {
          deleteBookmarkByPkId: post?.Post_by_pk?.Bookmarks[0]?.id || 0,
        },
        {
          additionalTypenames: ['PostModal'],
        }
      )
    }
  }
  const commentsRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    // const scroll =  commentsRef.current?.scrollHeight - commentsRef.current?.clientHeight
    const scroll =
      Number(commentsRef.current?.scrollHeight) -
      Number(commentsRef.current?.clientHeight)
    commentsRef.current?.scrollTo(0, scroll + 1000)
    // console.log('scrollToBottom',scroll)
  }

  return (
    <div
      ref={commentsRef}
      className="my-auto h-[95vh] min-h-full w-screen max-w-6xl overflow-y-auto overscroll-y-contain rounded-2xl bg-white scrollbar-hide"
    >
      <div className="relative">
        <img
          className="h-[300px] w-full rounded-t-2xl object-cover"
          src={post?.Post_by_pk?.image || '/img/default.jpg'}
          alt="post image"
        />
        <div className="absolute flex flex-row px-3  rounded-full cursor-pointer top-5 right-5 opacity-70 space-x-2">
          <a
            className="text-white bg-yellow-800 text-center rounded-full p-2"
            href={post?.Post_by_pk?.permalink || '#'}
          >
            Đọc bài gốc
          </a>
        </div>
      </div>

      <div className="relative flex flex-row mt-3">
        <div className="sticky top-0 self-start p-3 flex flex-col space-y-2 ">
          <img
            className="w-10 h-10 rounded-full"
            src={
              post?.Post_by_pk?.Source?.Publisher?.image || '/img/default.jpg'
            }
            alt=""
          />

          <div className="sticky z-50 top-5 right-5 w-10 h-10 bg-red-400  flex cursor-pointer rounded-xl p-2 transition-all duration-200 hover:bg-red-500">
            <HiOutlineX
              onClick={() => {
                closeModal()
              }}
              className="text-white"
              size={25}
            />
          </div>

          <div className="flex cursor-pointer rounded-xl p-3 transition-all duration-200 hover:bg-[#e2e7ee]">
            <FaComments
              onClick={() => {
                scrollToBottom()
              }}
              className="text-[#374151]"
              size={20}
            />
          </div>
          <div className="flex flex-col items-center space-x-1">
            <div className="flex cursor-pointer rounded-xl p-3 transition-all duration-200 hover:bg-[#e2e7ee]">
              <FaArrowUp
                onClick={upvoteClick}
                className={`${isUpvote ? 'text-[#1fbf66]' : 'text-[#374151]'}`}
                size={20}
              />
            </div>
          </div>
          <div className="cursor-pointer rounded-xl p-3 transition-all duration-200 hover:bg-[#e2e7ee] ">
            <FaBookmark
              onClick={bookMarkClick}
              className={`${isBookmark ? 'text-[#ffb743]' : 'text-[#374151]'}`}
              size={20}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div>
            <h1 className="text-4xl text-gray-800 prose-headings">
              {post?.Post_by_pk?.title}
            </h1>
          </div>

          <div className="p-10 mx-auto prose max-w-max lg:prose-xl">
            <div
              dangerouslySetInnerHTML={{
                __html: post?.Post_by_pk?.articleHtml || '',
              }}
            />
            <a href={post?.Post_by_pk?.permalink} target="_blank">
              Đọc bài gốc tại đây.
            </a>
          </div>
        </div>
      </div>
      <div
        className="fb-comments"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width=""
        data-numposts="5"
      ></div>
      <Comment hide={isHide} postId={post?.Post_by_pk?.id} />
    </div>
  )
}

export default PostModal

import React from 'react'

type CommentInputProps = {
  onSubmit: (content: string) => void
}

const CommentInput = ({ onSubmit }: CommentInputProps) => {
  const [content, setContent] = React.useState('')

  return (
    <div
      className="flex flex-grow justify-center"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(content)
        setContent('')
      }}
    >
      <form className="mx-5 ml-2 flex flex-grow items-center rounded-full bg-gray-100 p-3 px-4">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="ml-1 hidden flex-shrink items-center bg-transparent placeholder-gray-500 outline-none  md:inline-flex"
          type="text"
          placeholder="Comment"
        />
        <button hidden type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CommentInput

import { useRouter } from 'next/router'
import React, { FormEvent, useEffect } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const router = useRouter()
  const [searchText, setSearchText] = React.useState('')
  useEffect(() => {
    const { pathname, query } = router
    const { search } = query
    setSearchText(search as string)
  }, [router])

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { pathname, query } = router
    router.push(
      {
        pathname,
        query: { ...query, search: searchText },
      },
      undefined,
      {
        scroll: false,
      }
    )
  }

  const clearSearch = () => {
    setSearchText('')
    const { pathname, query } = router
    router.push(
      {
        pathname,
        query: { ...query, search: '' },
      },
      undefined,
      {
        scroll: false,
      }
    )
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center flex-grow max-w-lg p-3 px-3 mx-3 ml-2 bg-gray-100 rounded-full"
    >
      <AiOutlineSearch className="w-6 h-6 text-gray-600" />
      <input
        className="items-center flex-1 flex-shrink hidden ml-1 placeholder-gray-500 bg-transparent outline-none md:inline-flex"
        type="text"
        placeholder="Search"
        value={searchText || ''}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText && (
        <AiOutlineClose
          className="w-6 h-6 text-red-600"
          onClick={clearSearch}
        />
      )}
      <button hidden type="submit">
        Search
      </button>
    </form>
  )
}

export default Search

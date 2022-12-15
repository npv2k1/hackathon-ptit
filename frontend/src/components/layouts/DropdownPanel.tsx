import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { CgLivePhoto } from 'react-icons/cg'
import { BiRightTopArrowCircle } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'

type DropdownPanelProps = {
  hide: boolean
  className?: string
}

const DropdownPanel = ({ hide }: DropdownPanelProps) => {
  const [show, setShow] = useState(false)
  const [expand, setExpand] = useState(false)
  const handleClick = async () => {
    //  !show && tryLoadAll()
    setShow((show) => !show)
  }
  return (
    <div className="flex h-full w-full select-none flex-col items-center">
      {/* Handle outside click */}
      <div
        className={
          (show && !hide ? '' : 'h-0 w-0') +
          'absolute top-0 left-0 h-screen w-screen bg-transparent'
        }
        onClick={() => setShow((show) => !show)}
      ></div>
      {/* Main Button */}
      <div
        className={
          'hover:border-lightBorder rounded-2 dark:bg-darkBG dark:hover:border-darkBorder dark:border-darkBG flex h-full w-full flex-none flex-row items-center justify-between rounded-md border border-transparent px-2 hover:cursor-pointer' +
          (show ? ' border-lightBorder dark:border-darkBorder' : '')
        }
        onClick={handleClick}
      >
        <div className="flex flex-row items-center">
          <AiOutlineHome className="h-6 w-6" />
          <h1 className="ml-2 truncate capitalize">Home</h1>
        </div>
        <BsChevronDown
          className={
            (show ? '-rotate-180' : 'rotate-0') +
            'transform transition duration-200'
          }
        />
      </div>
      {/* Dropdown */}
      <div
        className={
          ' dark:bg-darkBG dark:border-darkBorder border-lightBorder mt-1 flex w-full origin-top transform flex-col rounded-md border bg-white shadow-sm transition duration-150 ease-in-out ' +
          `${show && !hide ? ' block' : ' hidden'}`
        }
      >
        {/* scroll */}
        <div
          className={
            'scrollbar-thin scrollbar-thumb-lightScroll scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full dark:scrollbar-thumb-darkScroll   grid grid-cols-1 overflow-y-auto overscroll-contain transition-all ' +
            (expand ? ' max-h-[90vh]' : '  max-h-96 ')
          }
        >
          <Link href="/" passHref>
            <a>
              <div className="hover:bg-lightHighlight dark:hover:bg-darkHighlight flex cursor-pointer flex-row items-center space-x-2 py-1.5 pl-4">
                <AiOutlineHome className="h-6 w-6" />
                <h1 className="">Home</h1>
              </div>
            </a>
          </Link>
          <Link href="/r/popular" passHref>
            <a>
              <div className="hover:bg-lightHighlight dark:hover:bg-darkHighlight flex cursor-pointer flex-row items-center space-x-2 py-1.5 pl-4">
                <BiRightTopArrowCircle className="h-6 w-6" />
                <h1>Popular</h1>
              </div>
            </a>
          </Link>
          <Link href="/r/all" passHref>
            <a>
              <div className="hover:bg-lightHighlight dark:hover:bg-darkHighlight flex  cursor-pointer flex-row items-center space-x-2 py-1.5 pl-4">
                <CgLivePhoto className="h-6 w-6" />
                <h1>All</h1>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DropdownPanel

import Link from 'next/link'
import React, { useState } from 'react'
import DropdownPanel from './DropdownPanel'

const NavBar = () => {
  const [hidden, setHidden] = useState(false)

  const homeClick = ()=>{}

  return (
    <>
      <header
        className={
          `${hidden ? '-translate-y-full' : ''}` +
          'fixed top-0 z-50 h-14 w-screen transform bg-red-50 transition duration-500 ease-in-out'
        }
      >
        <nav className="dark:bg-darkBG flex h-full flex-grow flex-row items-center justify-between bg-white shadow-lg">
          <div className="flex h-full flex-grow flex-row items-center justify-start space-x-2 ">
            <Link href="/" passHref>
              <a>
                <h1
                  className="ml-2 cursor-pointer select-none align-middle text-2xl"
                  onClick={homeClick}
                >
                  {'NNEWS'}
                </h1>
              </a>
            </Link>

            <div
              className="hidden h-full w-60 flex-none py-2 md:block"
              onClick={() => {}}
            >
              <DropdownPanel hide={hidden} />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar

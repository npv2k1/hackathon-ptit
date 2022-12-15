import Button from '@components/ui/Button'
import { AppCtx } from '@contexts/AppContext'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdBookmark, IoMdNotifications } from 'react-icons/io'
import Search from './Search'

const Header = () => {
  const router = useRouter()

  const { methods, state } = useContext(AppCtx)

  return (
    <div className="sticky top-0 z-50 flex flex-row items-center px-2 bg-white shadow-md lg:px-5">
      <div className="flex items-center space-x-3">
        <Image src="/img/logo.svg" width={40} height={40} layout="fixed" />
        <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div
              className="items-center justify-between hidden w-full md:order-1 md:flex md:w-auto"
              id="mobile-menu-4"
            >
              <ul className="flex flex-col items-center mt-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                <li>
                  <div
                    onClick={() => {}}
                    className="cursor-pointer rounded-xl border bg-[#eff4fa] p-2 hover:border-gray-500"
                  >
                    <AiOutlineMenu
                      size={20}
                      className="w-6 h-6 text-gray-700"
                    />
                  </div>
                </li>
                <li>
                  <Button
                    text={state?.account ? 'changeAccount' : 'connectWallet'}
                    onClick={() =>
                      state?.account
                        ? methods.changeAccount()
                        : methods.connect()
                    }
                  />
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-center flex-grow">
        <Search />
      </div>
      <div className="flex flex-row items-center">
        <div className="flex-row hidden space-x-5 lg:flex">
          <div className="cursor-pointer rounded-xl border bg-[#eff4fa] p-2 hover:border-gray-500">
            <IoMdNotifications className="w-6 h-6 text-gray-700" />
          </div>
          <div
            onClick={() => {
              router.push('/bookmarks')
            }}
            className="cursor-pointer rounded-xl border bg-[#eff4fa] p-2 hover:border-gray-500"
          >
            <IoMdBookmark className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center px-2 py-1 space-x-2 rounded-full">
          {/* {isAuthorized ? (
            <div>
              <ProfileDropdown />
            </div>
          ) : (
            <div className="inline-flex space-x-2">
              <Button text="Register" onClick={handleRegister} />
              <Button text="Login" onClick={handleLogin} />
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default Header

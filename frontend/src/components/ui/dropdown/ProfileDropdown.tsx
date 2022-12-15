import { useAuthAction, useAuthState } from '@contexts/AuthContext'
import { Menu, Transition } from '@headlessui/react'
import { authorizationAtom } from '@store/authorization-atom'
import { useAtom } from 'jotai'
import Cookies from 'js-cookie'
import { Fragment, useEffect, useRef, useState } from 'react'
import { CgLogOut, CgProfile } from 'react-icons/cg'
import { useMeQuery } from 'src/types'
import Avatar from '../avatar'

export default function ProfileDropdown() {
  const [{ data: user, fetching, error }, reload] = useMeQuery()
  const { isAuthorized } = useAuthState()
  const { logoutSuccess } = useAuthAction()

  useEffect(() => {
    console.log('update')
    reload({ requestPolicy: 'network-only' })
  }, [isAuthorized])

  const handleLogout = () => {
    Cookies.remove('AUTH_TOKEN')
    logoutSuccess()
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center space-x-2 rounded-full pl-3 hover:bg-[#f3f4f6]">
          <div className='hidden md:flex '>
            <p className="font-bold capitalize text-gray-700">
              {user?.me.firstname}
            </p>
          </div>
          <Avatar
            className="h-10 w-10"
            alt="Avatar"
            title="avatar"
            src={`https://avatars.dicebear.com/api/pixel-art/${user?.me.firstname}.svg`}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <CgProfile className="mr-2 h-5 w-5" />
                  ) : (
                    <CgProfile className="mr-2 h-5 w-5" />
                  )}
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {active ? (
                    <CgLogOut className="mr-2 h-5 w-5" />
                  ) : (
                    <CgLogOut className="mr-2 h-5 w-5" />
                  )}
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

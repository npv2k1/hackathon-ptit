import React from 'react'
import { FaHotjar } from 'react-icons/fa'
import { TiArrowUpThick } from 'react-icons/ti'
import { IoIosAnalytics, IoMdChatboxes } from 'react-icons/io'
import { GrLineChart, GrTechnology } from 'react-icons/gr'
import { BsEye } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { useSettingState } from '@contexts/SettingContext'
import Link from 'next/link'
import { MdOutlineViewList } from 'react-icons/md'
import { AiOutlineLineChart } from 'react-icons/ai'

const MENU = [
  {
    name: 'Checkin',
    href: '/',
    title: 'Checkin',
    icon: <FaHotjar className="sidebar-icon" />,
  },
]

const SideBar = () => {
  const { showSidebar } = useSettingState()

  return (
    <aside
      className={`sticky top-[80px] hidden min-h-full max-w-[300px]  self-start  bg-transparent  ${
        showSidebar ? 'lg:flex' : 'hidden'
      }`}
      aria-label="Sidebar"
    >
      <div className="px-3 py-4 overflow-y-auto rounded dark:bg-gray-800">
        <ul className="space-y-2">
          {MENU.map((item) => (
            <li key={item.name} className="sidebar-item">
              <Link href={item.href}>
                <div className="flex flex-row justify-between">
                  {item.icon}
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></ul>
      </div>
      <div className="flex-1"></div>
    </aside>
  )
}

export default SideBar

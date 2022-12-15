import React, { HTMLAttributes, ReactElement, ReactNode, useContext } from "react"
import HomeIcon from "@assets/icons/home.svg"
import BookmarkIcon from "@assets/icons/bookmark.svg"
import LayoutIcon from "@assets/icons/layout.svg"
import { useRouter } from "next/router"
import classNames from "classnames"
import UserIcon from "@assets/icons/user.svg"
import { FaRegNewspaper } from "react-icons/fa"
import { BsTable } from "react-icons/bs"
import { GrLineChart } from "react-icons/gr"
import { IoIosAnalytics } from "react-icons/io"
import { MdOutlineGroups } from "react-icons/md"

import {RiStockFill} from 'react-icons/ri'
type Tab = {
  path: string
  title: string
  icon: ReactNode
  requiresLogin?: boolean
}

export const tabs: Tab[] = [
  {
    path: "/feeds",
    title: "Tin tức",
    icon: <FaRegNewspaper size="15" />,
  },
  {
    path: "/watchlists",
    title: "Danh mục",
    icon: <BsTable size="15" />,
    requiresLogin: true,
  },
  {
    path: "/charts",
    title: "Biểu đồ",
    icon: <RiStockFill size="15" />,
    requiresLogin: true,
  },
  {
    path: "",
    title: "Phân tích",
    icon: <IoIosAnalytics size="15" />,
  },
  {
    path: "",
    title: "Cộng đồng",
    icon: <MdOutlineGroups size="15" />,
  },
]

export default function FooterNavBar(): ReactElement {
  const router = useRouter()
  const selectedTab = tabs.findIndex((tab) => tab.path === router?.pathname)

  return (
    <div
      className={classNames(
        "fixed grid left-0 h-12 bottom-0 w-full grid-flow-col items-center bg-[#141829] z-2 md:hidden text-white"
      )}
    >
      {tabs.map((tab, index) => (
        <div
          key={tab.path}
          className={`flex flex-col rounded-t-xl  w-full h-full items-center justify-center ${
            selectedTab === index ? "bg-[#1f2937]" : "bg-[#141829]"
          }`}
        >
          <button className="" onClick={() => router.push(tab.path)}>
            {tab.icon}
          </button>
          <p>{tab.title}</p>
        </div>
      ))}
    </div>
  )
}

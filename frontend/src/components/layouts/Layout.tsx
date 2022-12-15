import Head from 'next/head'
import React, { ReactNode } from 'react'
import FooterNavBar from './FooterNavBar'
import Header from './Header'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Script from 'next/script'
export interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-row bg-[#f0f2f5] transition-colors duration-150">
      {/* <Head>
        <title>News</title>        
      </Head> */}
      <div className="flex flex-col flex-1">
        <Header />
        {/* <NavBar/> */}
        <div className="flex flex-row flex-1">
          <div className="sticky top-0 items-stretch self-start min-h-full bg-white">
            <SideBar />
          </div>
          <div className="flex flex-1 p-2 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
      {/* <FooterNavBar /> */}
    </div>
  )
}

export default Layout

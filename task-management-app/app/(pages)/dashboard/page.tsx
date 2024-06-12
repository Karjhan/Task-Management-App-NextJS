"use client"

import Dashboard from '@/app/components/dashboard/Dashboard';
import SidebarComp from '@/app/components/sidebar/Sidebar';
import "rsuite/dist/rsuite.min.css";
import React from 'react'
import { CustomProvider } from 'rsuite';
import { useGlobalContextProvider } from '@/app/contextAPI';

const page = () => {
  const { isDark } = useGlobalContextProvider();

  return (
    <CustomProvider theme={(isDark ? "dark" : "light")}>
      <div className='poppins flex w-full h-screen'>
          <SidebarComp/>
          <Dashboard/>
      </div>
    </CustomProvider>
  )
}

export default page
import { useGlobalContextProvider } from '@/app/contextAPI';
import React from 'react'

const RightSideBar = () => {
  const { isDark } = useGlobalContextProvider();

    return (
      <div className={`m-5 rounded-md p-4 h-64 flex gap-8 flex-col items-center justify-center ${isDark ? "bg-slate-900" : "bg-white"}`}>
        <span className='font-semibold text-lg'>Overall Progress</span>    
        <div className='bg-mainColor w-28 h-28 rounded-full flex flex-col justify-center items-center'>
          <span className='font-bold text-3xl text-white'>76%</span>
          <span className='text-[11px] font-light text-white'>Progress</span>
        </div>
      </div>
    )
}

export default RightSideBar
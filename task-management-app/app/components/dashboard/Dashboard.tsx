import React from 'react'
import MainArea from './main-area/MainArea'
import TopBar from './top-bar/TopBar'

const Dashboard = () => {

  return (
    <div className='poppins w-full'>
        <TopBar />
        <MainArea />
    </div>
  )
}

export default Dashboard
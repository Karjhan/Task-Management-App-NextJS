"use client"

import React, { useState } from 'react'
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);

    return (
        <div className='p-8 pt-12 flex items-center justify-between'>
            {/* Welcome Part */}
            <div className='flex flex-col'>
                <span className='font-bold text-2xl'>
                    Hello, <span className='font-light'>Alex</span>
                </span>
                <span className='text-[12px] font-light'>
                    Welcome Back!
                </span>
            </div>
            {/* Search Bar */}
            {openSearchBar && <SearchBar/>}
            {/* Profile */}
            <div className='w-32 flex items-center justify-between'>
                <FontAwesomeIcon
                    height={20}
                    width={20}
                    className='cursor-pointer'
                    icon={openSearchBar ? faClose : faSearch}
                    onClick={() => setOpenSearchBar((openSearchBar) => !openSearchBar)}
                />
                <div className='flex gap-2 items-center'>
                    <div className='bg-mainColor h-11 w-11 rounded-md'>
                    </div>
                    <FontAwesomeIcon
                        className='font-bold cursor-pointer'
                        height={20}
                        width={20}
                        icon={faAngleDown}
                    />
                </div>
            </div>
        </div>
    )
}

export default TopBar
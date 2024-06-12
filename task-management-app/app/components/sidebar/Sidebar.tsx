"use client"

import React, { useState } from 'react'
import { Nav, Sidenav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import ProjectIcon from '@rsuite/icons/Project';
import CalendarIcon from '@rsuite/icons/Calendar';
import ThreeColumnsIcon from '@rsuite/icons/ThreeColumns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';
import { useGlobalContextProvider } from '@/app/contextAPI';

const SidebarComp = () => {
    const [expanded, setExpanded] = useState(true);
    const [activeKey, setActiveKey] = useState('1');
    const { isDark, setIsDark } = useGlobalContextProvider();

    return (
        <div className='poppins w-64 flex flex-col'>
            <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']} className='flex flex-col gap-4 justify-between h-full'>
                {/* Logo */}
                {expanded && 
                <Sidenav.Header className='flex gap-2 items-center p-4'>
                    <FontAwesomeIcon className='bg-mainColor p-3 text-sm h-8 text-white rounded-md' icon={faFeather} />
                    <span className='text-2xl font-light'>
                        <span className='font-bold text-mainColor'>
                            Taskify
                        </span>
                         Hub
                    </span>
                </Sidenav.Header>}
                {/* Menu Items */}
                <Sidenav.Body>
                <Nav activeKey={activeKey} onSelect={setActiveKey}>
                    <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                        Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<ProjectIcon />}>
                        Projects
                    </Nav.Item>
                    <Nav.Item eventKey="3" icon={<CalendarIcon />}>
                        Calendar
                    </Nav.Item>
                    <Nav.Item eventKey="4" icon={<ThreeColumnsIcon />}>
                        Categories
                    </Nav.Item>
                </Nav>
                </Sidenav.Body>
                {/* Footer */}
                <Sidenav.Body className='p-0 m-0' style={{marginTop: "auto"}}>
                    <div className='flex flex-col items-center py-4'>
                        <Toggle
                            size= {expanded ? "lg" : "sm"}
                            onChange={setIsDark}
                            checked={isDark}
                            checkedChildren={<MoonIcon />}
                            unCheckedChildren={<SunIcon />}
                        />
                    </div>
                    <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
                </Sidenav.Body>
            </Sidenav>
        </div>
    )
}

export default SidebarComp
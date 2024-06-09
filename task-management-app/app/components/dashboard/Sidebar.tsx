"use client"

import React, { useState } from 'react'
import { Nav, Sidenav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import ProjectIcon from '@rsuite/icons/Project';
import CalendarIcon from '@rsuite/icons/Calendar';
import ThreeColumnsIcon from '@rsuite/icons/ThreeColumns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

const SidebarComp = () => {
    const [expanded, setExpanded] = useState(true);
    const [activeKey, setActiveKey] = useState('1');

    return (
        <div className='poppins border border-gray-200 w-64 flex flex-col'>
            <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']} className='flex flex-col gap-4 justify-between'>
                <Sidenav.Header>
                    <FontAwesomeIcon className='bg-mainColor p-3 text-sm h-8 text-white rounded-md' icon={faFeather} />
                    <span className='text-2xl font-light'>
                        <span className='font-bold text-mainColor'>
                            Taskify
                        </span>
                         Hub
                    </span>
                </Sidenav.Header>
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
                <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
            </Sidenav>
        </div>
    )
}

export default SidebarComp
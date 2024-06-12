import { useGlobalContextProvider } from '@/app/contextAPI';
import React from 'react'
import { Col, Grid, Row } from 'rsuite';
import Statistics from './Statistics';
import RightSideBar from './RightSideBar';

const MainArea = () => {
    const { isDark } = useGlobalContextProvider();

    return (
        <Grid fluid className={`${isDark ? "bg-transparent" : "bg-slate-50"}`}>
            <Row gutter={10}>
                <Col xs={18} className='flex'>
                    <Statistics/>
                </Col>
                <Col xs={6} className='flex flex-col'>
                    <RightSideBar/>
                </Col>
            </Row>
        </Grid>
    )
}

export default MainArea
"use client"

import { useGlobalContextProvider } from '@/app/contextAPI'
import { StatisticsCard } from '@/app/shared/models/statisticsCard'
import { faDiagramProject, faLayerGroup, faListCheck } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import StatisticsCardComp from './StatisticsCard'

const Statistics = () => {
    const { isDark } = useGlobalContextProvider();
    const statisticsCards: StatisticsCard[] = [
        { header: "Statistic 1", text: "Total Projects", numbers: 15, icon: faDiagramProject },
        { header: "Statistic 2", text: "Tasks Completed", numbers: 30, icon: faListCheck },
        { header: "Statistic 3", text: "Categories", numbers: 3, icon: faLayerGroup }
    ]

    return (
        <div className={`m-5 rounded-lg p-8 flex gap-4 ${isDark ? "bg-slate-900" : "bg-white"}`}>
            {statisticsCards.map((card, index) => (
                <div key={index}>
                    <StatisticsCardComp card={card}/>             
                </div>
            ))}
        </div>
    )
}

export default Statistics
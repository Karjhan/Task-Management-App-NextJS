import { StatisticsCard } from '@/app/shared/models/statisticsCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Panel } from 'rsuite';

const StatisticsCardComp = (props: {card : StatisticsCard}) => {
    const { header, text, numbers, icon } = props.card;

    return (
        <Panel shaded className='text-white bg-mainColor p-0 m-0 min-w-60'>
            <div className='flex items-center gap-12 px-4 rounded-md'>
                <div className='flex flex-col'>
                    <span className='font-bold text-3xl'>{numbers}</span>
                    <span className='font-light text-[12px]'>{text}</span>
                </div>
                <div className='h-12 w-12 rounded-full bg-white flex items-center justify-center'>
                    <FontAwesomeIcon
                        icon={icon}
                        className='p-7 text-mainColor'
                    />
                </div>
            </div>
        </Panel>
    )
}

export default StatisticsCardComp
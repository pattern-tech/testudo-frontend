import React from 'react';
import { StatisticBox } from '@/scenes/landing/statistics/StatisticBox';


export const NodeOperation = () => {
    return(
        <div>
            <div className="m-3">
                <p className="text-sm text-onPrimaryContainer-dark w-[665px] text-center">
                    Your stacked assets overview
                </p>
                <div className="justify-center flex space-x-4 mt-4 items-center ">
                    <StatisticBox value="1000ERG ~ $1 M" description="Total ERG locked" />
                    <StatisticBox value="1000RSN ~ $1 M" description="Total RSN locked" />
                </div>
            </div>
            
            <div className="m-7 ">
                <p className="text-sm text-onPrimaryContainer-dark w-[546px] text-center">
                    Testudo stats
                </p>
                <div className=" justify-center flex flex-wrap space-x-4 mt-4 items-center">
                    <StatisticBox value="200+" description="Integrated watchers"/>
                    <StatisticBox value="+ $23K" description="Reward claimed" />
                    <div className=" mt-4">
                        <div className="flex w-[495px] flex-col rounded-[1.25rem] bg-surfaceContainer-dark px-8 py-7 ">
                            <h1 className="text-xl font-extrabold">
                                $10 M
                            </h1>
                            <p className="mt-3 text-sm font-medium text-onSecondaryContainer-dark">
                                Total system value locked
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
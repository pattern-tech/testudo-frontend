import React from 'react';
import Button from '@/components/Button';
import Discord from '@/assets/svg/Discord.svg';
import Twitter from '@/assets/svg/Twitter.svg';
import Image from 'next/image';



export const Support = () => {
    return(
        <div className="flex items-center justify-center">
            <div className="m-5 w-[546px]">
                <p className="text-sm text-onPrimaryContainer-dark">
                    Connect with us through email, discord or twitter if you have questions, problems or feedback.
                </p>
                <div className="mt-4">
                    <div className="flex w-[546px] flex-col rounded-[1.25rem] bg-surfaceContainer-dark px-8 py-7">
                        <h1 className="text-xl font-extrabold">
                            Lorem@ipsum.com
                        </h1>
                        <p className="mt-3 text-sm font-medium text-onSecondaryContainer-dark">
                            We try our best to reach back to you as soon as possible
                        </p>
                        <div className="mt-7">
                            <Button
                                className="w-2/6 mr-1"
                                kind="Outlined">
                                <Image
                                    className="mr-2"
                                    src={Discord}
                                    width={18}
                                    height={18}
                                    alt="discord icon"
                                />
                                Discord
                            </Button>
                            <Button 
                                className="w-2/6 ml-1"
                                kind="Outlined">
                                <Image
                                    className="mr-2"
                                    src={Twitter}
                                    width={18}
                                    height={18}
                                    alt="twitter icon"
                                />
                                X(Twitter)
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
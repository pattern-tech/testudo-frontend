import React, { useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import google from '@/assets/svg/googleLogo.svg';
import nautilus from '@/assets/svg/nautilusLogo.svg';
import error from '@/assets/svg/error-Circle.svg';

export const Credentials = () => {
    const [googleButtonText, setGoogleButtonText] = useState('Disconnect from Google');
    const [nautilusButtonText, setNautilusButtonText] = useState('Connect Nautilus wallet');
    const [showGoogleDisconnectError, setShowGoogleDisconnectError] = useState(false);
    const [showWalletDisconnectError, setShowWalletDisconnectError] = useState(false);

    const toggleGoogleButton = () => {
        if (googleButtonText === 'Continue with Google' || nautilusButtonText === 'Disconnect wallet') {
            setGoogleButtonText(prev => prev === 'Continue with Google' ? 'Disconnect from Google' : 'Continue with Google');
        } else {
            setShowGoogleDisconnectError(true);
        }
    };

    const toggleNautilusButton = () => {
        if (nautilusButtonText === 'Connect Nautilus wallet' || googleButtonText === 'Disconnect from Google') {
            setNautilusButtonText(prev => prev === 'Connect Nautilus wallet' ? 'Disconnect wallet' : 'Connect Nautilus wallet');
        } else {
            setShowWalletDisconnectError(true);
        }
    };

    const dismissGoogleError = () => {
        setShowGoogleDisconnectError(false);
    };

    const dismissWalletError = () => {
        setShowWalletDisconnectError(false);
    };

    return(
        <div className="flex flex-col justify-center items-center w-full"> 
            <div className="w-full flex justify-center mb-3">
                <div className="w-[546px]">
                    <p className="text-sm text-onPrimaryContainer-dark">
                        Email setting
                    </p>
                    <div className="flex flex-col rounded-[1.25rem] bg-surfaceContainer-dark px-8 py-7 mt-4 items-center">
                        <Button 
                            className="w-[482px] mr-1"
                            kind="Tonal"
                            onClick={toggleGoogleButton}>
                            <Image
                                src={google}
                                width={18}
                                height={18}
                                alt="google icon"
                                className="mr-2"
                            />
                            {googleButtonText}
                        </Button>
                    </div>
                    {showGoogleDisconnectError && (
                        <div className="flex flex-col rounded-[1.25rem] bg-surfaceContainer-dark px-8 py-7 mt-4 text-red-300">
                            <div className="flex items-center">
                                <Image
                                    src={error}
                                    width={30}
                                    height={30}
                                    alt="error icon"
                                    className="mr-4"
                                />
                                <p className="flex-1 text-sm">
                                    You can’t disconnect your Google account as this is the only integrated way for your account. You can connect your wallet and then disconnect your Google account.
                                </p>
                            </div>
                            <Button
                                className="mt-4 w-2/6"
                                kind="Outlined"
                                onClick={dismissGoogleError}>
                                Dismiss
                            </Button>
                        </div>
                    )}
                </div>
            </div>


            <div className="w-full flex justify-center mt-3">
                <div className="w-[546px]">
                    <p className="text-sm text-onPrimaryContainer-dark"> 
                        Wallet setting
                    </p>
                    <div className="flex flex-col rounded-[1.25rem] bg-surfaceContainer-dark px-8 py-7 mt-4 items-center">
                        <Button 
                            className="w-[482px] mr-1"
                            kind="Tonal"
                            onClick={toggleNautilusButton}>
                            <Image
                                src={nautilus}
                                width={18}
                                height={18}
                                alt="nautilus icon"
                                className="mr-2"
                            />
                            {nautilusButtonText}
                        </Button>
                    </div>
                    {showWalletDisconnectError && (
                            <div className="flex flex-col rounded-[1.25rem] bg-surfaceContainer-dark px-8 py-7 mt-4 text-red-300 mb-5">
                                <div className="flex items-center">
                                    <Image
                                        src={error}
                                        width={30}
                                        height={30}
                                        alt="error icon"
                                        className="mr-4"
                                    />
                                    <p className="flex-1 text-sm">
                                        You can’t disconnect your wallet as this is the only integrated way for your account. You can connect your Google account and then disconnect your wallet.
                                    </p>
                                </div>
                                <Button
                                    className="mt-4 w-2/6"
                                    kind="Outlined"
                                    onClick={dismissWalletError}>
                                    Dismiss
                            </Button>
                        </div>
                        )}
                </div>
            </div>
        </div>
    );
}
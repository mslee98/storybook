import React from 'react';
import Image from "next/image";

import watchScreenImage from '../../assets/Tailwind/watch-screen-image.png';
import watchScreenImageDark from '../../assets/Tailwind/watch-screen-image-dark.png';

import mobileScreenImage from '../../assets/Tailwind/mockup-1-light.png';
import mobileScreenImageDark from '../../assets/Tailwind/mockup-1-dark.png';

import tabletScreenImage from '../../assets/Tailwind/tablet-mockup-image.png';
import tabletScreenImageDark from '../../assets/Tailwind/tablet-mockup-image-dark.png';

import desktopScreenImage from '../../assets/Tailwind/laptop-screen.png';
import desktopScreenImageDark from '../../assets/Tailwind/laptop-screen-dark.png';

interface DeviceMockupProps {
    // variant?: 'primary' | 'secondary' | 'outline';
    size?: 'watch' | 'mobile' | 'tablet' | 'laptop';
    children?: React.ReactNode;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ 
    size,
    children
}) => {

    return (
        <>
            {size === 'watch' && (
                <>
                    <div className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]"></div>
                    <div className="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
                        <div className="h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[40px] rounded-e-lg"></div>
                        <div className="h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[88px] rounded-e-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden h-[193px] w-[188px]">
                            <Image src={watchScreenImage} className="dark:hidden h-[193px] w-[188px]" alt="watch screen image" />
                            <Image src={watchScreenImageDark} className="hidden dark:block h-[193px] w-[188px]" alt="watch screen image dark" />
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"></div>
                </>
            )}

            {size === 'mobile' && (
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                        <Image src={mobileScreenImage} className="dark:hidden w-[272px] h-[572px]" alt="mobile screen image" />
                        <Image src={mobileScreenImageDark} className="hidden dark:block w-[272px] h-[572px]" alt="mobile screen image dark" />
                    </div>
                </div>
            )}

            {size === 'tablet' && (
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
                        <Image src={tabletScreenImage} className="dark:hidden h-[426px] md:h-[654px]" alt="tablet screen image" />
                        <Image src={tabletScreenImageDark} className="hidden dark:block h-[426px] md:h-[654px]" alt="tablet screen image dark" />
                    </div>
                </div>
            )}

            {size === 'laptop' && (
                <>
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                            <Image src={desktopScreenImage} className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg" alt="desktop screen image" />
                            <Image src={desktopScreenImageDark} className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="desktop screen image dark" />
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                    </div>
                </>
            )}
        </>
    );
};
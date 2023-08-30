import WindowsLogo from './windows/WindowsLogo';
import BrowserLogo from './browser/BrowserLogo';
import React from 'react';


const platforms = {
    'PC (Windows)': <WindowsLogo externalClassName={'item-card__logo'}/>,
    'Web Browser': <BrowserLogo externalClassName={'item-card__logo'}/>,
    'PC (Windows), Web Browser': <div className={'item-card__logo-container'}>
        <WindowsLogo externalClassName={'item-card__logo'}/>
        <BrowserLogo externalClassName={'item-card__logo'}/>
    </div>,
};

export type platformNames = keyof typeof platforms;
export type platformLogos = typeof platforms[platformNames];

export const mathLogo = (platform: platformNames) => platforms[platform];

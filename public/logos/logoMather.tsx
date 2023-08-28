import WindowsLogo from './windows/WindowsLogo';
import BrowserLogo from './browser/BrowserLogo';
import React from 'react';


const platforms = {
    'PC (Windows)': <WindowsLogo externalClassName={'item-card__logo'}/>,
    'Web Browser': <WindowsLogo externalClassName={'item-card__logo'}/>,
};

export type platformNames = keyof typeof platforms;
export type platformLogos = typeof platforms[platformNames];

export const mathLogo = (platform: platformNames) => platforms[platform];

import WindowsLogo from './windows/WindowsLogo';
import BrowserLogo from './browser/BrowserLogo';

const itemPlatforms = {
    'PC (Windows)': <WindowsLogo externalClassName={'item-card__logo'}/>,
    'Web Browser': <BrowserLogo externalClassName={'item-card__logo'}/>,
    'PC (Windows), Web Browser': <div className={'item-card__logo-container'}>
        <WindowsLogo externalClassName={'item-card__logo'}/>
        <BrowserLogo externalClassName={'item-card__logo'}/>
    </div>,
};

export type platformNames = keyof typeof itemPlatforms;

export const mathLogo = (platform: platformNames) => itemPlatforms[platform];

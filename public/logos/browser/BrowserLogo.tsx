import BrowserSVG from './chromiumLogo.svg';
import {Tooltip} from 'antd';

/**
 * Component to render browser logo
 */
function BrowserLogo({externalClassName}: { externalClassName: string }) {
    return (
        <Tooltip placement="bottom" title={'Browser'}>
            <img src={BrowserSVG}
                alt="browser-logo" className={externalClassName}>
            </img>
        </Tooltip>
    );
}

export default BrowserLogo;

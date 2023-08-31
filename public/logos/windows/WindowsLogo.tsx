import WindowsSVG from './windowsLogo.svg';
import {Tooltip} from 'antd';
/**
 * Component to windows logo
 */
function WindowsLogo({externalClassName} : {externalClassName: string}) {
    return (
        <Tooltip placement="bottom" title={'Windows'}>
            <img src={WindowsSVG}
                alt="windows-logo" className={externalClassName}>
            </img>
        </Tooltip>
    );
}

export default WindowsLogo;

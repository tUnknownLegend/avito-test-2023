import WindowsSVG from './windowsLogo.svg';
function WindowsLogo({externalClassName} : {externalClassName: string}) {
    return (
        <img src={WindowsSVG}
            alt="windows-logo" className={externalClassName}>
        </img>
    );
}

export default WindowsLogo;

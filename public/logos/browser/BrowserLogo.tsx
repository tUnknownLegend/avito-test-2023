import BrowserSVG from './chromiumLogo.svg';

function BrowserLogo({externalClassName}: { externalClassName: string }) {
    return (
        <img src={BrowserSVG}
            alt="browser-logo" className={externalClassName}>
        </img>
    );
}

export default BrowserLogo;

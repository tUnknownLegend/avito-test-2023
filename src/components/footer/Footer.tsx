import './Footer.scss';
import {Link} from 'react-router-dom';

const footerData = [
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
        link: 'https://github.com/tUnknownLegend',
        label: 'tUnknownLegend',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Telegram_X_2019_Logo.svg',
        link: 'https://t.me/tUnknownLegend',
        label: '@tUnknownLegend',
    },
    {
        icon:
            'https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png',
        link: 'https://www.linkedin.com/in/vlad-pinevich',
        label: 'Vlad Pinevich',
    },
];
function MyFooter() {
    const footerItems = footerData.map((footerItem) => (
        <Link className="footer-item" to={footerItem.link} key={footerItem.link}>
            <img className="footer-image" alt={footerItem.label + ' label'} src={footerItem.icon}/>
            <span>{footerItem.label}</span>
        </Link>
    ));
    return (
        <div className="footer">
            {footerItems}
        </div>
    );
}

export default MyFooter;

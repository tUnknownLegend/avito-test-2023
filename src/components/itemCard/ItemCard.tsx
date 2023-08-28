import './ItemCard.scss';
import {catalogItem} from '../../pages/catalog/CatalogPage.tsx';
import {mathLogo, platformNames} from '../../../public/logos/logoMather.tsx';
import {Link} from 'react-router-dom';

type ItemCard = {
    item: catalogItem
};

function ItemCard({item} : ItemCard) {
    item.platform;
    return (
        <Link to={`game/${item.id}`} className="item-card">
            <img className="item-card__image"
                src={item.thumbnail}
                alt={item.title + '-thumbnail'}>
            </img>

            <span className="item-card__title">
                {item.title}
            </span>

            <div className="item-card__genre-container">
                <span className="item-card__genre">
                    {item.genre}
                </span>
            </div>

            <span className="item-card__    release-date">
                {item.release_date}
            </span>

            {mathLogo(item.platform)}
        </Link>
    );
}

export default ItemCard;

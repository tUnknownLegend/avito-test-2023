import './ItemCard.scss';
import {catalogItem} from '../../pages/catalog/CatalogPage.tsx';
import {mathLogo, platformNames} from '../../../public/logos/logoMather.tsx';
import {Link} from 'react-router-dom';

type ItemCard = {
    item: catalogItem
};

const transformDate = (date: string) => new Date(date).toLocaleDateString('ru-RU');

function ItemCard({item} : ItemCard) {
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
                {transformDate(item.release_date)}
            </span>

            {mathLogo(item.platform)}
        </Link>
    );
}

export default ItemCard;

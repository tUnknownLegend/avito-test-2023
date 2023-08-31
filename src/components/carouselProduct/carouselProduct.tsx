import {Carousel} from 'antd';
import './carouselProduct.scss';

/**
 * Component to render carousel of products' photos
 */
function CarouselProduct({imgs} : {imgs: Array<string>}) {
    const carouselContent = imgs.map((img) => (
        <img className="product-images" src={img} alt={img} key={img}>
        </img>));

    return (
        <div className="product-img-container">
            <Carousel autoplay={true}>
                {carouselContent}
            </Carousel>
        </div>
    );
}

export default CarouselProduct;

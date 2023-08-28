import {Carousel} from 'antd';
import './carouselProduct.scss';

function CarouselProduct({imgs} : {imgs: Array<string>}) {
    const carouselContent = imgs.map((img) => (
        <img className="product-images" src={img} alt={img} key={img}>
        </img>));

    return (
        <Carousel className="img-container">
            {carouselContent}
        </Carousel>
    );
}

export default CarouselProduct;

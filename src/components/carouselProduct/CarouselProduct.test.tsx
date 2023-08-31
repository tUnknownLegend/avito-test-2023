import {render} from '@testing-library/react';
import CarouselProduct from './carouselProduct.tsx';

afterEach(jest.clearAllMocks);

const imgs = [
    'https://www.freetogame.com/g/181/thumbnail.jpg',
    'https://www.freetogame.com/g/181/8BitMMO-1.jpg',
];
describe('Carousel Product test', () => {
    it('should render correctly', () => {
        const rendered = render(<CarouselProduct imgs={imgs}/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

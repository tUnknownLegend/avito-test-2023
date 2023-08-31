import {render} from '@testing-library/react';
import ItemCard from './ItemCard.tsx';
import {platformNames} from '../../../public/logos/logoMather.tsx';

afterEach(jest.clearAllMocks);

const item = {
    id: 123,
    title: 'string',
    thumbnail: 'https://www.freetogame.com/g/268/thumbnail.jpg',
    genre: 'string',
    platform: 'Web Browser' as platformNames,
    release_date: '2023-05-10',
};
describe('Item Card test', () => {
    it('should render correctly', () => {
        const rendered = render(<ItemCard item={item}/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

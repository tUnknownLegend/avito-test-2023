import {render} from '@testing-library/react';
import CatalogPage from './CatalogPage.tsx';

afterEach(jest.clearAllMocks);
describe('Catalog Page test', () => {
    it('should render correctly', () => {
        const rendered = render(<CatalogPage/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

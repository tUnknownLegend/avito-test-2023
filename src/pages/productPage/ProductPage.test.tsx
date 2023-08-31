import {render} from '@testing-library/react';
import ProductPage from './ProductPage.tsx';

afterEach(jest.clearAllMocks);
describe('Product Page test', () => {
    it('should render correctly', () => {
        const rendered = render(<ProductPage/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

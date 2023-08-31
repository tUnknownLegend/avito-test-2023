import {render} from '@testing-library/react';
import ProductBreadcrumb from './ProductBreadcrumb.tsx';

afterEach(jest.clearAllMocks);
describe('Product Breadcrumb test', () => {
    it('should render correctly', () => {
        const rendered = render(<ProductBreadcrumb title={'New long title'}/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

import {render} from '@testing-library/react';
import SiderCategory from './SiderCategory.tsx';

afterEach(jest.clearAllMocks);
describe('Sider Category test', () => {
    it('should render correctly', () => {
        const rendered = render(<SiderCategory />);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

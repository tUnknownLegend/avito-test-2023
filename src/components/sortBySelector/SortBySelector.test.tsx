import {render} from '@testing-library/react';
import SortBySelector from './SortBySelector.tsx';

afterEach(jest.clearAllMocks);
describe('Sort By Selector test', () => {
    it('should render correctly', () => {
        const rendered = render(<SortBySelector/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

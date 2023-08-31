import {render} from '@testing-library/react';
import Header from './Header.tsx';

afterEach(jest.clearAllMocks);
describe('Header test', () => {
    it('should render correctly', () => {
        const rendered = render(<Header/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

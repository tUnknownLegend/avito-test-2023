import {render} from '@testing-library/react';
import ErrorPage from './ErrorPage.tsx';

afterEach(jest.clearAllMocks);
describe('Error Page test', () => {
    it('should render correctly', () => {
        const rendered = render(<ErrorPage/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

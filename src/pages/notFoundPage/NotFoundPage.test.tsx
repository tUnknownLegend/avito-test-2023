import {render} from '@testing-library/react';
import NotFoundPage from './NotFoundPage.tsx';

afterEach(jest.clearAllMocks);
describe('Not Found Page test', () => {
    it('should render correctly', () => {
        const rendered = render(<NotFoundPage/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

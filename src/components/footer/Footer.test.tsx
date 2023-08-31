import {render} from '@testing-library/react';
import Footer from './Footer.tsx';

afterEach(jest.clearAllMocks);
describe('Footer test', () => {
    it('should render correctly', () => {
        const rendered = render(<Footer/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

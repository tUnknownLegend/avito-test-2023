import {render} from '@testing-library/react';
import SpinIndicator from './SpinIndicator.tsx';

afterEach(jest.clearAllMocks);
describe('Spin Indicator test', () => {
    it('should render correctly', () => {
        const rendered = render(<SpinIndicator/>);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

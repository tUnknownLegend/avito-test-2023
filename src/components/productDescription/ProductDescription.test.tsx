import {render} from '@testing-library/react';
import ProductDescription from './ProductDescription.tsx';

afterEach(jest.clearAllMocks);

const firstTestItem = {
    className: 'product-system-requirements',
    title: 'System requirements',
    data: {
        os: 'Windows XP ',
        processor: '?',
        memory: '2 GB RAM ',
        graphics: 'Integrated graphics is fine',
        storage: '200 MB available space ',
    },
};

describe('Product Description test', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    });

    it('should render correctly PC version', () => {
        const rendered = render(
            <ProductDescription
                title={firstTestItem.title}
                className={firstTestItem.className}
                data={firstTestItem.data}
            />,
        );

        expect(rendered.asFragment()).toMatchSnapshot();
    });
    it('should render correctly Browser version', () => {
        const rendered = render(
            <ProductDescription
                title={firstTestItem.title}
                className={firstTestItem.className}
                data={{}}
            />,
        );

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});

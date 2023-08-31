import {firstLetterUppercase} from '../string.ts';

afterEach(jest.clearAllMocks);
describe('first Letter Uppercase function test', () => {
    it('should make uppercase from lower', () => {
        expect(firstLetterUppercase('lower')).toStrictEqual('Lower');
    });

    it('should stay uppercase', () => {
        expect(firstLetterUppercase('UPPER')).toStrictEqual('UPPER');
    });

    it('should handle empty string', () => {
        expect(firstLetterUppercase('')).toStrictEqual('');
    });
});

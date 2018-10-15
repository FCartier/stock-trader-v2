import formatSearchData from '../utils/formatSearchData';
import unformattedSearchData from "./unformattedSearchData";
import formattedSearchData from "./formattedSearchData";

describe('testing search format utility', () => {
    test('should calculate max value from formatted data', () => {
        expect(formatSearchData(unformattedSearchData)).toEqual(formattedSearchData)
    })
})

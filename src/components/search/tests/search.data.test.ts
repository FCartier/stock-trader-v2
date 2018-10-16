import formatSearchData from '../utils/formatSearchData';
import unformattedSearchData from "./unformattedSearchData";
import formattedSearchData from "./formattedSearchData";
import {api} from '../../../utils/apiUtil';

// describe('testing search format utility', () => {
//     test('should calculate max value from formatted data', () => {
//         expect(formatSearchData(unformattedSearchData)).toEqual(formattedSearchData)
//     })
// })

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('the data is peanut butter', async () => {
    expect.assertions(1);
    await expect(api.getSymbols()).resolves.toBe(unformattedSearchData);
  });
  


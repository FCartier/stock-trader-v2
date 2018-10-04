import formatSearchData from "../components/search/utils/formatSearchData"

import unformattedSearchData from "./data/search/unformattedSearchData.json"
import formattedSearchData from "./data/search/formattedSearchData.json"



describe('testing search format utility', () => {
    test('should calculate max value from formatted data', () => {
        expect(formatSearchData(unformattedSearchData)).toEqual(formattedSearchData)
    })
})
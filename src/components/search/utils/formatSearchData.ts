import { SymbolItemTesting } from '../types';
import { format } from 'util';

const formatSearchData = (data: SymbolItemTesting[]) => {
  const formattedData: Array<{value: string, label: string}> = []
  if(data){
    data.forEach((item: SymbolItemTesting) => {
      formattedData.push({
        value: item.symbol, 
        label: `${item.name} (${item.symbol})`
      })
    })
  }

  return formattedData;
}

export default formatSearchData;


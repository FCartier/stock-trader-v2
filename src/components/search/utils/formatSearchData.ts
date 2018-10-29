import { SymbolItem } from '../types';

const formatSearchData = (data: SymbolItem[]) => {
  const formattedData: Array<{value: string, label: string}> = []
  if(data){
    data.forEach((item: SymbolItem) => {
      formattedData.push({
        value: item.symbol, 
        label: `${item.name} (${item.symbol})`
      })
    })
  }

  return formattedData;
}

export default formatSearchData;


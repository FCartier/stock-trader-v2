const formatSearchData = (data: any) => {
  const formattedData: Array<{value: string, label: string}> = []
  if(data){
    data.forEach((item: any) => {
      formattedData.push({
        value: item.symbol, 
        label: `${item.name} (${item.symbol})`
      })
    })
  }
  return formattedData;
}

export default formatSearchData


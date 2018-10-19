const formatSearchData = (data: any) => {
  const formattedData: Array<{value: string, label: string}> = []
  console.log(data)
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


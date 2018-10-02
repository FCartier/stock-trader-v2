const formatSearchData = data => {
  let newObjectsArray = []
  if (data) {
    data.map(item => {
      if (item.symbol) {
        newObjectsArray.push({
          value: item.symbol,
          label: `${item.name} (${item.symbol})`
        })
      }
      return item
    }, {})
  }
  return newObjectsArray
}

export default formatSearchData

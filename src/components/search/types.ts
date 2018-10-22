interface SymbolItem {
    date: string,
    iexId: string, 
    isEnabled: boolean, 
    name: string, 
    type: string
}

export default interface SearchState {
    symbols: SymbolItem[],
    symbol: string
}

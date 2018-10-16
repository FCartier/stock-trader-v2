import React, { Component } from "react";
import Select from "react-virtualized-select";
import "react-virtualized-select/styles.css";
import { selectedSymbol } from "./searchActions";
import { connect } from "react-redux";
import formatSearchData from "./utils/formatSearchData";

// @ts-ignore
import * as searchIcon from "./images/search.png";

interface ISearchProps {
    results: any;    
    selectedSymbol: (input: string) => void;
}

interface ISearchState {
    selectedOption: null | object
}

class Search extends Component <ISearchProps, ISearchState> {
  constructor (props: ISearchProps) {
    super(props)
    this.state = {
      selectedOption: null
    }
  }

  public handleChange = (selectedOption: {value: string}) => {
    this.setState({ selectedOption });
    if(selectedOption) {
      this.props.selectedSymbol(selectedOption.value);
    }
  };

  public render() {
    const { selectedOption } = this.state;
    return (
      <div className="full-height">
        <div className="icon-container">
          <img src={searchIcon} alt="search icon" className="search-icon" />
        </div>
        <div className="searchbox-container">
          <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.props.results}
              id="select-component"
            />
        </div>
         
      </div>
    );
  }
}


const mapStateToProps = (state: {search: {symbols: []}}) => {
  return {
    results: formatSearchData(state.search.symbols)
  }
}

const mapDispatchToProps =  {
    selectedSymbol
}

interface IMapProps {
  selectedSymbol: () => any;
}

interface IMapState {
  results: Array<{symbol: string, name: string}>
}

export default connect<IMapState, IMapProps, {}>(mapStateToProps, mapDispatchToProps)(Search);

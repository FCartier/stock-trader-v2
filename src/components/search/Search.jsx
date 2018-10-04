import React, { Component } from "react";
import Select from "react-virtualized-select";
import "react-virtualized-select/styles.css";
import { selectedSymbol } from "./searchActions";
import { connect } from "react-redux";
import formatSearchData from "./utils/formatSearchData";
import * as searchIcon from "./images/search.png";

class Search extends Component {
  state = {
    selectedOption: null
  }; 

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    if(selectedOption)
      this.props.selectedSymbol(selectedOption.value);
  };

  render() {
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

const mapStateToProps = state => {
  return {
    results: formatSearchData(state.search.symbols)
  }
}

const mapDispatchToProps =  {
    selectedSymbol
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

import React, { Component } from "react";
import Select from "react-virtualized-select";
import "react-virtualized-select/styles.css";
import { handleSearch, getSymbols } from "./searchActions";
import { connect } from "react-redux";
import formatSearchData from "./utils/formatSearchData";
import * as searchIcon from "./images/search.png";

class Search extends Component {
  state = {
    selectedOption: null
  };

  componentDidMount() {
    this.props.getSymbols();
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    if(selectedOption)
      this.props.handleSearch(selectedOption.value);
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
  console.log(state.search.symbols)
  console.log(formatSearchData(state.search.symbols))
  return {
    results: formatSearchData(state.search.symbols)
  }
}

const mapDispatchToProps =  {
    handleSearch,
    getSymbols
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

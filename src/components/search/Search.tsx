import * as React from "react";
import Select from "react-virtualized-select";
import "react-virtualized-select/styles.css";
import { selectedSymbol, SelectedSymbol } from "./searchActions";
import { connect } from "react-redux";
import formatSearchData from "./utils/formatSearchData";

import "./style.css";
import { Route } from "react-router-dom";

/* tslint:disable */
import * as searchIcon from "./images/search.png";

interface ISearchProps {
  /// TODO
  results: any;
  selectedSymbol: (input: string) => void;
  symbol: string;
}

interface ISearchState {
  selectedOption: null | object | string;
}

export class Search extends React.Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = {
      selectedOption: null
    };
  };

  public handleSubmit = (history: any, selectedOption: any) => {
    this.setState({
      selectedOption: selectedOption.value
    });
    console.log(selectedOption.value);
    const component = history.location.pathname.split("/")[2];
    if (component) {
      history.replace(`/${selectedOption.value}/${component}`);
    } else {
      history.replace(`/${selectedOption.value}`);
    }
  };

  public shouldUpdateSearch() {
    if (this.props.symbol !== "" && this.state.selectedOption == null) {
      this.setState({
        selectedOption: this.props.symbol.toUpperCase()
      });
    }
  }

  public render() {
    const { selectedOption } = this.state;
    this.shouldUpdateSearch();
    return (
      <div className="full-height">
        <div className="icon-container">
          <img src={searchIcon} alt="search icon" className="search-icon" />
        </div>
        <div className="searchbox-container">
          <Route
            render={({ history }) => (
              <Select
                value={selectedOption}
                onChange={selectedOption =>
                  this.handleSubmit(history, selectedOption)
                }
                options={this.props.results}
                id="select-component"
              />
            )}
          />
        </div>
      </div>
    );
  }
}

interface stateToProps {
  search: {
    symbols: [];
    symbol: string;
  };
}

const mapStateToProps = (state: stateToProps) => {
  return {
    results: formatSearchData(state.search.symbols),
    symbol: state.search.symbol
  };
};

const mapDispatchToProps = {
  selectedSymbol
};

interface IMapProps {
  selectedSymbol?: (input: string) => SelectedSymbol;
}

interface IMapState {
  results: Array<{ value: string; label: string }>;
  symbol: string;
}

export default connect<IMapState, IMapProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Search);

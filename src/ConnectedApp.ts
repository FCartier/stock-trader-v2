import App from './App'
import { connect } from 'react-redux'
import { selectedSymbol } from './components/search/searchActions'


const mapStateToProps = (state: {}, ownProps: any ) => {
  return {
      symbol: ownProps.match.params.symbol
  }
};


export default connect(
    mapStateToProps,
    { selectedSymbol }
)(App);

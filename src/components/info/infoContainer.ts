import StockInfo from './StockInfo'
import { connect } from 'react-redux'
import { GlobalState } from '../../StoreTypes'

const mapStateToProps = (state: GlobalState) => ({
  keystats: state.keystats
})

export default connect(
    mapStateToProps,
    null
  )(StockInfo)
import Market from './MarketFooter'
import { connect } from 'react-redux'
import { GlobalState } from '../../StoreTypes'

const mapStateToProps = (state: GlobalState) => ({
  market: state.market.market,
  status: state.market.status
})

export default connect(
    mapStateToProps,
    null
  )(Market)
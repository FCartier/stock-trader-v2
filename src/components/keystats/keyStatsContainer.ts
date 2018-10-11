import KeyStats from './KeyStats'
import { connect } from 'react-redux'
import { GlobalState } from '../../StoreTypes'

const mapStateToProps = (state: GlobalState) => ({
  keystats: state.keystats
})

export default connect(
    mapStateToProps,
    null
  )(KeyStats)
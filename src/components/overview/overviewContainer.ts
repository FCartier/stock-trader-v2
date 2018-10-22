import Overview from './Overview'
import { connect } from 'react-redux'
import { GlobalState } from '../../StoreTypes'

const mapStateToProps = (state: GlobalState) => ({
  overview: state.overview.overview,
  status: state.overview.status
})

export default connect(
    mapStateToProps,
    null
  )(Overview)
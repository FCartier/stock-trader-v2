import Overview from './Overview'
import { connect } from 'react-redux'
import { GlobalState } from '../../StoreTypes'

const mapStateToProps = (state: GlobalState) => ({
  overview: state.overview
})

export default connect(
    mapStateToProps,
    null
  )(Overview)
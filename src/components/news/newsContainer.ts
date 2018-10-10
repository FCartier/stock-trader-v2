import News from './News'
import { connect } from 'react-redux'
import { GlobalState } from '../../StoreTypes'

const mapStateToProps = (state: GlobalState) => ({
  news: state.news
})

export default connect(
    mapStateToProps,
    null
  )(News)
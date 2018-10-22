import News from './News'
import { connect } from 'react-redux'
import { GlobalState } from '../../StoreTypes'

const mapStateToProps = (state: GlobalState) => ({
  news: state.news.news,
  status: state.news.status
})

export default connect(
    mapStateToProps,
    null
  )(News)
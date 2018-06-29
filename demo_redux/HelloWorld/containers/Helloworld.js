import { connect } from 'react-redux'
import { helloWorld_action } from '../actions'
import Link from '../components/Helloworld'


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(helloWorld_action(ownProps.log))
})

export default connect(
    mapDispatchToProps
)(Link)

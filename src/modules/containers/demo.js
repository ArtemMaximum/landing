import { connect } from 'react-redux'
import NewPage from '../demo/components/DemoPage'

const mapStateToProps = (state, ownProps) => {
  return {
    message: 'well behave !!!',
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const DemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPage)

// initState is a function which is run before server, and keep consistency as a thunk middleware, and return a promise
DemoContainer.initState = (store, req, res) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}

export default DemoContainer
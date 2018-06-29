import jsonAPIActionCreator from '../../src/actions/jsonAPI'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

const SERVER_REQUEST_TIME = 5000

// eslint-disable-next-line no-undef
describe('api action creator', () => {
  // eslint-disable-next-line no-undef
  it('get apiJSON title', (done) => {
    let mockData = [{ title: '_title' }]
    fetch.mockResponse(JSON.stringify(mockData))

    const store = mockStore({})
    // const expectedActions = [
    //   { type: 'SET_API_DATA', products: mockData }
    // ]

    store.dispatch(jsonAPIActionCreator.getJsonAPI())
      .then((res) => {
        // expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  }, SERVER_REQUEST_TIME)
})
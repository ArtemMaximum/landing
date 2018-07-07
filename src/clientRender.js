import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { RootTemplate } from './ui'
import { themeAquamarine, globalStyles } from './theme'
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import _reducers from './reducers'
import matchConfig from './matchConfig'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose

const initState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(
  _reducers,
  initState,
  composeEnhancers(applyMiddleware(thunk)),
)

const rootRender = () => {
  // eslint-disable-next-line no-unused-expressions
  globalStyles()

  ReactDOM.render(
    <ThemeProvider theme={themeAquamarine}>
      <BrowserRouter location={window.location.pathname} context={{}}>
        <RootTemplate>
          <Provider store={store}>
            <Switch>
              {
                matchConfig.map((route, index) => <Route key={`route${index}`} {...route} />)
              }
            </Switch>
          </Provider>
        </RootTemplate>
      </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
  )
}

rootRender()
import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import './assets/css/normalized.css'
import './assets/css/common.css'
import './index.css'
import App from './views/App/App'
import registerServiceWorker from './registerServiceWorker'
// import store from './store'

// const storeObj = createStore(store)

ReactDOM.render(
  <App />,
 document.getElementById('root'))
registerServiceWorker()

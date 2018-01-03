import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { reducers } from './modules/index';
import { routes } from './routes'

// import reducers from './modules'
// import routes from './routes'

ReactDOM.render((
    <Provider store={createStore(reducers)}>
        { routes }
    </Provider>
), document.getElementById('content'))
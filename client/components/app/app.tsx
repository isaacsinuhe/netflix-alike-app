import * as React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Movies from '../movies/movies'
import { Switch } from 'react-router';
const styles = require('./app.css')

class App extends React.Component {
    render() {
        return (
            <div className={ styles.app }>
                <Switch>
                    <Route exact path="/" component={Movies} />
                    <Route path="/movies" component={Movies} />
                </Switch>
            </div>
        )
    }
}

export default connect()(App)

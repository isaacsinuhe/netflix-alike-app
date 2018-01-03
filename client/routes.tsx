import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app/app'
import Movies from './components/movies/movies'
import Movie from './components/movie/movie'

const styles = require('./components/app/app.css')

export const routes = (
    <BrowserRouter>
        <Route path="/" component={ App }/>
    </BrowserRouter>
)

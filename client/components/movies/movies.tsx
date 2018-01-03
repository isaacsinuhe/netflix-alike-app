import * as React from 'react'
import { bindActionCreators, Store } from 'redux'
import { connect } from 'react-redux'
import { Link, RouteComponentProps, Route} from 'react-router-dom'
import { fetchMoviesActionCreator } from '../../modules/movies';
import Movie from '../movie/movie'
import movies from '../../movies' // data mock
import { MoviesProps, MoviesState, MoviesStateProps, MoviesDispatchProps, MoviesOwnProps, NetflixStore } from '../../../typings';
import axios from 'axios'
const clean = require('clean-tagged-string')
const styles = require('./movies.css')



class Movies extends React.Component <MoviesProps, MoviesState> {
    componentWillMount () {
        const query = clean`{
            movies {
                title,
                cover
            }
        }`

        axios.get(`/q?query=${query}`).then(response => {
            this.props.fetchMovies(response.data.data.movies)
        })
    }
    render () {
        const { children, movies = [], params = {} } = this.props        
        return (
            <div className={styles.movies}>
                <div className={params.id ? styles.listHidden : styles.list}>
                    {movies.map((movie, index) => (
                        <Link
                            key={index}
                            to={`/movies/${index + 1}`}>
                            <div
                                className={styles.movie}
                                style={{ backgroundImage: `url(${movie.cover})` }} />
                        </Link>
                    ))}
                </div>
                <Route path="/movies/:id" component={Movie} />
            </div>
        )
    }
}

export default connect<MoviesStateProps, MoviesDispatchProps, MoviesOwnProps, NetflixStore>(({ movies }) => ({
    movies: movies.all
}), {
    fetchMovies: fetchMoviesActionCreator
})(Movies)

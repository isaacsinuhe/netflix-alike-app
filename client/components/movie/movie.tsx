import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const clean = require('clean-tagged-string')
import axios from 'axios'
import { fetchMovieActionCreator } from '../../modules/movies'
import { MovieStateProps, MovieDispatchProps, NetflixStore, MovieOwnProps, MovieProps, MovieState, IMovie, Artist, MoviesState } from '../../../typings';
import { RouteComponentProps } from 'react-router';
const styles = require('./movie.css')

class Movie extends React.Component<MovieProps, MovieState>{
    componentWillMount() {
        this.fetchMovie(this.props.match.params.id)
    }

    componentWillUpdate(next: MovieProps) {
        if (this.props.match.params.id !== next.match.params.id) {
            this.fetchMovie(next.match.params.id)
        }
    }

    fetchMovie (id = this.props.match.params.id) {
        const query = clean`{
      movie(index:${id}) {
        title,
        cover,
        year,
        starring {
          name
        }
      }
    }`

        axios.get(`/q?query=${query}`).then(({data: {data: {movie}}}) => {
            this.props.fetchMovie(movie)
        })
    }

    render() {
        const movie = this.props.movie || { starring: [] }
        console.log(this.props);
        
        return (
            <div className={styles.movie}
                style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})` }}>
                <div
                    className={styles.cover}
                    style={{ backgroundImage: `url(${movie.cover})` }} />
                <div className={styles.description}>
                    <div>{movie.title}</div>
                    <div>{movie.year}</div>
                    <div>
                        <div className={styles.title}>{movie.title}</div>
                        <div className={styles.year}>{movie.year}</div>
                        <div className={styles.starring}>
                            {
                                movie.starring && movie.starring.map((actor, index) => (
                                    <div
                                        key={index}
                                        className={styles.actor}
                                        >
                                        {actor.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Link
                    className={styles.closeButton}
                    to="/movies">
                </Link>
            </div>
        )
    }
}

export default connect<MovieStateProps, MovieDispatchProps, MovieOwnProps, NetflixStore>((storeState) => {
    return ({
    movie: storeState.movies.current
    })}, {
        fetchMovie: fetchMovieActionCreator
    })(Movie)

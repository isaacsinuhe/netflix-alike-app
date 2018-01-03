import { ReducerMap, createActions, handleActions, Reducer, BaseAction } from 'redux-actions'
import { IMovie, MovieState, MoviesAction } from '../../typings';

const FETCH_MOVIES = 'movies/FETCH_MOVIES'
const FETCH_MOVIE = 'movies/FETCH_MOVIE'

const initialState: MovieState = {
    movies: [] as IMovie[],
    movie: {} as IMovie,
    all: [] as IMovie[],
    current: {} as IMovie
}



// export const reducer = {
export const fetchMoviesActionCreator = (movies: IMovie[]) => {
    
    return (
    {
        type: FETCH_MOVIES,
        payload: { movies }
    }
)}

export const fetchMovieActionCreator = (movie: IMovie) => (
    {
        type: FETCH_MOVIE,
        payload: { movie }
    }
)

export const reducer = handleActions<MovieState, MoviesAction>(
    {
        [FETCH_MOVIES]: (state, action) => ({
                ...state,
                all: action.payload ? action.payload.movies : state.movies
            })
        ,
        [FETCH_MOVIE]: (state, action) => (
            {
                ...state,
                current: action.payload ? action.payload.movie :
                    state.current
            }
        )
    },
    initialState
)
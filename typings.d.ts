import { Reducer } from "./node_modules/redux/index";
import { RouteComponentProps } from "react-router";

declare module "*.json" {
    const value: any;
    export default value;
}

interface NetflixStore {
    movies: MovieState
}

type Artist = { name?: string };

export interface IMovie {
    title: string
    cover: string
    year: string
    cost: number
    starring?: Array<Artist>
}

export interface MovieState {
    movies: IMovie[]
    movie: IMovie,
    all: IMovie[],
    current: IMovie
}

export interface MoviesAction {
    movies: IMovie[],
    movie: IMovie
}

interface MoviesStateProps {
    movies: IMovie[]
}
interface MoviesDispatchProps {
    fetchMovies: (movies: IMovie[]) => any
}
interface MoviesOwnProps {
    params: any
}

type MoviesProps = MoviesStateProps & MoviesDispatchProps & MoviesOwnProps
interface MoviesState { }

interface MovieStateProps {
    movie: IMovie
}
interface MovieDispatchProps {
    fetchMovie: (movie: IMovie) => any
}
interface MovieOwnProps extends RouteComponentProps < { id: number } > {
}

type MovieProps = MovieStateProps & MovieDispatchProps & MovieOwnProps
interface MoviesState { }
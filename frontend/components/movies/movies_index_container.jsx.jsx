import { connect } from 'react-redux'
import { fetchGenres } from '../../actions/genre_actions';
import { fetchMovies } from '../../actions/movie_actions'
import MoviesIndex from './movies_index'


// const filterGenres = (movies, genres)=> {
//   const moviesList = [];
//   let newGenres = [...genres];
//   [
//     {id: 1, genre: "animation", movieIds: [1], movieList: [{id: 1, name: "demon slayer", }]},
//     {id: 2, genre: "action", movieIds: [1]}
//   ]
//   genres.forEach(genre => {
//     for (let i = 0; i < genre.movieIds.length; i++) {
//       for(let j = 0; j < movies.length; j++) {
//         if (movies[j].id === genre.movieIds[i]) {
//           moviesList.push(movies[j]);
//         }
//       }
//       newGenres[i].moviesList = moviesList;
//       moviesList = [];
//     }
//   })
//   console.log("genres", newGenres);
//   return null;
// }

const mSTP = (state) => {
  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres)
  }
};

const mDTP = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres())
  }
};

export default connect(mSTP, mDTP)(MoviesIndex)
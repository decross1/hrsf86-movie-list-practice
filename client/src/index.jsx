import React from 'react';
import ReactDOM  from 'react-dom';
import Search from './components/Search.jsx';
import Movie from './components/Movie.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

window.movies = movies;

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies, 
      searchMovies: movies, 
    }

    this.filterMovies = this.filterMovies.bind(this);
  }

  filterMovies (movieArray) {
    this.setState({
      searchMovies: movieArray
    })
  }

  render() {
    return (
      <div>
        <div style={{marginBottom: 20}}> Search for a Movie! 
          <Search 
            searchMovies={this.state.searchMovies}
            filterMovies={this.filterMovies}
            movies={this.state.movies}
          />
        </div>
        
        <div> The actual list will go here </div>
          {this.state.searchMovies.map((movie) => <Movie movie={movie} key={movie.title}/> )}
      </div>
    )
  }
}

ReactDOM.render( <MovieList movies={window.movies} />, document.getElementById('app'));







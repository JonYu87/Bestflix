# BestFlix README

[Bestflix](https://bestflix1.herokuapp.com/#/) is a clone of [Netflix](https://www.netflix.com/). Allows users to stream their favorite movies anywhere!



# Technologies Used

* React/Redux
* Ruby on Rails
* PostgreSQL
* GitHub
* Heroku
* AWS

# Features 

* Bestflix allows users to sign in, create an account or try out the site with a demo login! 

* Once logged in, user can then browse a library of movies avaliable and see details regarding the movie.

* Users can play the movie they want to view!

```javascript

import React from 'react';


class MovieShow extends React.Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId)
  }
  
  render () {
    if (!this.props.movie) {
      return null;
    } else {

      return (
        <div>
          <div className="video-show-container">
            <video src={this.props.movie.video} 
            controls autoPlay
            >
            </video>
          </div>
      </div>
    )
  }
}
};
```

export default MovieShow;

# Features to be improved upon/implemented in the future!

* The ability for users to view movies in the specific genres they choose

* The ability for users to search for the movies they want to watch 

* A more streamlined UI with better navigation!

* The ability for the user to create a profile that they can then use to save movies into a favorites list or a watch later list 





import React from 'react';
import Movie from './Movie'

class Movies extends React.Component{  
    render() {
        return (
            <div className="row">
                {this.props.DBMovies.map((item, i) => <Movie pro={item} key={i} />)}
            </div>
        )
    }
}

export default Movies;
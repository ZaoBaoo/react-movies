import React from 'react';
import Movies from '../components/Movies';

class Main extends React.Component {
    state = {
        DBMovies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=f898f5b9&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({DBMovies: data.Search}))
    }

    // Render =================================
    render() {
        const { DBMovies } = this.state;
        return (
            <main className='container content'>
                {DBMovies.length ?
                (<Movies DBMovies={DBMovies} />) :
                <h3>Loading...</h3>
                }
                
            </main>
        )
    }
}
export { Main }
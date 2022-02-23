import React from 'react';
import Movies from '../components/Movies';

class Main extends React.Component {
    state = {
        DBMovies: []
    }

    componentDidMount() {
        this.getDBMovies();
        console.log('Mount');
    }

    getDBMovies = async () => {
            console.log('fetch');
            let DBMovies = await fetch('http://www.omdbapi.com/?apikey=78584b3c&s=matrix');
            DBMovies = await DBMovies.json();
            this.setState({DBMovies: DBMovies.Search});
    }

    // Render =================================
    render() {
        const { DBMovies } = this.state;
        return (
            <main className='container content'>
                <Movies DBMovies={DBMovies} />
            </main>
        )
    }
}

export { Main }
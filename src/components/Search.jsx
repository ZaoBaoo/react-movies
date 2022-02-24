import React from 'react';

class Search extends React.Component {
    state = {
        search: ''
    }

    handleKey = (e) => {
        if(e.code === 'Enter' && this.state.search !== '') {
            this.props.getDBMovies(this.state.search)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        placeholder='search'
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => {this.setState({search: e.target.value})}}
                        onKeyDown={this.handleKey}
                    />
                    <button 
                        className="waves-effect waves-light btn search-btn"
                        onClick={() => this.props.getDBMovies(this.state.search)}
                    >
                    search
                    </button>
                </div>
            </div>
        )
    }
}

export default Search;
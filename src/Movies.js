import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

export default class Movies extends React.Component {
    state = {
        movies: [],
        error: '',
        movie: []
    }

    
    async componentDidMount() {
        const response = await fetch('http://localhost:3001/movies')
        await response.json()
        .then(
            data => {
            this.setState({ movies: data })},
            error => {
                this.setState({ error: 'Unable to load movies'})
            })
        }
    
    render() {
        const movieList = this.state.movies.map(movie => {
            return <li><img src={movie.poster} alt="nothing to show" /></li>
        })

        return (
            <div className="Movies">
                <h1 className="App-header">GMDB </h1>
                {this.state.movies.length != 0 ? (
                    <ul>
                        {movieList}
                    </ul>
                ) :
                    <p>No movies to display</p>
                }
            </div>
        )
    }
}
import React from 'react';
import { render } from '@testing-library/react';
import Movies from './Movies';
import { shallow } from 'enzyme'

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe('Movies displayed', () => {

  test('renders without crashing', () => {
    const wrapper = shallow(<Movies />)
    expect(wrapper.length).toBe(1)
  })

  // test nothing is displayed
  
  test('displays message when there are no movies', () => {
    const wrapper = shallow(<Movies />)
    const movies = []
    wrapper.setState({movies: movies})
  
    expect(wrapper.text()).toContain('Unable to load movies')
  
  })
  /*
  // display a movie poster
  test('displays a movie poster', async () => {
    // setup
    //const poster = "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"
    const moviePoster = "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"
    const fetchMock = jest.fn()
    const oldFetch = global.fetch
    // const movie 
    global.fetch = fetchMock
    fetchMock.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            poster: moviePoster 
             //poster: movie.poster
          })
        }
      })
    })

    const wrapper = shallow(<Movies />)
    await flushPromises()

    // exercise
     wrapper.update()

    // assert
    expect(fetchMock).toHaveBeenCalledWith("https:/localhost:3001/movies")
    expect(wrapper.state("poster")).toBe(moviePoster)
    expect(wrapper.text()).toBe(moviePoster)

    // teardown
    global.fetch = oldFetch

    // display all movie posters

    // display all movie posters with 4 across (in a table)

  })
*/
  test('displays "No movies to display" when API responds with status 500', async () => {
    //Setup
    const expectedStatusCode = 500
    const expectedErrorMessage = 'Unable to load movies'
    const fetchMock = jest.fn()
    const oldFetch = global.fetch
    global.fetch = fetchMock
    fetchMock.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.reject({
            status: expectedStatusCode
          })
        }
      })
    })
    //Exercise
    const wrapper = await shallow(<Movies />)

    await wrapper.update()
    //Assert
    expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/movies")
    expect(wrapper.state('error')).toBe(expectedErrorMessage)
    expect(wrapper.text()).toBe(expectedErrorMessage)

    //Teardown
    global.fetch = oldFetch
  })

})

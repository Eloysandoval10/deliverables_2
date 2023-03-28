const moviesDB = [
    {
        id: 1,
        title: 'titanic',
        director: 'james cameron',
        description: 'se hunde el barco',
        year: 1997
    },
    {
        id: 2,
        title: 'terminator',
        director: 'james cameron',
        description: 'ciborg busca a sara conor',
        year: 1984
    },
    {
        id: 3,
        title: 'jurasic park',
        director: 'Steven Spielberg',
        description: 'dinosaurios sueltos',
        year: 1997
    }
]

let movieId = 4

const findAllMovies = async () => {
    return moviesDB
}

const findMovieById = async (id) => {
    const movie = moviesDB.find(movieItem => movieItem.id === id)
    return movie
}

const createMovies = async (movieObj) => {
    const newMovie = {
        id: movieId++,
        title: movieObj.title || 'Untitled',
        director: movieObj.director || 'Anonimous',
        description: movieObj.description || 'lorem ipsum',
        year: movieObj.year || null
    }
    moviesDB.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovies
}
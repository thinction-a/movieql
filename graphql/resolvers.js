// import { people, getById } from "./db";

import { getMovies, getById, addMovie, getByName } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id),
        movieName: (_, { name }) => getByName(name)
    },
    Mutation: {
        addMovie: (_, { name, score, company }) => addMovie( name, score, company )
    }
}

// const resolvers = {
//     Query: {
//         people: () => people,
//         person: (_, { id }) => getById(id)
//     }
// }

export default resolvers;
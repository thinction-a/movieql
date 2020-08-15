// import { people, getById } from "./db";

// const resolvers = {
//     Query: {
//         people: () => people,
//         person: (_, { id }) => getById(id)
//     }
// }

// import { getMovies, getById, addMovie, getByName, deleteMovie } from "./db";

// const resolvers = {
//     Query: {
//         movies: () => getMovies(),
//         movie: (_, { id }) => getById(id),
//         movieName: (_, { name }) => getByName(name)
//     },
//     Mutation: {
//         addMovie: (_, { name, score, company }) => addMovie( name, score, company ),
//         deleteMovie: (_, { id }) => deleteMovie(id)
//     }
// }

import { getMovies } from "./db";
const resolvers = {
    Query: {
        movies: (_,{limit, rating, sort_by}) => getMovies(limit, rating, sort_by)
    }
}

// import { getGames } from "./db";
// const resolvers = {
//     Query: {
//         games: () => getGames()
//     }
// }

export default resolvers;
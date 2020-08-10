// import { people, getById } from "./db";

import { movies, getById } from "./db";

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => getById(id)
    }
}

// const resolvers = {
//     Query: {
//         people: () => people,
//         person: (_, { id }) => getById(id)
//     }
// }

export default resolvers;
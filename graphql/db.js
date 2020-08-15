import fetch from "node-fetch";
// import games from "./youtubeTest";

// let result = games;

// export const getGames = () => 
//     fetch(`${result}`)
//     .then( res => res.json )
//     .then( json => json.data.games );


const API_URL = `https://yts.mx/api/v2/list_movies.json?`;

export const getMovies = (limit, rating, sort_by) => {
    let REQUEST_URL = API_URL;
    REQUEST_URL += `sort_by=${sort_by}`;
    if ( limit > 0 ) {
        REQUEST_URL += `&limit=${limit}`;
    }
    if ( rating > 0 ) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then( res => res.json())
        .then( json => json.data.movies);
};

// export const getMovies = (limit, rating) => 
//     fetch(`${API_URL}`)
//     .then(res => res.json())
//     .then(json => json.data.movies);


// let movies = [
//     {
//         id: 1,
//         name: "Avengers - End Game",
//         score: 99,
//         company: "Marvel Studio"
//     },
//     {
//         id: 2,
//         name: "Ironman",
//         score: 95,
//         company: "Marvel Studio"
//     },
//     {
//         id: 3,
//         name: "parasite",
//         score: 90,
//         company: "Junho Bong"
//     },
//     {
//         id: 4,
//         name: "MadMax, Fury Road",
//         score: 80,
//         company: "20th Fox"
//     },
//     {
//         id: 5,
//         name: "SpierMan",
//         score: 75,
//         company: "Sony"
//     }
// ];

// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter( movie => movie.id === id);
//     return filteredMovies[0]
// }

// export const getByName = name => {
//     const nameFilteredMovies = movies.filter( movie => movie.name === name);
//     return nameFilteredMovies[0]
// }

// export const deleteMovie = ( id ) => {
//     const cleanedMovies = movies.filter( movie => movie.id !== id )
//     if ( movies.length > cleanedMovies.length ) {
//         movies = cleanedMovies;
//         return true;
//     } else {
//         return false;
//     }
// }

// export const addMovie = ( name, score, company ) => {
//     const newMovie = {
//         id: `${movies.length + 1}`,
//         name,
//         score,
//         company
//     };
//     movies.push(newMovie);
//     return newMovie;
// }





// export const people = [
//     {
//         id: "1",
//         name: "Nicolas",
//         age: 18,
//         gender: "male"
//     },
//     {
//         id: "2",
//         name: "Minseok",
//         age: 27,
//         gender: "male"
//     },
//     {
//         id: "3",
//         name: "Wonjung",
//         age: 27,
//         gender: "female"
//     },
//     {
//         id: "4",
//         name: "Jiwon",
//         age: 27,
//         gender: "male"
//     },
//     {
//         id: "5",
//         name: "Soyeon",
//         age: 27,
//         gender: "female"
//     },
//     {
//         id: "6",
//         name: "Ayeong",
//         age: 19,
//         gender: "female"
//     }
// ];

// export const getById = id => {
//     const filteredPeople = people.filter( person => person.id === String(id));
//     return filteredPeople[0];
// };
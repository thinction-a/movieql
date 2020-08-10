export const movies = [
    {
        id: 1,
        name: "Avengers - End Game",
        score: 99,
        company: "Marvel Studio"
    },
    {
        id: 2,
        name: "Ironman",
        score: 95,
        company: "Marvel Studio"
    },
    {
        id: 3,
        name: "parasite",
        score: 90,
        company: "Junho Bong"
    },
    {
        id: 4,
        name: "MadMax, Fury Road",
        score: 80,
        company: "20th Fox"
    },
    {
        id: 5,
        name: "SpierMan",
        score: 75,
        company: "Sony"
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter( movie=> movie.id === id);
    return filteredMovies[0]
}






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
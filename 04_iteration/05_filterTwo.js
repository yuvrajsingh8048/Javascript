const books = [
    {
        title: "Book One",
        genre: "Ficton",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book Two",
        genre: "Non-Fiction",
        publish: 1992,
        edition: 2008
    },
    {
        title: "Book Three",
        genre: "History",
        publish: 1999,
        edition: 2007
    },
    {
        title: "Book Four",
        genre: "Non-Fiction",
        publish: 1989,
        edition: 2010
    },
    {
        title: "Book Five",
        genre: "Science",
        publish: 2009,
        edition: 2011
    },
    {
        title: "Book Six",
        genre: "Ficton",
        publish: 1987,
        edition: 2014
    },
    {
        title: "Book Seven",
        genre: "Science",
        publish: 1983,
        edition: 2002
    },
    {
        title: "Book Eight",
        genre: "Non-Fiction",
        publish: 2003,
        edition: 2014
    },
    {
        title: "Book Nine",
        genre: "History",
        publish: 2001,
        edition: 2008
    }
]

// const returnBooks = books.filter( (kitab) => kitab.genre === "Non-Fiction")
const returnBooks = books.filter( (kitab) => {
     return ( kitab.publish >= 2010  && kitab.edition >= 2010)
})
console.log(returnBooks)
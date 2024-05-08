const books = [
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        year: 2010,
    },
    {
        title: "The God of Small Things",
        author: "Arundhati Roy",
        year: 1997,
    },
    {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        year: 1993,
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        year: 2018,
    },
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981,
    },
];

function filter(array) {
    let booksAfter2010 = [];
    for(let x of array) {
        if (x.year >= 2010) {
            x.author = x.author.toUpperCase();
            booksAfter2010.push(x);
        }
    }
    console.log(booksAfter2010);
}

filter(books);
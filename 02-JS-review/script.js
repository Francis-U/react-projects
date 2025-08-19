const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
///destructuring
const book = getBook(2);
// books
// const title = book.title;
// const author = book.author;

///OBJECT USES SAME NAME, ARRAY USES POSITION
const { title, author, genres, pages } = book;
console.log(title, author, genres);
///rest operators
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

///Spread operators
const newGebre = [...genres, "music"];

///spread operator for objects
const updatedBook = { ...book, moviePublicationDate: "2025-05-11" };
updatedBook;

///Spread operator can be used to override
const updatedBook2 = {
  ...book,
  moviePublicationDate: "2025-05-11",
  pages: 1211,
};
//pages wll bw updated to 1211 from the previous value
const { moviePublicationDate } = updatedBook2;
const summary = `${title} is a ${pages}-page book`;

const pagesRange = pages > 1000 ? "over a thousad" : "less than 1000";
pagesRange;

///arrow function
// function getYear(str) {
//   return str.split("-")[0];
// }

getYear = (str) => str.split("-")[0];
console.log(getYear(moviePublicationDate));

///SHORT CIRCUITING
console.log(true && "some string");
console.log(false && "some string");
////FALSY VALUES : 0, '', null,undefined
console.log(0 && "some string");

console.log(true || "some string");
console.log(0 || "some string");

///nullish coalescent
//it will only return the 2nd value when the 1st value is null or undefined

console.log(0 ?? "some string");

///Optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  // const librarything = book.reviews.librarything.reviewsCount;
  //below is chosen becos if book doesnt contain a librarything, the above will throw an error
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
*/
/*
const books = getBooks();
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

const arr = [3, 7, 1, 9, 6];
////sort changes the original array, hence the slice is used to copy the array
const sorted = arr.slice().sort((a, b) => a - b); ////ascending order
const sorted2 = arr.sort((a, b) => b - a); ////descending order
sorted;
sorted2;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

const newBook = {
  id: 6,
  title: "Harry Porter and the chamber of Secrets",
  author: "J. K. Rowling",
};
///1, add book to the array
const bookAfterAdd = [...books, newBook];
bookAfterAdd;
///2, delete book from the array

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

///3, Update book Objects in the Array
const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
bookAfterUpdate;
*/

/*
console.log("to do example");
fetch("https://jsonplaceholder.typicode.com/todo")
  .then((res) => res.json())
  .then((data) => console.log(data));
  */

/*
async function todos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todo");
  const data = await res.json();
  console.log(data);
}
console.log("fe");
*/

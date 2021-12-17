const books=[
    {title:'Beastars Volume 2',author:'Paru Itagaki', pages:200},
    {title:'Harry Potter and the Sorcerers Stone', author:'J.K Rowling',pages:500},
    {title:"The City of Ember", author: "Jeanne DuPrau", pages: 270},
    {title: 'The Giver', author: 'Lois Lowry', pages: 1005896},
    {title: 'John Dies at The End', author: 'David Wong', pages: 200},
    {title: 'Lord of the Rings', author: 'J.R.R. Tolkien', pages: 1000},
    {title:"Quiet",author:"Susan Cain",pages:220},
    {title: '1984', author: 'George Orwell', pages: 274},
    {title:'All About Love', author:'Bell Hooks', pages:215},
    {title: 'The Hobbit', author: 'J.R.R Tolkien', pages: 310},
    {title: 'In Search of Duende', author: 'Federico Garcia Lorca', pages: 148},
    {title:'The Screwtape Letters', author:'C.S. Lewis',pages:160},
    {title: 'Way of Kings', author: 'Brandon Sanderson', pages: 1007},
    {title:'Percy Jackson: The Lightning Thief', author:'Rick Riordian',pages:379},
    {title:'Solo leveling', author:'Sung-Lak Jang', pages:177},
    {title: 'Mind Hacking', author: 'John Hargrave', pages: 200}
];


//Find  - find the first instance of a case
let giverBook = books.find(book=>book.title ==="The Giver");
//console.log(giverBook); //returns an object


//Filter  - find all instances of a case
let longBooks = books.filter(book=>book.pages>500);
//console.log(longBooks);  //returns an array


//Map
let bookTitles = books.map(book=>book.title);
//console.log(bookTitles); // returns modified array based on case 


//Some
let areTolkienBooks = books.some(book=>book.author ==='J.R.R Tolkien');
//console.log(areTolkienBooks);


//Every
let allBooksLong = books.every(book=>book.pages>130);
//console.log(allBooksLong);

let allBooksSuperLong = books.every(book=>book.pages>10000)
//console.log(allBooksSuperLong);





const accounts = [
    {
      id: "5f446f2ecfaf0310387c9603",
      picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
      age: 25,
      name: {
        first: "Esther",
        last: "Tucker",
      },
      company: "ZILLACON",
      email: "esther.tucker@zillacon.me",
      registered: "Thursday, May 28, 2015 2:51 PM",
    },
    {
      id: "5f446f2ed46724f41c9fc431",
      picture: "https://api.adorable.io/avatars/75/ferrell.morris@ecolight.com",
      age: 35,
      name: {
        first: "Ferrell",
        last: "Morris",
      },
      company: "ECOLIGHT",
      email: "ferrell.morris@ecolight.com",
      registered: "Thursday, February 8, 2018 1:16 PM",
    },
    {
      id: "5f446f2e5e2952040e9f9b88",
      picture: "https://api.adorable.io/avatars/75/robertson.simmons@goko.tv",
      age: 38,
      name: {
        first: "Robertson",
        last: "Simmons",
      },
      company: "GOKO",
      email: "robertson.simmons@goko.tv",
      registered: "Monday, October 30, 2017 10:28 PM",
    }
];


let accountNames = accounts.map(account=>{
    let {name} = account;
    return `${name.first} ${name.last}`; 
});
//console.log(accountNames);


//books.sort((a,b)=>a.pages-b.pages);
//console.log(books);


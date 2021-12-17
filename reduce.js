const books=[
    {title:'Beastars Volume 2',author:'Paru Itagaki', pages:200},
    {title:'Harry Potter and the Sorcerers Stone', author:'J.K Rowling',pages:500},
    {title:"The City of Ember", author: "Jeanne DuPrau", pages: 270},
    {title: 'The Giver', author: 'Lois Lowry', pages: 10051544654},
    {title: 'John Dies at The End', author: 'David Wong', pages: 200},
    {title: 'Lord of the Rings', author: 'J.R.R. Tolkien', pages: 1000},
    {title:"Quiet",author:"Susan Cain",pages:220},
    {title: '1984', author: 'George Orwell', pages: 274},
    {title:'All About Love', author:'Bell Hooks', pages:215},
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 310},
    {title: 'In Search of Duende', author: 'Federico Garcia Lorca', pages: 148},
    {title:'The Screwtape Letters', author:'C.S. Lewis',pages:160},
    {title: 'Way of Kings', author: 'Brandon Sanderson', pages: 1007},
    {title:'Percy Jackson: The Lightning Thief', author:'Rick Riordian',pages:379},
    {title:'Solo leveling', author:'Sung-Lak Jang', pages:177},
    {title: 'Mind Hacking', author: 'John Hargrave', pages: 200}
];


let totalPages=0;
/*for(let book of books){
    totalPages+=book.pages;
}*/
//

totalPages= books.reduce((acc, book)=>acc+book.pages,0);
//console.log(totalPages)


let bookRanges = {};

/*for(let book of books){
    if(book.pages > 0 && book.pages<300){
        if(bookRanges.shortReads){
            bookRanges.shortReads.push(book);
        }else{
            bookRanges.shortReads=[book];
        }
    }else if(book.pages >= 300 && book.pages< 1000){
        if(bookRanges.mediumReads){
            bookRanges.mediumReads.push(book);
        }else{
            bookRanges.mediumReads=[book];
        }
    }else if(book.pages>=1000){
        if(bookRanges.longReads){
            bookRanges.longReads.push(book);
        }else{
            bookRanges.longReads=[book];
        }
    }
}*/
books.sort((a,b)=>a.pages-b.pages);

/*bookRanges = books.reduce((acc,book)=>{
    if(book.pages > 0 && book.pages<300){
        if(acc.shortReads){
            acc.shortReads.push(book);
        }else{
            acc.shortReads=[book];
        }
    }else if(book.pages >= 300 && book.pages< 1000){
        if(acc.mediumReads){
            acc.mediumReads.push(book);
        }else{
            acc.mediumReads=[book];
        }
    }else if(book.pages>=1000){
        if(acc.longReads){
            acc.longReads.push(book);
        }else{
            acc.longReads=[book];
        }
    }
    return acc
},{})*/


bookRanges=books.reduce((acc, book)=>{
    if(acc[book.author]){
        acc[book.author].push(book);
    } else{
        acc[book.author]=[book];
    }
    return acc;
},{})



console.log(bookRanges);
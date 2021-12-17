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


//books.sort((a,b)=>b.pages-a.pages);
//console.log(books);

books.sort((a,b)=> a.author.toLowerCase() > b.author.toLowerCase()?1:-1
/*{
    if(a.author.toLowerCase() > b.author.toLowerCase()){
        return 1;
    }else {
        return -1;
    }
}*/)

console.log(books);


/*let sorted = [];
for(let i =0; i< books.length;i++){  //Looping through books array
    let added = false;  //setting a flag/boolean to signify that this item has not been sorted yet
    for(let j =0; j< sorted.length && !added; j++){ //looping through items that have already been sorted
        if(books[i].pages < sorted[j].pages){ //comparing sorted items with items in books array 
            sorted.splice(j,0,books[i]);// depending on comparison, this controls where the item is added into the sorted array
            added=true;
        }
    }
    if(!added){  //if the book was not added
        sorted.push(books[i]);  //add to the sorted array for the next comparison
    }
}

console.log(sorted);*/


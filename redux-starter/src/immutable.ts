import  {Map} from 'immutable';


export let book = Map({title: "Harry Potter"});

export function publish(book: any){
    return book.set("isPublished", true);
}

console.log(book);  
book = publish(book);

console.log(book.get("title"));

console.log(book.toJS());
console.log(book);
console.log("commit");
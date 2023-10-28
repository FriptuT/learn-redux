import { produce } from 'immer';


export let book = { title: "Harry Potter" };

export function publish(book: any) {
    return produce(book, (draftBook: any) => {
        draftBook.isPublished = true;   
    });
}

export let updated = publish(book);
console.log(book);
console.log(updated);

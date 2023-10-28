import { compose, pipe } from "lodash/fp";


// ---
//---FUNCTION CURRYING---

export default function add(a: number) {
    return function (b: number) {
        return a + b;
    };
}

export const add2 = (a:number) => (b: number) => a+b;


// ---
//---FUNCTION CURRYING---

let input: string = "   TYPESCRIPT  ";
const trim = (str: string) => str.trim();
const wrap = (type: string) => (str: string) => `<${type}>${str}</${type}>`;
const toLowerCase = (str: string) => str.toLowerCase();

const transform = pipe(trim,toLowerCase,wrap("h1"));
console.log(transform(input));

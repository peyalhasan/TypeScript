type Employee = {
    id: number;
    name: string;
    email: string;
    salary: number;
    address?: string
};

const peayl: Employee = {
    id: 12342,
    name: "Peyal",
    email: "peyalhasan143@gmail.com",
    salary: 12504
}
console.log(peayl)

type Department = {
    name: string;
    employees: Employee[];
}

const sales: Department = {
    name: "Sales",
    employees: [peayl]
}

type ISBN = number | string;

const book_a_isbn: ISBN = 123423;
const book_b_isban: ISBN = '1254'


type Book = {
    title: string,
    pages: number;
    isbn: ISBN;
}
type Writer = {
    name: string;
    age: number;
    address: string
}

type BookWriter = Book & Writer ;

const newBook: BookWriter = { 
    title: 'Learn Code',
    pages: 124,
    isbn: 1241,
    name: 'Peyal',
    age: 22,
    address: 'Banasree, Dhaka'
}

type startsWithLWS = `LWS${string}`;

const peyals: startsWithLWS = 'LWS with saha'
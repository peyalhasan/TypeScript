function printTodos(todos) {
    if (todos) {
        todos.map((todo) => console.log(todo));
    }
    else if (typeof todos === 'string') {
        console.log("No todos");
    }
}
const todos = ['todo1', 'todo2'];
printTodos(null);
console.log(typeof (null));
export {};
//# sourceMappingURL=narrowing.js.map
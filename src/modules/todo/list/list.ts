import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {
    todos = [
        {
            id: '003171931112854375',
            name: 'todo 1',
            description: 'todo description 1'
        },
        {
            id: '003192301009134555',
            name: 'todo 2',
            description: 'todo description 2'
        },
        {
            id: '003848991274589432',
            name: 'todo 3',
            description: 'todo description 3'
        }
    ];

    handleSaveTodo(event) {
        const todo = event.detail.todo;
        console.log('save' + JSON.stringify(todo));
        this.todos[this.todos.findIndex(item => item.id === todo.id)] = todo;
    }

    handleDeleteTodo(event) {
        const id = event.detail.id;
        this.todos = this.todos.filter(item => item.id !== id);
    }

    addTodo(event) {
        const id = crypto.randomUUID();
        this.todos.push({ id, name: `todo-${id}`, description: 'todo'});
        this.todos = [ ...this.todos ];
        console.log(JSON.stringify(this.todos));
    }
}
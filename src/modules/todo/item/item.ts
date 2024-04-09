import { LightningElement, api, wire } from 'lwc';

export default class TodoItem extends LightningElement {
    @api key;
    @api item;

    description = '';

    handleChange(event) {
        this.description = event.target.value;
    }

    saveTodo(event) {
        event.preventDefault();
        const c = new CustomEvent('savetodo', {
            detail: {
                todo: {
                    ...this.item,
                    description: this.description,
                },
            },
        });
        this.dispatchEvent(c);
    }

    deleteTodo(event) {
        event.preventDefault();
        const c = new CustomEvent('deletetodo', {
            detail: {
                id: this.item.id,
            },
        });
        this.dispatchEvent(c);
    }
}

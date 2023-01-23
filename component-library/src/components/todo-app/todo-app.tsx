import { Component, State, h } from '@stencil/core';
import { TodoItem } from '../../models/todoItem';

@Component({
  tag: 'todo-app',
  styleUrl: 'todo-app.css',
})
export class TodoApp {
  @State() items: TodoItem[] = [];
  @State() text: string;

  render() {
    const handleOnChange = e => this.handleOnChange(e);
    const handleSubmit = e => this.handleSubmit(e);

    return (
      <div class="todo-app">
        <h1>TODO LIST</h1>
        <todo-list-form onSubmit={handleSubmit} onInputChange={handleOnChange} todoItemsLength={this.items.length} />
        <todo-list todoItems={this.items} />
      </div>
    );
  }

  private handleSubmit(e) {
    e.preventDefault();
    if (!this.text.length) {
      return;
    }
    const newItem = new TodoItem(this.text);

    this.text = '';
    this.items = [...this.items, newItem];
  }

  private handleOnChange(e) {
    this.text = e.detail;
  }
}

import { Component, Prop, State, Watch, Host, h } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {
  @Prop() name: string;

  @State() count: number = 0;

  private increment() {
    this.count += 1;
  }

  private decrement() {
    this.count -= 1;
  }

  @Watch('count')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('The old value is: ', oldValue);
    console.log('The new value is: ', newValue);
  }

  render() {
    return (
      <Host>
        <p>{this.name}</p>
        <div class="counterContainer">
          <button onClick={this.decrement.bind(this)}>-</button>
          <div>{this.count}</div>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </Host>
    );
  }
}

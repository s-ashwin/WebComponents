import { Component, Prop, State, Host, h } from '@stencil/core';

@Component({
  tag: 'like-component',
  styleUrl: 'like-component.css',
  shadow: true,
})
export class LikeComponent {
  @Prop() label: string;

  @State() liked: boolean = false;

  private like() {
    this.liked = !this.liked;
  }

  render() {
    return (
      <Host>
        <p>{this.label}</p>
        <div class="counterContainer">
          <div class={`heart ${this.liked ? 'is-active' : ''}`} onClick={this.like.bind(this)}></div>
        </div>
      </Host>
    );
  }
}

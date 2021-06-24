import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mc-button',
  styleUrl: 'mc-button.css',
  shadow: true,
})
export class McButton {

  render() {
    return (
      <Host class="mc-button">
        <span class="mc-button-label">
          <slot></slot>
        </span>
      </Host>
    );
  }

}

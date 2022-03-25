import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('nav-bar')
export class Navbar extends LitElement {
  render() {
    return html`<div>Hello from MyElement!</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "nav-bar": Navbar;
  }
}
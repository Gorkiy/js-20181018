import Component from '../../shared/component.js';

export default class shoppingCart extends Component {
  constructor({ element }) {
    super({ element });
    this._cart = [];
    this._render();
  }

  addToCart(phone) {
    phone.push(this._cart);
  };

  _render() {
    this._element.innerHTML = `
    <p>Shopping Cart</p>
    <ul data-element="cart-items"><li>
    ${this._cart.map(phone => phone)}
    </li></ul>
    `}
}
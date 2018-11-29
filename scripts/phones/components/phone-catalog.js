import Component from '../../shared/component.js';

export default class PhoneCatalog extends Component {
  constructor({ element, phones, onPhoneSelected, onAddToCart }) {
    super({ element });

    this._phones = phones;
    this._onPhoneSelected = onPhoneSelected;
    this._onAddToCart = onAddToCart;

    this._render();

    this._element.addEventListener('click', event => this._onPhoneClick(event));
    this._element.addEventListener('click', event => this._onPhoneAddToCart(event));
  }

  _onPhoneClick(event) {
    let phoneLink = event.target.closest('[data-element="phone-link"]');

    if (!phoneLink) return;

    this._onPhoneSelected(phoneLink.dataset.phoneId);

  }

  _onPhoneAddToCart(event) {
    let buyBtn = event.target.closest('[data-element="buy-btn"]');

    if (!buyBtn) return;
     
    let phoneName = event.target.closest('.thumbnail').getAttribute('data-about');  
    this._onAddToCart(phoneName);
  }

  _render() {
    this._element.innerHTML = `
       <ul class="phones">
          ${ this._phones.map(phone => `
            <li class="thumbnail" data-about="${phone.name}">
              <a data-element="phone-link" data-phone-id="${phone.id}" href="#!/phones/${phone.id}" class="thumb">
                  <img alt="${phone.name}" src="${phone.imageUrl}">
              </a>

              <div class="phones__btn-buy-wrapper">
                  <a data-element="buy-btn" class="btn btn-success">
                      Add
                  </a>
              </div>

              <a data-element="phone-link" data-phone-id="${phone.id}" href="#!/phones/${phone.id}">${phone.name}</a>
              <p>${phone.snippet}</p>
          </li>
          `).join('')}
        </ul>
    `;
  }
}

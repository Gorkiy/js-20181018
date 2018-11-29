import Component from '../../shared/component.js';

export default class PhoneViewer extends Component {
  constructor({ element }) {
    super({ element });

    this._element.addEventListener('click', this._onThumbClick.bind(this));
  }

  _onThumbClick(event) {
    let coverImg = this._element.querySelector('[data-element="phone-cover-image"]');
    let thumbImg = event.target.closest('[data-element="phone-img-thumb"]');

    if (!thumbImg) return;

    coverImg.setAttribute('src', thumbImg.getAttribute('src'));

  };

  showPhone(phone) {
    this._phone = phone;
    this._render();

    super.show();
  }

  _render() {
    const { _phone: phone } = this;

    this._element.innerHTML = `
      <img data-element="phone-cover-image" class="phone" src="${phone.images[0]}">

      <button>Back</button>
      <button>Add to basket</button>


      <h1>${phone.name}</h1>

      <p>${phone.description}</p>

      <ul class="phone-thumbs">
        ${ phone.images.map(image => `
          <li>
          <img data-element="phone-img-thumb" src="${ image }">
        </li>
      `).join('')}

      </ul>
    `;
  }
}

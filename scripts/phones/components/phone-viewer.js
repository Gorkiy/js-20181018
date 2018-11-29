import Component from '../../shared/component.js';

export default class PhoneViewer extends Component {
  constructor({ element, backButtonClick }) {
    super({ element });

    this._backButtonClick = backButtonClick;
    this._element.addEventListener('click', this._onThumbClick.bind(this));
    this._element.addEventListener('click', this._onBackButton.bind(this));
  }

  _onThumbClick(event) {
    let coverImg = this._element.querySelector('[data-element="phone-cover-image"]');
    let thumbImg = event.target.closest('[data-element="phone-img-thumb"]');

    if (!thumbImg) return;

    coverImg.setAttribute('src', thumbImg.getAttribute('src'));

  };

  _onBackButton(event) {
    //let backBtn = this._element.querySelector('[data-element="back-button"]');
    let backBtn = event.target.closest('[data-element="back-button"]');
    console.log(backBtn);

    if (!backBtn) return;

    super.hide();
    this._backButtonClick();

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

      <button data-element="back-button">Back</button>
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

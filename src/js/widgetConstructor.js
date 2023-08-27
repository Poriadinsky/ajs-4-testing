export default function getWidget() {
  const widget = document.querySelector('.widget');

  const tittle = document.createElement('div');
  widget.appendChild(tittle);
  tittle.classList.add('tittle');
  tittle.textContent = 'Check your credit card number';

  const cardList = document.createElement('div');
  widget.appendChild(cardList);
  cardList.classList.add('card-list');

  for (let i = 0; i < 7; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`card${i + 1}`);
    cardList.appendChild(card);
  }

  const entryField = document.createElement('div');
  widget.appendChild(entryField);
  entryField.classList.add('entry-field');
  entryField.innerHTML = `
    <form class="card-form-widget">
        <div class="control">
            <input type="text" id="card-input" class="input" placeholder="Credit card number">
        </div>
        <button class="submit">Click to Validate</button>
    </form>
    `;
}

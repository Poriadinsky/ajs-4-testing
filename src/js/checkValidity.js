import luhnAlgorithm from './getLuhnAlgorithm';

export default function check() {
  const input = document.querySelector('.input');
  const button = document.querySelector('.submit');
  const widget = document.querySelector('.widget');
  const checking = document.createElement('div');
  widget.appendChild(checking);
  checking.classList.add('check');
  checking.textContent = '';
  button.addEventListener('click', (e) => {
    e.preventDefault();

    if (luhnAlgorithm(input.value)) {
      checking.innerHTML = '<span class="valid">&#9989; The credit card number you entered passed the Luhn Check and is therefore a valid credit card number!</span>';
      input.value = '';
    } else {
      checking.innerHTML = '<span class="invalid">&#10060; The credit card number you entered failed the Luhn Check. It is not valid, did you make a typo?</span>';
      input.value = '';
    }
  });
}

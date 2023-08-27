export default function definePayment() {
  const input = document.querySelector('.input');
  const card = document.querySelectorAll('.card');
  input.addEventListener('input', () => {
    for (let i = 0; i < card.length; i++) {
      card[i].classList.remove('background');
    }

    if (Number(input.value[0]) === 5) {
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('background');
        card[1].classList.remove('background');
      }
    }

    if (Number(input.value[0]) === 4) {
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('background');
        card[0].classList.remove('background');
      }
    }

    if (Number(input.value[0]) === 6) {
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('background');
        card[3].classList.remove('background');
      }
    }

    if (Number(input.value[0]) === 2) {
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('background');
        card[6].classList.remove('background');
      }
    }

    // eslint-disable-next-line
    if ((Number(input.value[0]) === 3 && Number(input.value[1]) === 4) || (Number(input.value[0]) === 3 && Number(input.value[1]) === 7)) {
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('background');
        card[2].classList.remove('background');
      }
    }

    // eslint-disable-next-line
    if ((Number(input.value[0]) === 3 && Number(input.value[1]) === 1) || (Number(input.value[0]) === 3 && Number(input.value[1]) === 5)) {
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('background');
        card[4].classList.remove('background');
      }
    }

    // eslint-disable-next-line
    if ((Number(input.value[0]) === 3 && Number(input.value[1]) === 0) || (Number(input.value[0]) === 3 && Number(input.value[1]) === 6) || (Number(input.value[0]) === 3 && Number(input.value[1]) === 8)) {
      for (let i = 0; i < card.length; i++) {
        card[i].classList.add('background');
        card[5].classList.remove('background');
      }
    }
  });
}

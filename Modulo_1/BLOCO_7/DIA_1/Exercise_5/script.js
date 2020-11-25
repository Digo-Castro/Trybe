const btn = document.querySelector('button');
sessionStorage.setItem('click', '0')
const clickCount = () => {let count = parseInt(sessionStorage.getItem('click'), 10); count += 1; sessionStorage.setItem('click', count)}
const getCount = () => sessionStorage.getItem('click');

btn.addEventListener('click', clickCount);
btn.addEventListener('click', () => {
  if (getCount() > 1) {
    document.querySelector('p').innerHTML = `O botão foi clicado <span>${getCount()}</span> vezes!`} else {
      document.querySelector('p').innerHTML = `O botão foi clicado <span>${getCount()}</span> vez!`}
    });
const button = document.querySelector('.btn'),
    long = document.querySelector('#long'),
    width = document.querySelector('#width'),
    result = document.querySelector('#result');


let calculation = 0;

button.addEventListener('click', () => {
  calculation = (long.value * width.value).toFixed(1);
  result.innerHTML = `<h1 class="result" > ${calculation} см²</h1>
<h3 class="result">${calculation / 10000} м²</h3>`;
  width.value = long.value = '';
});

const button = document.querySelector('.btn'),
    long = document.querySelector('#long'),
    width = document.querySelector('#width'),
    result = document.querySelector('#result');


let calculation = 0;

button.addEventListener('click', () => {
  calculation = (+long.value * +width.value).toFixed(1);
  result.innerHTML = `<h1 class="result" > ${calculation} см</h1>
<h3 class="result">${calculation / 100} м</h3>`;
  width.value = long.value = '';
});
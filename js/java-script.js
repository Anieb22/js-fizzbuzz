let output = document.getElementById('output');
let string = '';

for (let i = 1; i <= 100; i++) {
  let elem = document.createElement('div')
  elem.classList.add('square')

    if (i % 3 == 0 && i % 5 == 0) {
      elem.classList.add('orange')
      elem.innerText = 'FizzBuzz'
      console.log('FizzBuzz');

    } else if (i % 3 == 0) {
      elem.classList.add('red')
      elem.innerText = 'Fizz'
      console.log('Fizz');

    } else if (i % 5 == 0) {
      elem.classList.add('yellow')
      elem.innerText = 'Buzz'
      console.log('Buzz');

    } else {
      elem.classList.add('green')
      elem.innerText = i
      console.log(i);
    }

    output.append(elem);
  }


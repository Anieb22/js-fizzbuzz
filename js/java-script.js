let output = document.getElementById('output');
let string = '';

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
      string += '<div>FizzBuzz</div>';
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      string += '<div>Fizz</div>';
      console.log('Fizz');
    } else if (i % 5 == 0) {
      string += '<div>Buzz</div>';
      console.log('Buzz');
    } else {
      string += `<div>${i}</div>`;
      console.log(i);
    }
  
  }

  output.innerHTML += string;

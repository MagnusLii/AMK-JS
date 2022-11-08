let number = parseInt(prompt('Gib number!'));

if (number == 1 || number == 4) {
  document.querySelector(
      `#print`).textContent = `${number} isn't a prime number.`;
} else if (number == 2 || number == 3) {
  document.querySelector(`#print`).textContent = `${number} is a prime number.`;
} else {
  for (i = 0; i <= Math.sqrt(number) + 1; i++) {
    if (number % i == 0) {
      document.querySelector(
          `#print`).textContent = `${number} isn't a prime number.`;
    } else {
      document.querySelector(
          `#print`).textContent = `${number} is a prime number.`;
    }
  }
}
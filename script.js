// déclarations des variables
const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');

// regEx
const regEx = /[^a-z0-9]/gi;

// Fonction isPalindrome
const isPalindrome = (value) => {
  let string = value.replace(regEx, "").toLowerCase();
  let stringReverse = string.split('').reverse().join('')
  return string === stringReverse;
};

// Event Listener
button.addEventListener('click', () => {
  if(input.value === "") {
    alert('Please input a value')
    return;
  };
  result.textContent = isPalindrome(input.value) ? `${input.value} is a palindrome` : `${input.value} is not a palindrome`;
  input.value = "";
  setTimeout(() => {
    result.textContent = ""}, 1200);
  });

// déclarations des variables
const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');

// regEx
const regEx = /qqc/;

// Fonction isPalindrome
const isPalindrome = (value) => {
  regEx.test(value);
};

// Event Listener
button.addEventListener('click', () => {
  if(input.value === "") {
    alert('Please input a value')
  };
  result.textContent = isPalindrome(input.value) ? `${input.value} is a palindrome` : `${input.value} is not a palindrome`;
  input.value = "";
});

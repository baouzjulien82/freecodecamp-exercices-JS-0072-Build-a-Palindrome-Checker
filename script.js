// déclarations des variables
const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');

// Alert si entrée vide
button.addEventListener('click', () => {
  if(input.textContent === "") {
    alert('Please input a value')
  };
});

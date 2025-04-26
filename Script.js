// Change text content
const changeTextBtn = document.getElementById('change-text');
const description = document.getElementById('description');

changeTextBtn.addEventListener('click', function() {
  description.textContent = "The text has been changed dynamically!";
});

// Change CSS styles
const changeStyleBtn = document.getElementById('change-style');
const mainTitle = document.getElementById('main-title');

changeStyleBtn.addEventListener('click', function() {
  mainTitle.style.color = 'blue';
  mainTitle.style.fontSize = '3rem';
});

// Add an element
const addElementBtn = document.getElementById('add-element');
const dynamicContainer = document.getElementById('dynamic-container');

addElementBtn.addEventListener('click', function() {
  const newElement = document.createElement('p');
  newElement.textContent = "I'm a new paragraph added dynamically!";
  dynamicContainer.appendChild(newElement);
});

// Remove an element
const removeElementBtn = document.getElementById('remove-element');

removeElementBtn.addEventListener('click', function() {
  if (dynamicContainer.lastChild) {
    dynamicContainer.removeChild(dynamicContainer.lastChild);
  }
});

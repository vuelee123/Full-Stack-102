// To Do List Assignment

// show an unordered list of to-do items
const toDoList = document.querySelector('#mylist');

// show an input to enter a new to-do
const input = document.querySelector('#myInput');
const btnAdd = document.querySelector('#btnAdd');

// Show a button to add a to-do. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
function addItem() {
  const newItem = document.createElement('li');
  newItem.textContent = input.value;
  toDoList.appendChild(newItem);
  input.value = '';
}

btnAdd.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    addItem();
  }
});

// when the user clicks on a list, it is removed
toDoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.remove();
    }
  });
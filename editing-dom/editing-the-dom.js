// Editing the DOM

// 1. Update the 'Apples' item to say 'Granny Smith Apples'
const cartList = document.getElementById('list').children;
cartList[1].innerHTML = "Granny Smith Apples";

// 2. Remove 'Oat Milk' from the list
const removeList = document.getElementById('list').children;
removeList[3].remove();

// 3. Add an item 'Kombucha'
const newLi = document.createElement('li');
newLi.innerHTML = "Kombucha";

const list = document.querySelector('ul');
list.appendChild(newLi);

// 4. Clear the list and programmatically add items from the array


// const newItems = ['protein bars', 'almonds', 'peanut butter'];
const newList = ['protein bars', 'almonds', 'peanut butter'];
list.innerHTML = '';
newList.map(item => {
  let newlist1 = document.createElement('li');
  newlist1.innerHTML = item;
  list.append(newlist1);
});

// 5. Add the class 'important' to the almonds item.
cartList[1].className = "important";

console.log(cartList);
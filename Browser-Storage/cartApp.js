// Using Browser Storage

function inializeCart () {
    let cart = localStorage.getItem('cart');
    if (cart === null){
        localStorage.setItem('cart', JSON.stringify({}));
    }
};
inializeCart();

function addItem (item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart',JSON.stringify(cart));
}

function removeItem (itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart () {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}

document.getElementById('addItemForm').addEventListener('submit', function () {
    const itemName = document.getElementById('itemName');
    const itemPrice = document.getElementById('itemPrice'); 
    addItem(itemName.value, itemPrice.value);
});

document.getElementById('displayButton').addEventListener('click', displayCart);
displayCart();
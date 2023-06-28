// Retrieve the cart from local storage or initialize an empty cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display the cart items
function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<li>Your cart is empty.</li>';
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    const priceSpan = document.createElement('span');
    const removeButton = document.createElement('button');

    nameSpan.textContent = item.name;
    priceSpan.textContent = `$${item.price}`;
    removeButton.textContent = 'Remove';

    removeButton.classList.add('remove-from-cart');
    removeButton.dataset.id = item.id;

    removeButton.addEventListener('click', () => {
      removeFromCart(item.id);
    });

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);
    li.appendChild(removeButton);
    cartContainer.appendChild(li);
  });
}

// Function to add an item to the cart
function addToCart(id, name, price) {
  const item = {
    id: id,
    name: name,
    price: price,
  };

  cart.push(item);
  saveCartToLocalStorage();
  displayCart();
}

// Function to remove an item from the cart
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCartToLocalStorage();
  displayCart();
}

// Function to save the cart to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Event listener for adding products to the cart
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const product = event.target.dataset;
      addToCart(product.id, product.name, product.price);
    });
  });
});

// Display the cart on page load
displayCart();

// Filter functionality
let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

window.scrollTo(0, 0);

setInterval(function () {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);

for (let i = 0; i < filters.length; i++) {
  filters[i].checked = true;
}

function filterGames(category) {
  for (let i = 0; i < allGames.length; i++) {
    if (allGames[i].dataset.category === category) {
      allGames[i].style.display = "block";
    } else {
      allGames[i].style.display = "none";
    }
  }
}

let farmingFilter = document.getElementById("checkbox-farming");
farmingFilter.onchange = function () {
  if (farmingFilter.checked === true) {
    filterGames("farming");
  } else {
    for (let i = 0; i < allGames.length; i++) {
      allGames[i].style.display = "block";
    }
  }
};

let gtaFilter = document.getElementById("checkbox-gta");
gtaFilter.onchange = function () {
  if (gtaFilter.checked === true) {
    filterGames("gta");
  } else {
    for (let i = 0; i < allGames.length; i++) {
      allGames[i].style.display = "block";
    }
  }
};

let sportFilter = document.getElementById("checkbox-sport");
sportFilter.onchange = function () {
  if (sportFilter.checked === true) {
    filterGames("sport");
  } else {
    for (let i = 0; i < allGames.length; i++) {
      allGames[i].style.display = "block";
    }
  }
};
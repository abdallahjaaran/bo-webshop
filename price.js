function filterProducts() {
    var minPrice = parseInt(document.getElementById('min-price').value);
    var maxPrice = parseInt(document.getElementById('max-price').value);
  
    var productItems = document.getElementsByClassName('product-item');
    var productItemsNames = document.getElementsByClassName('product-item-name');
    var productItemsPrices = document.getElementsByClassName('product-item-price');
    var productItemsCarts = document.getElementsByClassName('product-item-cart');
  
    for (var i = 0; i < productItems.length; i++) {
      var productPrice = parseInt(productItems[i].getAttribute('data-price'));
  
      if (productPrice >= minPrice && productPrice <= maxPrice) {
        productItems[i].style.display = 'block';
        productItemsNames[i].style.display = 'block';
        productItemsPrices[i].style.display = 'block';
        productItemsCarts[i].style.display = 'block';
      } else {
        productItems[i].style.display = 'none';
        productItemsNames[i].style.display = 'none';
        productItemsPrices[i].style.display = 'none';
        productItemsCarts[i].style.display = 'none';
      }
    }
  }
  
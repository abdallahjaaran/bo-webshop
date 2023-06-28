document.addEventListener('DOMContentLoaded', function() {
    var colorOptions = document.getElementsByClassName('color-option');
    var productItems = document.getElementsByClassName('product-item');
  
    for (var i = 0; i < colorOptions.length; i++) {
      colorOptions[i].addEventListener('click', function() {
        var selectedColor = this.getAttribute('data-color');
  
        for (var j = 0; j < colorOptions.length; j++) {
          colorOptions[j].classList.remove('active');
        }
        this.classList.add('active');
  
        for (var k = 0; k < productItems.length; k++) {
          var productColor = productItems[k].getAttribute('data-color');
  
          if (productColor === selectedColor) {
            productItems[k].classList.add('show');
          } else {
            productItems[k].classList.remove('show');
          }
        }
      });
    }
  });
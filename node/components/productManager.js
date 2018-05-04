module.exports.productManager = function (req, res, next) {
  const WeDeploy = require('wedeploy');
  function deleteProducts() {
    if (confirm("This will erase all products from the database. This cannot be undone. Continue?")) {
      WeDeploy
        .data('https://data-stesse.wedeploy.io')
        .delete('stsdataProducts')
    }
  }

  function deleteProductsById() {
    var productId = document.getElementById('product-id').value;
    if (productId == '') {
      alert("Please enter a product ID.");
    } else if (confirm("This will delete the specified product from the database. This cannot be undone. Continue?")) {
      WeDeploy
        .data('https://data-stesse.wedeploy.io')
        .delete('stsdataProducts/' + productId)
    }
  }
}
// DATA
var form = document.querySelector('.stsproductcreate');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let productData = {
    title: document.getElementById('productTitle').value,
    price: document.getElementById('productPrice').value,
    image: document.getElementById('productImage').value,
    link: document.getElementById('productLink').value,
  }

//savedata
  WeDeploy
    .data('stsdata-stesse.wedeploy.io')
    .create('stsdataProducts', productData)
    .then(function(response) {
      form.reset();
      console.info('Saved:', response);
    })
    .catch(function(error) {
      console.log(error);
    });
});
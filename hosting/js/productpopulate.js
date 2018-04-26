var prodGridContent = document.getElementById('productGrid');

WeDeploy
  .data('stsdata-stesse.wedeploy.io')
  .orderBy()
  .get('stsdataProducts')
  .then(function(response) {
    populateProducts(response);
  })
  .catch(function(error) {
    console.error(error);
  });

function populateProducts(productData) {
  var productGrid = '';

  productData.forEach(function(product) {
    productGrid += `<div class="product-card" id="gridProduct">
                      <a href="${product.link}" target="_blank">
                        <div class="product-img" style="background-image:url(${product.image});"></div>
                        <div class="product-info">
                          <h5>${product.title}</h5>
                          <h6>$${product.price}</h6>
                        </div>
                      </a>
                    </div>`;
  });

  prodGridContent.innerHTML = productGrid;
}
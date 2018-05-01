WeDeploy.data(`data-stesse.wedeploy.io`)
  .get('stsdataProducts')
  .then(function(stsdataProducts) {
    populateProducts(stsdataProducts);
  });


    function populateProducts(productData) {
      var productGrid = '';
      var prodGridContent = document.getElementById('productGrid');
      for(var i = 0; i < productData.length; i++) {
        productGrid += `<div class="product-card" id="gridProduct">
                       <a href="${productData[i].link}" target="_blank">
                         <div class="product-img" style="background-image:url(/uploads/${productData[i].image});"></div>
                         <div class="product-info">
                           <h5>${productData[i].title}</h5>
                           <h6>$${productData[i].price}</h6>
                         </div>
                       </a>
                     </div>`;
      }
      prodGridContent.innerHTML = productGrid;
    }
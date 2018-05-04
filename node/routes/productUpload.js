const WeDeploy = require('wedeploy');

module.exports.productUpload = function (req, res, next) {
    WeDeploy
      .data('data-stesse.wedeploy.io')
      .create('stsdataProducts', {
        "title": req.body.productTitle,
        "price": req.body.productPrice,
        "link": req.body.productLink,
        "image": req.file.filename
      })
      .then(function(succ){
        res.redirect(`/admin/manageProducts/createProduct?cmd=success`);
        console.log(succ);
      })
      .catch(function(err){
        res.redirect(`/admin/manageProducts/createProduct?cmd=fail`);
      });
}
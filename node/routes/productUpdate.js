const WeDeploy = require('wedeploy');

module.exports.productUpdate = function (req, res, next) {
    WeDeploy
      .data('data-ststesting.wedeploy.io')
      .update('stsdataProducts/' + req.body.productId, {
        "title": req.body.productTitle,
        "price": req.body.productPrice,
        "link": req.body.productLink,
        "image": req.file.filename
      })
      .then(function(succ){
        res.redirect(`/admin/manageProducts/updateProduct?cmd=success`);
        console.log(succ);
      })
      .catch(function(err){
        res.redirect(`/admin/manageProducts/updateProduct?cmd=fail`);
      });
}
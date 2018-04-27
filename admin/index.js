const serveIndex = require('serve-index');
const express = require('express');
const WeDeploy = require('wedeploy');
const multer = require('multer');
const storage = multer.diskStorage({
  filename: (req, file, cb) => cb(null, file.originalname),
  destination: (req, file, cb) => cb(null, './public/uploads'),
})
const upload = multer({storage});
const app = express();
app.post('/upload', upload.single('productImage'), (req, res) => {
  WeDeploy
    .data('stsdata-stesse.wedeploy.io')
    .create('stsdataProducts', {
      "title": req.body.productTitle,
      "price": req.body.productPrice,
      "link": req.body.productLink,
      "image": req.file.filename
    })
    .then(function(succ){
      res.redirect(`${req.protocol}://${req.get('host')}?cmd=success`);
    })
    .catch(function(err){
      res.redirect(`${req.protocol}://${req.get('host')}?cmd=fail`);
    });
});
app.use(express.static(__dirname + '/public'));
app.use(serveIndex('public', {'icons': true}));
app.listen(3000);



// function updateProduct() {
//   var prodUpdateId = document.getElementById('produpdate-id').value;
//   var photoUpdateTitle = document.getElementById('produpdate-link').value;
//   var photoUpdateLink = document.getElementById('produpdate-link').value;
//     WeDeploy
//       .data('https://stsdata-stesse.wedeploy.io')
//       .update('stsdataPhotos/' + photoUpdateId, {
//         "message": photoUpdateUrl
//       }).then(function(success) {
//         alert("Gallery updated!");
//       });
// }
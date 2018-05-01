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
    .data('data-stesse.wedeploy.io')
    .create('stsdataProducts', {
      "title": req.body.productTitle,
      "price": req.body.productPrice,
      "link": req.body.productLink,
      "image": req.file.filename
    })
    .then(function(succ){
      res.redirect(`${req.protocol}://${req.get('host')}/admin-dash?cmd=success`);
    })
    .catch(function(err){
      res.redirect(`${req.protocol}://${req.get('host')}/admin-dash?cmd=fail`);
    });
});

app.post('/update', upload.single('productImage'), (req, res) => {
  WeDeploy
    .data('data-stesse.wedeploy.io')
    .update('stsdataProducts/' + req.body.productId, {
      "title": req.body.productTitle,
      "price": req.body.productPrice,
      "link": req.body.productLink,
      "image": req.file.filename
    })
    .then(function(succ){
      res.redirect(`${req.protocol}://${req.get('host')}/admin-dash?cmd=success`);
    })
    .catch(function(err){
      res.redirect(`${req.protocol}://${req.get('host')}/admin-dash?cmd=fail`);
    });
});

app.use(express.static(__dirname + '/public'));
app.use(serveIndex('public', {'icons': true}));
app.listen(3000);
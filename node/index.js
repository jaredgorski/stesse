const express = require('express');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');


const home = require('./routes/home.js');
const blog = require('./routes/blog.js');
const blogDefault = require('./routes/blogDefault.js')
const products = require('./routes/products.js');
const gallery = require('./routes/gallery.js');
const contact = require('./routes/contact.js');
const contactPost = require('./routes/contactPost.js');
const photoSubmit = require('./routes/photoSubmit.js');
const adminLogin = require('./routes/adminLogin.js');
const admin = require('./routes/admin.js');
const manageGallery = require('./routes/manageGallery.js');
const addPhoto = require('./routes/addPhoto.js');
const updatePhoto = require('./routes/updatePhoto.js');
const manageProducts = require('./routes/manageProducts.js');
const createProduct = require('./routes/createProduct.js');
const updateProduct = require('./routes/updateProduct.js');




// const WeDeploy = require('wedeploy');
// const multer = require('multer');

// const storage = multer.diskStorage({
//   filename: (req, file, cb) => cb(null, file.originalname),
//   destination: (req, file, cb) => cb(null, './public/uploads'),
// })
// const upload = multer({storage});
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/assets'));


// app.use(express.static('assets/styles'));


// const stsMiddleware = wedeployMiddleware.auth({
  // url: config.authServiceUrl,
  // scopes: ['admin'],
  // redirect: '/admin',
// });

app.get('/', home.home);
app.get('/blog', blog.blog);
app.get('/blog/posts/blogdefault', blogDefault.blogDefault);
app.get('/products', products.products);

app.get('/gallery', gallery.gallery);

app.get('/contact', contact.contact);
app.post('/contactPost', contactPost.contactPost);
app.get('/photoSubmit', photosubmit.photoSubmit);
app.get('/adminLogin', adminLogin.adminLogin);
app.get('/admin', admin.admin);
app.get('/admin/manageGallery', manageGallery.manageGallery);
app.get('/admin/manageGallery/addPhoto', addPhoto.addPhoto);

app.get('/admin/manageGallery/updatePhoto', updatePhoto.updatePhoto);

app.get('/admin/manageProducts', manageProducts.manageProducts);
app.get('/admin/manageProducts/createProduct', createProduct.createProduct);

app.get('/admin/manageProducts/updateProduct', updateProduct.updateProduct);



// app.get('/logout', (req, res, next) => {
//   res.clearCookie('access_token');
//   res.redirect('/');
// });



// app.post('/upload', upload.single('productImage'), (req, res) => {
//   WeDeploy
//     .data('data-ststesting.wedeploy.io')
//     .create('stsdataProducts', {
//       "title": req.body.productTitle,
//       "price": req.body.productPrice,
//       "link": req.body.productLink,
//       "image": req.file.filename
//     })
//     .then(function(succ){
//       res.redirect(`${req.protocol}://${req.get('host')}/admin-dash?cmd=success`);
//     })
//     .catch(function(err){
//       res.redirect(`${req.protocol}://${req.get('host')}/admin-dash?cmd=fail`);
//     });
// });

// app.post('/update', upload.single('productImage'), (req, res) => {
//   WeDeploy
//     .data('data-ststesting.wedeploy.io')
//     .update('stsdataProducts/' + req.body.productId, {
//       "title": req.body.productTitle,
//       "price": req.body.productPrice,
//       "link": req.body.productLink,
//       "image": req.file.filename
//     })
//     .then(function(succ){
//       res.redirect(`${req.protocol}://${req.get('host')}/admin-dash?cmd=success`);
//     })
//     .catch(function(err){
//       res.redirect(`${req.protocol}://${req.get('host')}/admin-dash?cmd=fail`);
//     });
// });


// app.listen(3000);
app.listen(3000, () => console.log('Example app listening on port http://172.16.22.98:3000!'))
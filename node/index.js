const express = require('express');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();


const home = require('./routes/home.js');
const blog = require('./routes/blog.js');
const blogDefault = require('./routes/blogDefault.js')
const products = require('./routes/products.js');
// const productPopulate = require('./routes/productPopulate.js');
const gallery = require('./routes/gallery.js');
// const photoPopulate = require('./routes/photoPopulate.js');
const contact = require('./routes/contact.js');
const contactPost = require('./routes/contactPost.js');
const photoSubmit = require('./routes/photoSubmit.js');
const adminLogin = require('./routes/adminLogin.js');
const admin = require('./routes/admin.js');
const manageGallery = require('./routes/manageGallery.js');
const addPhoto = require('./routes/addPhoto.js');
// const galleryAdd = require('./routes/galleryAdd.js');
const updatePhoto = require('./routes/updatePhoto.js');
// const galleryUpdate = require('./routes/galleryUpdate.js');
const manageProducts = require('./routes/manageProducts.js');
const createProduct = require('./routes/createProduct.js');
const productUpload = require('./routes/productUpload.js');
const updateProduct = require('./routes/updateProduct.js');
const productUpdate = require('./routes/productUpdate.js');



const footerHelper = require('./components/footer.js')
handlebars.registerHelper('footer', footerHelper.footer);


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/assets'));




const storage = multer.diskStorage({
  filename: (req, file, cb) => cb(null, file.originalname),
  destination: (req, file, cb) => cb(null, __dirname + '/assets/uploads'),
})
const upload = multer({storage});




// const stsMiddleware = wedeployMiddleware.auth({
  // url: config.authServiceUrl,
  // scopes: ['admin'],
  // redirect: '/admin',
// });

app.get('/', home.home);
app.get('/blog', blog.blog);
app.get('/blog/posts/blogdefault', blogDefault.blogDefault);
app.get('/products', products.products);
// app.get('/productPopulate', productPopulate.productPopulate);
app.get('/gallery', gallery.gallery);
// app.get('/photoPopulate', photoPopulate.photoPopulate);
app.get('/contact', contact.contact);
app.post('/contactPost', contactPost.contactPost);
app.get('/photoSubmit', photoSubmit.photoSubmit);
app.get('/adminLogin', adminLogin.adminLogin);
app.get('/admin', admin.admin);
app.get('/admin/manageGallery', manageGallery.manageGallery);
app.get('/admin/manageGallery/addPhoto', addPhoto.addPhoto);
// app.get('/admin/manageGallery/addPhoto/galleryAdd', galleryAdd.galleryAdd);
app.get('/admin/manageGallery/updatePhoto', updatePhoto.updatePhoto);
// app.get('/admin/manageGallery/updatePhoto/galleryUpdate', galleryUpdate.galleryUpdate);
app.get('/admin/manageProducts', manageProducts.manageProducts);
app.get('/admin/manageProducts/createProduct', createProduct.createProduct);
app.post('/admin/manageProducts/createProduct/productUpload', upload.single('productImage'), productUpload.productUpload);
app.get('/admin/manageProducts/updateProduct', updateProduct.updateProduct);
app.post('/admin/manageProducts/updateProduct/productUpdate', upload.single('productImage'), productUpdate.productUpdate);



// app.listen(3000);
app.listen(3000, () => console.log('Example app listening on port http://172.16.22.98:3000!'))
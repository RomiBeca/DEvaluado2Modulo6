import express from 'express'
import { engine } from 'express-handlebars';
import path from 'path'
import { products } from './products.data.js';
import { services } from './services.data.js';

const app = express()
//ruta absoluta
const __dirname = import.meta.dirname

// middleware archivos estáticos
app.use(express.static('public'))
app.use('/assets/css', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/css')))
app.use('/assets/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('home', { title: "Home Page 2.0", user: null })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/products', (req, res) => {
    res.render('products', { products: products })
})

app.get(`/services`, (req, res) => {
    res.render('services', { services });
})

app.get('/services/:service', (req, res) => {
    const { service } = req.params;
    const serviceData = services.find((item) => item.url === `/services/${service}`
    );
    if (!serviceData) {
        return res.status(404).render("404", { title: "Service Not Found" })
    }
    res.render("service", { service: serviceData });
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})
import express from 'express'
import { engine } from 'express-handlebars';
import path from 'path'
import { products } from './products.data.js';
import { services } from './services.data.js';

const app = express()
const __dirname = import.meta.dirname

// middleware archivos estáticos
app.use(express.static('public'))
app.use('/assets/css', express.static(path.join(__dirname + '/node_modules/bootstrap/dist/css')))
app.use('/assets/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

// function intermedio(req, res, next) {
//     const servicio = req.params.servicio;
//     const servicioEncontrado = services.find(item => item === servicio);
//     if (servicioEncontrado) {
//         return next()
//     } else {
//         return res.redirect('error')
//     }
// }
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
app.get(`/service`, (req, res) => {
    res.render('service', { services });
})

app.get('/notfound', (req, res) => {
    res.render('error')
})


// app.get('/services/:service', (req, res) => {
//     console.log(req.params)
//     res.render(req.params.ser)
// })

app.get('/services/:name', (req, res) => {
    const service = req.params.name;
    const serviceData = services.find(
        (item) => item.url === `/services/${service}`
    )
    if (!serviceData) {
        return res.status(404).render("404", { title: "service not Found" })
    }
    res.render("service", { service: serviceData });
});
// const servicio = req.params.services
// app.get servicio.find((item) => servicio === item.url)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})
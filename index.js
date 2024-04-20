import express from 'express'
import { engine } from 'express-handlebars';
import path from 'path'

const app = express()

// ruta absoluta
const __dirname = import.meta.dirname

// middleware archivos estáticos
app.use(express.static('public'))
app.use('/assets/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
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

const products = [
    { id: 1, title: "ZTE", img: "https://www.pcfactory.cl/public/foto/50037/1_200.jpg?t=1713542184599" },
    { id: 2, title: "Motorola", img: "https://www.pcfactory.cl/public/foto/48183/1_200.jpg?t=1712348209323" },
    { id: 3, title: "Motorola", img: "https://www.pcfactory.cl/public/foto/44473/1_200.jpg?t=1709222667989" },
    { id: 4, title: "Xiaomi", img: "https://www.pcfactory.cl/public/foto/50697/1_200.jpg?t=1712349941174" },
]

const fruts = ['🍉', '🍓', '🍌']

app.get('/products', (req, res) => {
    res.render('products', { products: products, fruts })
})

const services = [
    {
        name: "Web Development",
        description: "We create web applications with the latest technologies.",
        url: "/services/web-development",
    },
    {
        name: "Mobile Development",
        description: "We create mobile applications with the latest technologies.",
        url: "/services/mobile-development",
    },
    {
        name: "DevOps",
        description: "We create CI/CD pipelines with the latest technologies.",
        url: "/services/devops",
    },
    {
        name: "QA",
        description: "We create test cases with the latest technologies.",
        url: "/services/qa",
    },
    {
        name: "UX/UI",
        description: "We create designs with the latest technologies.",
        url: "/services/ux-ui",
    },
    {
        name: "Training",
        description: "We create training with the latest technologies.",
        url: "/services/training",
    },
    {
        name: "Consulting",
        description: "We create consulting with the latest technologies.",
        url: "/services/consulting",
    },
    {
        name: "Outsourcing",
        description: "We create outsourcing with the latest technologies.",
        url: "/services/outsourcing",
    },
];


app.get(`/services`, (req, res) => {
    res.render('services', { services });
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
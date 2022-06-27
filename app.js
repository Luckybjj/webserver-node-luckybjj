require('dotenv').config()
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico --> middleware
app.use(express.static('public'))
// las carpetas publicas tienen prioridad sobre las rutas que se definen
app.get('/', (req, res) => {        // no se ejecuta por que tiene la misma ruta del middleware
    res.render('home', {              // --> se puede mandar un segundo argumento que son las opciones
        nombre: 'Bryan Lagos',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {              // --> se puede mandar un segundo argumento que son las opciones
        nombre: 'Bryan Lagos',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {              // --> se puede mandar un segundo argumento que son las opciones
        nombre: 'Bryan Lagos',
        titulo: 'Curso de Node'
    });
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});


app.listen(port, () => console.log(`Server ON http://localhost:${port}`));
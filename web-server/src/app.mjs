import path from 'path';
import express from 'express';
import hbs from 'hbs';

const port = process.env.PORT || 3000;
const app = express()
const publicDirectory = path.resolve('./public')
const viewsDirectory = path.resolve('./templates/views')
const partialsDirectory = path.resolve('./templates/partials')

app.set('view engine','hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(partialsDirectory)
app.use(express.static(publicDirectory))

app.get('',(req,res)=>{
    res.render('index',{
        name:'Noble',
        title:'Home',
        details:'contents of Home page'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        details:'Content of About Page',
        title:'About',
        name:'Noble'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        details:'Content of Help Page',
        title:'Help',
        name:'Noble'
    })
})

app.get('/weather',(req, res)=>{
    res.send('weather page')
})

app.get('/help/*', (req,res)=> {
    res.render('error', {
        title: 'Error',
        error:'Help article not found'
    })
})

app.get('*', (req,res)=> {
    res.render('error', {
        title:'Error',
        error:'Page not found'
    })
})

app.listen(port, ()=> {
    console.log('success for console')
})
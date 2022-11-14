const express = require('express')
const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.set("view engine", 'ejs')

const pLnaguages = []

app.get('/', (req, res) => {
    res.render('index.ejs', { lang: pLnaguages })
})
app.get('/about', (req, res) => {
    res.render('about.ejs', { lang: pLnaguages })
})

app.post('/', (req, res) => {
    const pLang = req.body.pLang;
    pLnaguages.push(pLang);
    res.redirect("/")
    console.log(pLang)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

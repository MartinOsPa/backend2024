const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hola mi gente, ya pude con esta cosa jajaa')

})

app.get('/loquesea', function (req, res) {
    res.send('lo que sea!')

})

app.get('*', function (req, res) {
    res.send('Hola mi gente, ya pude con esta cosa jajaa')

})

app.listen(3000)
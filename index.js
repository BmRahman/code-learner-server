const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('course server running')
})

app.get('/all-courses', (req, res) => {
    res.send(courses)
})


app.listen(port, () => {
    console.log('course server running on', port)
})
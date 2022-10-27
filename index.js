const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const courses = require('./data/courses.json')
const allCourse = require('./data/course.json')
const checkout = require('./data/course.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('course server running')
})

app.get('/all-courses', (req, res) => {
    res.send(courses)
})

app.get('/all-course', (req, res) => {
    res.send(allCourse)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = allCourse.find(c => c.id === id)
    res.send(selectedCourse)
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const courseCheckout = checkout.find(c => c.id === id)
    res.send(courseCheckout)
})

app.listen(port, () => {
    console.log('course server running on', port)
})
// require express
const express = require('express')
// create new router object
const router = express.Router();
//add all the route associated with publisher directly into router*

// create access verfication middleware before accessing publishers route
router.use((req, res, next) => {
    //verification of query 'accessGranted'
    if (req.query.accessGranted) {
        next();
    } res.send("Sorry you don't have access")
})
//route to all publishers
router.get('/', (req, res) => {
    res.send('All Ipublishers');
});
// show details on one publisher
router.get('/:id', (req, res) => {
    res.send('Details On one publisher')
});
//Create new publisher
router.get('/new', (req, res) => {
    res.send('create new publisher')
})
router.post('/', (req, res) => {
    res.send('Post new created publisher')
})
//edit publisher
router.get('/:id/edit', (req, res) => {
    res.send('Editing  an publisher')
})

module.exports = router
// require express
const express = require('express')
// create new router object
const router = express.Router();
//add all the route associated with Ips directly into router*
//route to all Ips
router.get('/', (req, res) => {
    res.send('All Ips');
});
// show details on one dev
router.get('/:id', (req, res) => {
    res.send('Details On one Ip')
});
//Create new Dev
router.get('/new', (req, res) => {
    res.send('create new Ip')
})
router.post('/', (req, res) => {
    res.send('Post new created Ip')
})
//edit developer
router.get('/:id/edit', (req, res) => {
    res.send('Editing  an Ip ')
})

module.exports = router
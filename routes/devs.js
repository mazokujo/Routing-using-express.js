// require express
const express = require('express')
// create new router object
const router = express.Router();

//add all the route associated with devs directly into router*
//route to all devs
router.get('/', (req, res) => {
    res.send('All Game Developers');
});
// show details on one dev
router.get('/:id', (req, res) => {
    res.send('Details One developer')
});
//Create new Dev
router.get('/new', (req, res) => {
    res.send('create new dev')
})
router.post('/', (req, res) => {
    res.send('Post new created developer')
})
//edit developer
router.get('/:id/edit', (req, res) => {
    res.send('Editing  a shelter ')
})

module.exports = router
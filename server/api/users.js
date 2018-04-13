// apiRoutes/puppies.js
const router = require('express').Router();
const { User } = require('../db/models');

// matches GET requests to /api/puppies/
router.get('/', (req, res, next) => {
    User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email'] //<== only send those things !
    })
        .then(users => res.json(users))
        .catch(next)
});


// matches POST requests to /api/puppies/
router.post('/', (req, res, next) => { });


// matches PUT requests to /api/puppies/:puppyId
router.put('/:userId', (req, res, next) => { });


// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:userId', (req, res, next) => { });


module.exports = router;
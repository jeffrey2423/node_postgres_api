const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user.controller');

router.route('/')
    .get(userController.getUsers)


module.exports = router;
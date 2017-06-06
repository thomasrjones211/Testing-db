const express = require('express')
const router = express.Router()
const knex = require('../db')


router.get('/', function(req, res) {
  console.log('test');
});
router.post('/', function(req, res) { });
router.get('/:id', function(req, res) { });
router.patch('/:id', function(req, res) { });
router.delete('/:id', function(req, res) { });
app.use('/question', Router);

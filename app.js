const express = require('express');
const app = express();
var http = require('http');
var port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// app.use('/api/questions', require('./routes/questions'))
// app.use('/api/questions', require('./routes/tests'))


// router.get('/', (req, res, next) => {
//   console.log('what the');
// });
//
// router.post('/', validate, (req, res, next) => {
//   knex('posts')
//     .insert(params(req))
//     .returning('*')
//     .then(posts => res.json(posts[0]))
//     .catch(err => next(err))
// })
//
// router.get('/:id', (req, res, next) => {
//   knex('posts')
//     .where({id: req.params.id})
//     .first()
//     .then(post => res.json(post))
//     .catch(err => next(err))
// })
//
// router.patch('/:id', validate, (req, res, next) => {
//   knex('posts')
//     .update(params(req))
//     .where({id: req.params.id})
//     .returning('*')
//     .then(posts => res.json(posts[0]))
//     .catch(err => next(err))
// })
//
// router.delete('/:id', (req, res, next) => {
//   knex('posts')
//     .del()
//     .where({id: req.params.id})
//     .then(() => res.end())
//     .catch(err => next(err))
// })
//
// router.post('/:id/votes', (req, res, next) => {
//   knex('posts')
//     .update('vote_count', knex.raw('vote_count + 1'))
//     .where({id: req.params.id})
//     .then( () => knex('posts').where({id: req.params.id}).first() )
//     .then( post => res.json({vote_count: post.vote_count}))
//     .catch(err => next(err))
// })
//
// router.delete('/:id/votes', (req, res, next) => {
//   knex('posts')
//     .update('vote_count', knex.raw('vote_count - 1'))
//     .where({id: req.params.id})
//     .then( () => knex('posts').where({id: req.params.id}).first() )
//     .then( post => res.json({vote_count: post.vote_count}))
//     .catch(err => next(err))
// })
//
// function params(req) {
//   return {
//     title: req.body.title,
//     body: req.body.body,
//     author: req.body.author,
//     image_url: req.body.image_url,
//   }
// }
//
// function validate(req, res, next) {
//   const errors = [];
//   ['title', 'body', 'author', 'image_url'].forEach(field => {
//     if (!req.body[field] || req.body[field].trim() === '') {
//       errors.push({field: field, messages: ["cannot be blank"]})
//     }
//   })
//   if (errors.length) return res.status(422).json({errors})
//   next()
// }

module.exports = app

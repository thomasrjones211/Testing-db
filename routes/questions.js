const express = require('express')
const router = express.Router()
const knex = require('../db')



router.get('/', (req, res, next) => {
  knex('questions')
    .then(questions => {
    //   return knex('tests')
    //     .whereIn('question_id', question.map(p => p.id))
    //     .then((tests) => {
    //       const testsByQuestionId = tests.reduce((result, test) => {
    //         result[test.question_id] = result[test.question_id] || []
    //         result[test.question_id].push(test)
    //         return result
    //       }, {})
    //       questions.forEach(question => {
    //         question.tests = commentsByPostId[question.id] || []
    //       })
          res.json(questions);
        });
//     })
//     .catch(err => next(err))
});


// POST /api/questions/
router.post('/', validate, (req, res, next) => {
  knex('questions')
    .insert(params(req))
    .returning('*')
    .then(questions => res.json(questions[0]))
    .catch(err => next(err))
})

// GET /api/questions/:id/
router.get('/:id', (req, res, next) => {
  knex('questions')
    .where({id: req.params.id})
    .first()
    .then(question => res.json(question))
    .catch(err => next(err))
})


router.patch('/:id', validate, (req, res, next) => {
  knex('questions')
    .update(params(req))
    .where({id: req.params.id})
    .returning('*')
    .then(questions => res.json(questions[0]))
    .catch(err => next(err))
});


router.delete('/:id', function(req, res) {

});

function params(req) {
  return {
    prompt: req.body.prompt,
  };
}


function validate(req, res, next) {
  const errors = [];
  ['prompt'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field: field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}


module.exports = router;

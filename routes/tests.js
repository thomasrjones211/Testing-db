const express = require('express')
const router = express.Router()
const knex = require('../db')



router.get('/', (req, res, next) => {
  knex('tests')
    .then(tests => {
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
          res.json(tests);
        });
//     })
//     .catch(err => next(err))
});


// POST /api/tests/
router.post('/', validate, (req, res, next) => {
  knex('tests')
    .insert(params(req))
    .returning('*')
    .then(tests => res.json(tests[0]))
    .catch(err => next(err))
})

// GET /api/tests/:id/
router.get('/:id', (req, res, next) => {
  knex('tests')
    .where({id: req.params.id})
    .first()
    .then(test => res.json(test))
    .catch(err => next(err))
})


router.patch('/:id', validate, (req, res, next) => {
  knex('tests')
    .update(params(req))
    .where({id: req.params.id})
    .returning('*')
    .then(tests => res.json(tests[0]))
    .catch(err => next(err))
});


router.delete('/:id', function(req, res) {

});

function params(req) {
  return {
    question_id: req.body.question_id,
    test_code: req.body.test_code,
  };
}


function validate(req, res, next) {
  const errors = [];
  ['question_id','test_code'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field: field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}

module.exports = router;

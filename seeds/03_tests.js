
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tests').del()
    .then(function () {
      // Inserts seed entries
      return knex('tests').insert([
        {
          question_id: 1,
          test_code: 'yes'
        },
        {
          question_id: 2,
          test_code: 'yes'
        },
        {
          question_id: 3,
          test_code: 'no'
        },
        {
          question_id: 4,
          test_code: 'yes'
        }
    ]);
  });
};

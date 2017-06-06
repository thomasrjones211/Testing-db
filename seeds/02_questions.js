
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          prompt: 'Who Dis',
        },
        {
          prompt: 'Who Dat',
        },
        {
          prompt: 'Who Farted',
        },
        {
          prompt: 'Who Next',
        }

      ]);
    });
};

const User = require('./user.model');

const filter = async (req, res) => {
  const { group } = req.query;

  //without refactor
  // console.log(group);
  // if (group == 'jovenes') {
  //   const young = await User.find({ age: { $lt: 18 } });
  //   res.json(young).status(200);
  // } else if (group == 'adultos') {
  //   const adults = await User.find({ age: { $lt: 70, $gt: 18 } });
  //   res.json(adults).status(200);
  // } else {
  //   const seniors = await User.find({ age: { $gt: 70 } });
  //   res.json(seniors).status(200);
  // }

  const type = {
    jovenes: { $lt: 18 },
    adultos: { $lt: 70, $gt: 18 },
    'tercera edad': { $gt: 70 },
  };

  const users = await User.find({ age: type[group] });
  res.json(users).status(200);
};

module.exports = { filter };

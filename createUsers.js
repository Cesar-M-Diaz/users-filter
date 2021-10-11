const readXlsxFile = require('read-excel-file/node');
const User = require('./user.model');

function createUser(req, res) {
  const filePath = req.files.excel.file;

  const schema = {
    identification: {
      prop: 'identification',
      type: Number,
    },
    fullName: {
      prop: 'fullName',
      type: String,
    },
    age: {
      prop: 'age',
      type: Number,
    },
  };

  readXlsxFile(filePath, { schema }).then(async ({ rows, errors }) => {
    let created = 0;
    let modified = 0;
    for (let i = 0; i < rows.length; i++) {
      const newUser = await User.updateOne(
        { identification: rows[i].identification },
        { $set: rows[i] },
        { upsert: true },
      );
      created += newUser.upsertedCount;
      modified += newUser.modifiedCount;
    }
    res.status(200).send(`${created} created users and ${modified} modified users`);
  });
}

module.exports = { createUser };

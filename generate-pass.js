const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = process.argv.slice(2)[0];

bcrypt.genSalt(saltRounds, () => {
  bcrypt.hash(password, saltRounds, (error, hash) => {console.log(hash)})
})
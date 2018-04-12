const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/yourdbname', {
    logging: false // unless you like the logs
    // ...and there are many other options you may want to play with
});
//or if using Heroku as a deployment service ad Heroku Postgres as your database:
//
// const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432:yourdbname', {
//   logging: false // unless you like the logs
//   // ...and there are many other options you may want to play with
// });



module.exports = db;
const app = require('./server');
const PORT = process.env.PORT || 3666;
const { db } = require('./server/db/models');
if (process.env.NODE_ENV === 'development') {
    require('./localSecrets'); // mutate the process.env object with your variables
}

require('./mainApp')


db.sync()
    .then(() => {
        console.log('The postgres server is up and running - maybe you should go catch it!');
        app.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`Your server kindly awaits your attention on port ${PORT}`);
        })
    })
    .catch(console.error)
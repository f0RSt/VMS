const mongoose = require('mongoose');


module.exports.init = () => {
    const dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.connect('mongodb://0.0.0.0', dbOptions); // Connect to MongoDB with MONGO uri on .env
    mongoose.Promise = global.Promise;

    mongoose.connection.on('connected', () => {
        console.log('[SUCCESS] Mongoose has successfully connected!');
    });

    mongoose.connection.on('err', err => {
        console.error(`[ERROR] Mongoose connection error: \n${err.stack}`);
    });

    mongoose.connection.on('disconnected', () => {
        console.warn('[WARN] Mongoose connection lost');
    });
    mongoose.connection.on('reconnect', function (ref) {
        connected=true;
        console.log('reconnect to mongo server.');
    });
}
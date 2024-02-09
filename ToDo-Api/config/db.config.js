const mongoose = require('mongoose');

const DB_NAME = 'ToDoList';
const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const DB_URI = `${URI}/${DB_NAME}`;

mongoose.connect(DB_URI)
    .then(() => console.info(`Successfully connected to the database ${DB_URI}`))
    .catch((error) => {
        console.error(`An error ocurred when trying to connect to the database ${DB_URI}`, error);
    })

process.on('SIGINT', () => {
    mongoose.connection.close()
        .then(function () {
            console.log('Mongoose disconected on app termination');
            process.exit(0);
        })
});
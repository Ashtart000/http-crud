const DataBaseError = require("./errors/DataBaseError");
const NotFoundError = require('./errors/NotFoundError');
const { ValidationError } = require('yup');

module.exports.basicErrorHandler = (err, req, res, next) => { // ОБРОБНИК ПОМИЛОК
    if(err instanceof DataBaseError) {
        return res.status(404).send('Something wrong with database');
    }

    if(err instanceof ValidationError) {
        return res.status(400).send('Invalid data');
    }

    if(err instanceof NotFoundError) {
        return res.status(404).send(err.message);
    }

    else {
        return res.status(500).send('Something wrong');
    }
};
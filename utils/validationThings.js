const yup = require('yup');

const ThingSchema = yup.object({
    body: yup.string('Body must be a string').required('Body is required!').min(3).max(100)
});

module.exports.validateThing = async (req, res, next) => {
    const {body} = req;
    try {
        const validated = await ThingSchema.validate(body);

        if(validated) {
            next();
        } 
    } catch (error) {
        next(error);
    }
};
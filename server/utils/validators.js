const {body, validationResult} = require("express-validator");

module.exports.validate = (validations) => {
    return async (req, res, next) => {
        for(let validation of validations) {
            const result = await validation.run(req);
            if(!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            return next();
        }
        res.status(422).json({ errors:errors.array() });
    }
}

module.exports.loginValidator = [
    body("email").trim(),
    body("password").trim().isLength({min: 6}).notEmpty()
]

module.exports.signupValidator = [
    body("username").notEmpty(),
    body("email").trim(),
    body("password").trim().isLength({min: 6}).notEmpty()
]
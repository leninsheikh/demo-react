
import {required, length, email} from "redux-form-validators";

const validationsObj = {
    user: {
        username: [required(), length({ max: 15 })],
        email:    [required(), email({message: 'boooooooo!!'})],
    }
};

// Reusable with any other form
const validate = (values, type) => {
    let validations = validationsObj['user'];
    if (type === 'user') {
        validations = validationsObj['user']
    }
    const errors = {};
    for (let field in validations) {
        let value = values[field];
        errors[field] = validations[field].map(validateField => {
            return validateField(value, values)
        }).find(x => x)
    }
    return errors
};
export default validate

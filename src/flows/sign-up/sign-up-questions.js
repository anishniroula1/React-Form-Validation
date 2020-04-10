import {Validators} from "../../library/utils/Validator";

export const signUpQuestion = (values, errors) => {
    return {
        username: {
                value: values.username,
                key: 'username',
                label: 'Username',
                error: errors.username
        },
        email: {
            value: values.email,
            key: 'email',
            label: 'Email',
            error: errors.email
        },
        password: {
            value: values.password,
            key: 'password',
            label: 'Password',
            type: 'password',
            min: 8,
            error: errors.password
        },
        firstName: {
            value: values.firstName,
            key: 'firstName',
            label: 'First Name',
            error: errors.firstName
        },
        lastName: {
            value: values.lastName,
            key: 'lastName',
            label: 'Last Name',
            error: errors.lastName
        },

    }
};

export default function validateSignUp(values) {
    let errors = {};
    if(Validators.required(values.username)) {
        errors.username = "Username is Required"
    }
    if(Validators.required(values.email)) {
        errors.email = "Email is Required"
    } else if(Validators.email(values.email)) {
        errors.email = "Please enter Valid Email Address"
    }
    if(Validators.required(values.firstName)) {
        errors.firstName = "First Name is Required"
    }
    if(Validators.required(values.lastName)) {
        errors.lastName = "Last Name is Required"
    }
    if(Validators.required(values.password)) {
        errors.password = "Password is Required"
    } else if(Validators.password(values.password)) {
        errors.password = "Password Must be Longer then 8 character and need one Number and Symbol"
    }




    return errors;
}

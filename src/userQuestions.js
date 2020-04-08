import {Validators} from "./library/Validator";

export const userQuestions = (values, errors) => {
    return {
        email: {
            value: values.email,
            key: 'email',
            label: 'What is your Username',
            min: 5,
            error: errors.email
        },
        password: {
            value: values.password,
            key: 'password',
            label: 'What is your Password',
            min: 5,
            type: 'password',
            error: errors.password
        },
        accept: { // single check box return true or false
            value: values.accept,
            key: 'accept',
            label: 'Accept Term and Condition',
            error: errors.accept
        },
        countries: { // single choice dropdown
            value: values.countries,
            key: 'countries',
            label: 'These are the List of Country',
            data: [
                {value: 'India', label: 'India'},
                {value: 'USA', label: 'USA'},
                {value: 'UK', label: 'UK'},
                {value: 'Germany', label: 'Germany'},
                {value: 'Russia', label: 'Russia'},
                {value: 'Italy', label: 'Italy'},
            ],
            error: errors.countries
        },
        country: { // Radio Button for single choices
            value: values.country,
            key: 'country',
            label: 'These are the List of Country',
            data: [
                {value: 'India', label: 'India'},
                {value: 'USA', label: 'USA'},
                {value: 'UK', label: 'UK'},
                {value: 'Germany', label: 'Germany'},
                {value: 'Russia', label: 'Russia'},
                {value: 'Italy', label: 'Italy'},
            ],
            error: errors.country
        },
        sport: { // Group Check boxes
            value: values.sport,
            key: 'sport',
            label: 'What is your favorite Sport',
            data: [
                {value: 'Soccer', label: 'Soccer'},
                {value: 'Cricket', label: 'Cricket'},
                {value: 'Football', label: 'FootBall'},
                {value: 'Germany', label: 'Germany'},
                {value: 'Russia', label: 'Russia'},
                {value: 'Italy', label: 'Italy'},
            ],
            error: errors.sport
        },
        hello: { // Group Check boxes
            value: values.hello,
            key: 'hello',
            label: 'What is your favorite Sport',
            data: [
                {value: 'Soccer', label: 'Soccer'},
                {value: 'Cricket', label: 'Cricket'},
                {value: 'Football', label: 'FootBall'},
                {value: 'Germany', label: 'Germany'},
                {value: 'Russia', label: 'Russia'},
                {value: 'Italy', label: 'Italy'},
            ],
            error: errors.hello
        },
    }
};

export default function validate(values) {
    let errors = {};
    if (Validators.required(values.email)) {
        errors.email = "Email is required";
    } else if (Validators.email(values.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (!values.password) {
        errors.password = "password is required";
    } else if(Validators.password(values.password)) {
        errors.password = "Please try Stronger Password"
    }
    if (!values.accept) {
        errors.accept = "Please Check this Box";
    }
    if (!values.countries) {
        errors.countries = "Please Choose one";
    }
    if (!values.country) {
        errors.country = "Please Choose one";
    }
    if (!values.sport || Object.keys(values.sport).length === 0) {
        errors.sport = "Please Choose More then one";
    }
    if (!values.hello || Object.keys(values.hello).length === 0) {
        errors.hello = "Please Choose More then one";
    }
    return errors;
};

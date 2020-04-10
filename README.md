This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Make Different Question file

## TextBox - By Default it will always be "text" but by passing type you can pass(password, tel, date):
```
  export const userQuestions = (values, errors) => {
    return {
        email: {
            value: values.email, // values will come from component or props
            key: 'email', // Key is always same as input name and this is required
            label: 'What is your Username',
            max: 45, // not required but if needed, this can be very helpful
            min: 5,
            error: errors.email // name of the error
        },
        password: {
            value: values.password,
            key: 'password',
            label: 'What is your Password'
            type: 'password', // this is how you pass type
            error: errors.password
        },
        phone: {
            value: values.phone,
            key: 'phone',
            label: 'What is your Phone Number',
            type: 'tel', // type phone
            max: 14,
            error: errors.phone
        },
        date: {
            value: values.date,
            key: 'date',
            label: 'What is Today Date',
            type: 'date',
            error: errors.date
        },
  }
```

## Drowpdown, Radio Button, Group Checkbox, and Select All Checkbox
```
export const userQuestions = (values, errors) => {
    return {
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
    }
};
```

## Single checkbox use for Term and condition or else
```
export const userQuestions = (values, errors) => {
    return {
        accept: { // single check box return true or false
            value: values.accept,
            key: 'accept',
            label: 'Accept Term and Condition',
            error: errors.accept
        },
};
```

## Error Service
```

export default function validate(values) {
    let errors = {};
    if (Validators.required(values.email)) {
        errors.email = "Email is required";
    } else if (Validators.email(values.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (Validators.required(values.password)) {
        errors.password = "password is required";
    } else if(Validators.password(values.password)) {
        errors.password = "Please try Stronger Password"
    }
    if (Validators.required(values.accept)) {
        errors.accept = "Please Check this Box";
    }
    if (Validators.required(values.phone)) {
        errors.phone = "Please Enter your Phone Number";
    }
    if (Validators.phone(values.phone)) {
        errors.phone = "Please Valid Phone Number";
    }
    if (Validators.required(values.date)) {
        errors.date = "Please Enter the date";
    }
    if (!values.hello || Object.keys(values.hello).length === 0) {
        errors.hello = "Please Choose More then one";
    }
    return errors;
};
```

## Use in Component
```
const { handleSubmit, handleChange, handleBlur, values, errors } = useForm(validate, submitFunction, initialState);
const question = userQuestions(values, errors);
return (
        <form onSubmit={handleSubmit} noValidate className="App">
            <FormErrorSummary errors={errors}/>
            <TextboxQuestion
                question={question.email}
                onChange={handleChange}
                onBlur={handleBlur}/>

            <TextboxQuestion question={question.password}
                             onChange={handleChange}
                             onBlur={handleBlur}/>

            <TextboxQuestion question={question.phone}
                             onChange={handleChange}
                             onBlur={handleBlur}/>

            <TextboxQuestion question={question.date}
                             onChange={handleChange}
                             onBlur={handleBlur}/>

            <DropdownQuestion question={question.countries}
                      onChange={handleChange}
                      onBlur={handleBlur}/>

            <RadioButtonQuestion question={question.country}
                      onChange={handleChange}
                      onBlur={handleBlur}/>

             <CheckboxGroupQuestion
                 question={question.sport}
                 onChange={handleChange}
                 onBlur={handleBlur}/>

             <SelectGroupQuestion
                 question={question.hello}
                 onChange={handleChange}
                 onBlur={handleBlur}/>

            <CheckboxQuestion question={question.accept}
                              onChange={handleChange}
                              onBlur={handleBlur}/>
            <Button/>
        </form>

```

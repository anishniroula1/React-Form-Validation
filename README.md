This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Make Different Question file

#### TextBox - By Default it will always be "text" but by passing type you can pass(password, tel, date):
<code>
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
</code>

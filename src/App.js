import React, {Component} from 'react';
import './App.css';
import TextboxQuestion from "./library/questions/textbox-question/textbox-question";
import validate, {userQuestions} from "./userQuestions";
import useForm from "./library/utils/useForm";
import FormErrorSummary from "./library/utils/form-error-summary";
import Button from "./library/button/Button";
import CheckboxQuestion from "./library/questions/checkbox-question/checkbox-question";
import DropdownQuestion from "./library/questions/dropdown-question/dropdown-question";
import RadioButtonQuestion from "./library/questions/radionButton-question/radioButton-question";
import CheckboxGroupQuestion from "./library/questions/checkbox-group-question/checkbox-group-question";

const App = () => {
    const submitFunction = async () => {
        console.log(values);
    };

    const initialState = {email: 'Anishniroula1@gmail.com',
    phone: '1234567890'};
    // call the hook
    const { handleSubmit, handleChange, handleBlur, values, errors, setValues } = useForm(validate, submitFunction, initialState);
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

             <CheckboxGroupQuestion
                 question={question.hello}
                 onChange={handleChange}
                 onBlur={handleBlur}/>

            <CheckboxQuestion question={question.accept}
                              onChange={handleChange}
                              onBlur={handleBlur}/>
            <Button/>
        </form>

        );
};

export default App;

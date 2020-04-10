import React from "react";
import './sign-up.scss'
import useForm from "../../library/utils/useForm";
import validateSignUp, {signUpQuestion} from "./sign-up-questions";
import TextboxQuestion from "../../library/questions/textbox-question/textbox-question";
import FormErrorSummary from "../../library/utils/form-error-summary/form-error-summary";
import Button from "../../library/button/Button";

const SignUp = () => {
    const submitFunction = async () => {
        console.log(values);
    };

    // call the hook
    const { handleSubmit, handleChange, handleBlur, values, errors } = useForm(validateSignUp, submitFunction);
    const question = signUpQuestion(values, errors);
    return (
        <div className="sign-up">
            <div>
                <h1>Sign Up</h1>
            </div>
            <form onSubmit={handleSubmit} noValidate>
                <FormErrorSummary errors={errors}/>
                <TextboxQuestion question={question.firstName} onChange={handleChange} onBlur={handleBlur} />
                <TextboxQuestion question={question.lastName} onChange={handleChange} onBlur={handleBlur} />
                <TextboxQuestion question={question.email} onChange={handleChange} onBlur={handleBlur} />
                <TextboxQuestion question={question.username} onChange={handleChange} onBlur={handleBlur} />
                <TextboxQuestion question={question.password} onChange={handleChange} onBlur={handleBlur} />
                <Button/>
            </form>

        </div>
    );
};

export default SignUp;

import React from 'react';
import PropTypes from 'prop-types';
import './textbox-question.scss'
import ValidationMessage from "../../common/validation-message/validation-message";
import {phoneMask} from "../../utils/mask";

const TextboxQuestion = ({question, onChange, onBlur}) => {
    const placeHolder = () => {
        let placeholder = '';
        if (question.type === 'tel') {
            placeholder = "(123) 456-789";
        }
        return placeholder
    };

    const questionValue = () => {
        if (question.type === 'tel') {
            return question.value = phoneMask(question.value);
        } else {
            return question.value || '';
        }
    };
    // question.value = normalizeInput(question.value);


    return (
        <div className="textbox-question__formGroup">
            {question.label && <label className={question.error ? "textbox-question__error-label" : "textbox-question__label"}>
                {question.label}</label>}
            <br/>
            <input
                className={question.error ? "textbox-question__error-input" : "textbox-question__input"}
                name={question.key}
                type={!question.type ? 'text' : question.type}
                value={questionValue()}
                onChange={onChange}
                onBlur={onBlur}
                maxLength={!!question.max ? question.max : ''}
                minLength={!!question.min ? question.min : ''}
                placeholder={placeHolder()}
            />
            {question.error && <ValidationMessage message={question.error}/>}
        </div>
    )
};

TextboxQuestion.propTypes = {
    value: PropTypes.string || PropTypes.number,
    // formError: PropTypes.func.isRequired,
};

TextboxQuestion.defaultProps = {
    value: '',
};

export default TextboxQuestion;

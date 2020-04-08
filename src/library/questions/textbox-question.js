import React, {useState} from 'react';
import PropTypes from 'prop-types';

const TextboxQuestion = ({question, onChange, onBlur}) => {
    return (
        <div>
            {question.label && <label htmlFor="app-input-field">{question.label}</label>}
            <br/>
            <input
                name={question.key}
                type={!question.type ? 'text' : question.type}
                value={question.value || ''}
                onChange={onChange}
                onBlur={onBlur}
            /><br/>
            {question.error && <span>{question.error}</span>}
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

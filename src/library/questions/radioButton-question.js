import React from 'react';

const RadioButtonQuestion = ({question, onChange, onBlur}) => {
    return (
        <div>
            <p>{question.label}:</p>
            {question.data.map((item, key) => (
                <div key={key}>
                    <label>
                        <input type="radio" name={question.key} value={item.value} onChange={onChange} onBlur={onBlur}/>
                        {item.label}
                    </label><br/>
                </div>
            ))}
            {question.error && <span>{question.error}</span>}
        </div>
    )
};

export default RadioButtonQuestion;

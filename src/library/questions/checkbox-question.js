import React, {useState} from "react";
const CheckboxQuestion = ({question, onChange, onBlur}) => {
    const handleChange = (event) => {
        const {name, checked} = event.target;
        onChange({checkbox: true, name: name, checked: checked})
    };
    return (
        <div>
            <label>
                <input
                    name={question.key}
                    type="checkbox"
                    value={question.value || false}
                    defaultChecked={question.value || false}
                    onChange={handleChange}
                    onBlur={onBlur}/>
                {question.label}
            </label>
            <p>{question.error && <span>{question.error}</span>}</p>
        </div>
    )
};

export default CheckboxQuestion;

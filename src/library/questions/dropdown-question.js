import React from 'react';

const DropdownQuestion = ({question, onChange, onBlur}) => {
    return (
        <div>
            <select
                name={question.key}
                value={question.value}
                onChange={onChange}
                onBlur={onBlur}>
                <option value="">{question.label}</option>
                {question.data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            {question.error && <p>{question.error}</p>}
        </div>
    )
};

export default DropdownQuestion;

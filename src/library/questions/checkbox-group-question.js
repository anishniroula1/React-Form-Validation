import React, {useState} from "react";

const CheckboxGroupQuestion = ({question, onChange, onBlur}) => {
    const [inputs, setInputs] = useState([]);
    const handleClick = (event) => {
        const index = inputs.findIndex(item => item === event.target.value);

        if (~index) {
            setInputs([
                ...inputs.slice(0, index),
                ...inputs.slice(index + 1)
            ]);
        } else {
            setInputs([...inputs, event.target.value]);
        }
    };

    const handleBlur = (event) => {
        onChange({checkboxGroup: true, name: event.target.name, value: inputs});
        onBlur(event);
    };

    return (
        <div>
            <p>{question.label}</p>
                {question.data.map(data => (
                    <label key={data.value}>
                        <input
                            type="checkbox"
                            name={question.key}
                            value={data.value}
                            onClick={handleClick}
                            onBlur={handleBlur}
                        />
                        {data.value}
                    </label>
                ))}
            {question.error && <p>{question.error}</p>}
        </div>
    );
};

export default CheckboxGroupQuestion;

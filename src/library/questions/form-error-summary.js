import React from "react";
export default function FormErrorSummary({errors}) {
    return (
        <div>
            {Object.keys(errors).length > 0 && <p>{'Looks like Error has occured, please Check Below Field'}</p>}
        </div>
    );
};

import React from "react";
import './form-error-summary.scss'
export default function FormErrorSummary({errors}) {
    return (
        <div>
        {Object.keys(errors).length > 0 &&
                <div className={errors ? "form-error-summary__overall" : ''}>
                    <p className="form-error-summary__container">
            <span className="form-error-summary__svg">
                <span className="form-error-summary__error">
                    Looks like {Object.keys(errors).length} Error has occured, please Check Below Field
                </span>
            </span>
                    </p>
                </div>
        }
        </div>
    );
    /*return (
        <div className="warning">
            <div className="warning__image"></div>
            <div className="warning__content">
                <p>
                    Error has occured, please Check Below Field
                </p>
            </div>
        </div>
    )*/
};

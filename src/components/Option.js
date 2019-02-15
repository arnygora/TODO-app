import React from "react";

const Option = ({optionText, handleDeleteOption}) => {
    return (
        <div>
            {optionText}
            <button
                className='button button--link'
                onClick={(e) => {
                    handleDeleteOption(optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

export {Option}
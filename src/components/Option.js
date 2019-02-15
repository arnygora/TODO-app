import React from "react";

const Option = ({optionText, handleDeleteOption, counter}) => {
    return (
        <div className='option'>
            <p className="option__text">
                {`${++counter}. ${optionText}`}
            </p>
            <button
                className='button button--link'
                onClick={() => {
                    handleDeleteOption(optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

export {Option}
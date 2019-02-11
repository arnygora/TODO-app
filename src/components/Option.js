import React from "react";

const Option = ({optionText, handleDeleteOption}) => (
        <div>
            {optionText}
            <button
                onClick={(e) => {
                    handleDeleteOption(optionText);
                }}
            >
                remove
            </button>
        </div>
    );

export {Option}
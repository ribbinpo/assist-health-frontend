import React from "react";

type labelformProps = {
    text: string;
}


const labelform = ({ text }: labelformProps) => {
    return(
        <label className="block text-gray-700 text-sm font-bold text-left">
        {text}
        </label>
    );
}

export { labelform as LabelForm }
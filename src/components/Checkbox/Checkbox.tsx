import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLInputElement> {
    label: string;
    checked: any
}

export const Checkbox = ({ checked, label, ...props }: Props) => {
    return (

        <label className={`input-circle ${checked===label?'checked':''}`}>{label}
            <input type="checkbox" checked={checked === label || false} className="checkbox-input" {...props} />
        </label>
    );
};

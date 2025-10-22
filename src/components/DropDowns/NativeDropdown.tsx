import React from "react";
import "./dropdownStyles.css";

interface NativeDropdownProps {
    options: string[];
    label?: string;
}

const NativeDropdown: React.FC<NativeDropdownProps> = ({ options, label }) => {
    return (
        <div className="dd-field">
            {label && <label className="dd-label">{label}</label>}
            <select className="dd-native">
                {options.map((opt) => (
                    <option key={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
};

export default NativeDropdown;

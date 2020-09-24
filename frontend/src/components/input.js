
import React from 'react'

const Input = (props) => {
    const {label,error,name,valueName,onChangeData,type, placeholder,defaultValue} = props;
    const className= error ? "form-control is-invalid" : "form-control";
   
        return (
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{label}</label>
                <input
                    type={type} className={className}
                    name={name}
                    onChange={e => onChangeData(name, e.target.value)}
                    value={valueName}
                    defaultValue={defaultValue}
                    placeholder={placeholder}  />
                <div className="invalid-feedback">{error}</div>
            </div>
        );
}
export default Input;
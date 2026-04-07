import inputstyle from './input.module.css';
const Input = ({ type,
    placeholder,
    id,
    name,
    label,
    autoComplete }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            name={name}
            label={label}
            autoComplete={autoComplete}
            className={inputstyle.myinput}
        />
    )
}
export default Input;
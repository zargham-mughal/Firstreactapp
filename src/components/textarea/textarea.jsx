const FormTextarea = ({
    id,
    label = 'Message',
    name,
    value,
    placeholder,
    rows = 4,
}) => {
    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>
            <br />
            <textarea
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                rows={rows}
            />
        </div>
    )
}
export default FormTextarea;
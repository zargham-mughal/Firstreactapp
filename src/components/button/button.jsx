const FormButton = ({ type = 'submit', children, disabled, xyz }) => {



    return (
        <button
            className="form-submit"
            type={type}
            disabled={disabled}
            onClick={xyz}
        >
            {children}
        </button>
    )
}
export default FormButton;
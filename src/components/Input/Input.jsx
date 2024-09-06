import './Input.css';


function Input({ label, placeholder, type, value, onChange, name,
                 error, errorReset }) {

  const handleChange = (value) => {
    errorReset('');
    onChange(value);
  }

  return(
    <div className="form-input-container">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>

      <input
        className={`form-input ${error ? "form-input-error" : ""}`}
        placeholder={placeholder}
        value={value} 
        onChange={(e) => handleChange(e.target.value)}
        type={type} 
        name={name} 
        id={name} 
      />

      {error && (
        <div className="input-error">
          {error}
        </div>
      )}

    </div>
  );
}

export default Input;
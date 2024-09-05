function Input({ label, placeholder, type, value, onChange, name, id,
                 error, errorReset }) {

  const handleChange = (value) => {
    errorReset('');
    onChange(value);
  }

  return(
    <div>
      <label htmlFor={id}>
        {label}
      </label>

      <input
        placeholder={placeholder}
        value={value} 
        onChange={(e) => handleChange(e.target.value)}
        type={type} 
        name={name} 
        id={id} 
      />

      {error && (
        <div>
          {error}
        </div>
      )}

    </div>
  );
}

export default Input;
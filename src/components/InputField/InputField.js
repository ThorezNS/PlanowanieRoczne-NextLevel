import styles from './InputField.module.css';

const InputField = ({ placeholder, name, handleChange, inputValue }) => {
  return (
    <form>
      <input
        onChange={handleChange}
        className={styles.input}
        name={name}
        type="text"
        value={inputValue[name] || ''}
        placeholder={placeholder}
      />
    </form>
  );
};

export default InputField;

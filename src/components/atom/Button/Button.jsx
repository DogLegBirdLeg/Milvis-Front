import './Button.css';

const Button = ({ type, isDisabled, style }) => {
  return (
    <button
      className={'button'}
      type={type}
      disabled={isDisabled}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;

import './Button.css';

const Button = ({
  children,
  type,
  styleType = 'primary',
  className,
  isDisabled = false,
  style,
}) => {
  const buttonStyle = {
    default: 'button--default',
    primary: 'button--primary',
  };

  return (
    <button
      className={`button ${buttonStyle[styleType]} ${className}`}
      type={type}
      disabled={isDisabled}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;

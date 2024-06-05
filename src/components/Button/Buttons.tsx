import React, { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className: string;
  actionOnClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  className,
  actionOnClick,
  children,
  disabled,
  type,
}: ButtonProps): React.ReactElement => {
  const buttonClass = `button ${className}`;

  return (
    <button
      disabled={disabled}
      type={type}
      className={buttonClass}
      onClick={actionOnClick}
    >
      {children}
    </button>
  );
};

export default Button;

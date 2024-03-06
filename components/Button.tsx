import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

//smaller interface, attributes react provided
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {} //empty object

//way to forward ref and attributes HTML button, extend it so we don't have to write out all props
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
                    w-full
                    rounded-full
                    bg-green-500
                    border
                    border-transparent
                    p-3
                    py-3
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    text-black
                    font-bold
                    hover:opacity-75
                    transition
                    `,
          className
        )} //adding className after the back tick allow us to modify the button in the future if we need to
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

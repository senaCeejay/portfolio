import { cva } from 'class-variance-authority';
import React, { Children } from 'react';
import { twMerge } from 'tailwind-merge';
// const variants = { default: "bg-secondary hover:bg-secondary-hover transition-colors", ghost: "hover:bg-gray-100 transition-colors" }
// const sizes = { default: "rounded p-2  transition-colors", icon: " rounded-full w-10 h-10 flex items-center justify-center p-2.5  transition-colors" }

const buttonStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"],
            dark: ["bg-sky-400", "hover:bg-sky-500", "text-white"]
        },
        size: {
            default: ["rounded p-2 w-36"],
            icon: ["rounded-full w-10 h-10 flex items-center justify-center p-2.5"],
        }

    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
const Button = ({ variant, size, className, children, onClick, title }) => {
    return (
        <>
            {/* <button {...props} className={twMerge(variants[variant] + sizes[size])}  >
                {children}
            </button > */}
            <button onClick={onClick} title={title} className={twMerge(buttonStyles({ variant, size }), className)} >
                {children}
            </button>
        </>
    );
}
// Button.propTypes = {
//     variant: PropTypes.string.isRequired,
// };
export default Button;

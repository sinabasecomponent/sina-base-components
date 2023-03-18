import React from 'react';
export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
    type?: 'submit' | 'button' | 'reset';
    mode?: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };

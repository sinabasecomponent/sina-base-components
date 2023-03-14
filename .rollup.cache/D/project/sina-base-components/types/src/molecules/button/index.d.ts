import { FC } from "react";
export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "children"> {
    type?: "submit" | "button" | "reset";
    mode?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
    isLoading?: boolean;
    disabled?: boolean;
}
declare const Button: FC<ButtonProps>;
export { Button };
//# sourceMappingURL=index.d.ts.map
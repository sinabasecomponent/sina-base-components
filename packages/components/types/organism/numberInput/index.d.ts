/// <reference types="react" />
import { TextInputProps } from "../../molecules";
interface NumberInput extends TextInputProps {
    onDecrease?: () => void;
    onIncrease?: () => void;
    wrapperStyle?: React.CSSProperties;
}
declare const NumberInput: ({ wrapperStyle, onDecrease, onIncrease, ...rest }: NumberInput) => JSX.Element;
export { NumberInput };

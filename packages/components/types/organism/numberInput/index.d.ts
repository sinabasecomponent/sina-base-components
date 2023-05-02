/// <reference types="react" />
import { TextInputProps } from "../../molecules";
interface NumberInput extends TextInputProps {
    onDecrease: () => void;
    onIncrease: () => void;
}
declare const NumberInput: ({ onDecrease, onIncrease, ...rest }: NumberInput) => JSX.Element;
export { NumberInput };

/// <reference types="react" />
import { TextInputProps } from "../../molecules";
interface NumberInput extends TextInputProps {
    onDecrease: () => void;
    onIncrease: () => void;
}
declare const NumberInput: ({ onDecrease, onIncrease }: NumberInput) => JSX.Element;
export { NumberInput };

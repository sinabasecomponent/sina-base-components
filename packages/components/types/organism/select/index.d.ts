/// <reference types="react" />
import { Default, SelectProps } from "./types";
declare const Select: <T extends Record<string, unknown> = Default>({ data, value: propValue, labelExtractor, valueExtractor, onChange, onClear, }: SelectProps<T>) => JSX.Element;
export { Select };

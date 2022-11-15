import { createContext } from "react";

interface RadioContextProps {
  value: string | number | undefined | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}
const initialValue: RadioContextProps = {
  value: undefined,
  onChange: () => ({}),
  name: "",
};

const RadioContext = createContext(initialValue);

export { RadioContext };

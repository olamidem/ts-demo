import { useState, type ReactNode } from "react";
import { MyContext } from "./MyContext";

interface MyProvidedProps {
  children: ReactNode;
}

const MyProvider = ({ children }: MyProvidedProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

// src/DraggableInputContext.tsx
import React, { createContext, useContext, useState } from "react";
import { InputItem } from "./InputProperty";

export interface DraggableInputProps extends InputItem {
  [key: string]: any; // A
}

interface DraggableInputContextValue {
  selectedInput: DraggableInputProps | null;
  setSelectedInput: (input: DraggableInputProps | null) => void;
  updatedInputArray: DraggableInputProps[]; // Add this property
  inputs: DraggableInputProps[];
  setInputs: (inputs: DraggableInputProps[]) => void;
}

const DraggableInputContext = createContext<DraggableInputContextValue>({
  selectedInput: null,
  setSelectedInput: () => {},
  updatedInputArray: [],
  inputs: [],
  setInputs: () => {},
});

const useDraggableInputContext = () => useContext(DraggableInputContext);

interface DraggableInputProviderProps {
  children: React.ReactNode;
}

const DraggableInputProvider: React.FC<DraggableInputProviderProps> = ({
  children,
}) => {
  const [selectedInput, setSelectedInput] =
    useState<DraggableInputProps | null>(null);
  const [inputs, setInputs] = useState<DraggableInputProps[]>([]);
  
  const updatedInputArray = React.useMemo(() => {
    return inputs.map((input) => {
      const updatedProperties: any = input.property.reduce((acc, prop) => {
        acc[prop.name] = prop.value;
        return acc;
      }, {} as Record<string, any>); // Use type assertion here

      return {
        ...input,
        ...updatedProperties,
      };
    });
  }, [inputs]);


  const contextValue = React.useMemo(() => {
    return { selectedInput, setSelectedInput,updatedInputArray, inputs, setInputs };
  }, [selectedInput, setSelectedInput,updatedInputArray, inputs, setInputs]);

  return (
    <DraggableInputContext.Provider value={contextValue}>
      {children}
    </DraggableInputContext.Provider>
  );
};

export { DraggableInputProvider, useDraggableInputContext };

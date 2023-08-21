import React, { createContext, useContext, useState } from "react";
import { InputItem } from "../constant/interface";
import { component } from "../constant/enum";

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
      if (input.component === component.HEADING_COMPONENT) {
        const { property, ...restProps } = input;
        const headingProperty = property.find((prop) => prop.name === "heading");
        const subheadingProperty = property.find((prop) => prop.name === "subheading");
  
        return {
          ...restProps,
          heading: headingProperty ? headingProperty.value : "",
          subheading: subheadingProperty ? subheadingProperty.value : "",
          property:[]
        };
      } else {
        const updatedProperties = input.property.reduce((acc, prop) => {
          acc[prop.name] = prop.value;
          return acc;
        }, {} as Record<string, any>);
  
        return {
          ...input,
          ...updatedProperties,
        };
      }
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

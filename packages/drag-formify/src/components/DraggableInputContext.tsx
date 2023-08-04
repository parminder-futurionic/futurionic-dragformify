// src/DraggableInputContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { InputItem } from './InputProperty';

export interface DraggableInputProps extends InputItem {

}

interface DraggableInputContextValue {
  selectedInput: DraggableInputProps | null;
  setSelectedInput: (input: DraggableInputProps | null) => void;
}

const DraggableInputContext = createContext<DraggableInputContextValue>({
  selectedInput: null,
  setSelectedInput: () => {},
});

const useDraggableInputContext = () => useContext(DraggableInputContext);

interface DraggableInputProviderProps {
  children: React.ReactNode;
}

const DraggableInputProvider: React.FC<DraggableInputProviderProps> = ({ children }) => {
  const [selectedInput, setSelectedInput] = useState<DraggableInputProps | null>(null);

  return (
    <DraggableInputContext.Provider value={{ selectedInput, setSelectedInput }}>
      {children}
    </DraggableInputContext.Provider>
  );
};

export { DraggableInputProvider, useDraggableInputContext };

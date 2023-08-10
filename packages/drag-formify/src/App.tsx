import { DraggableInputProvider } from "./components/DraggableInputContext";

import DragDropFormify from "./DragDropFormify";

const App = () => {
  return (
    <DraggableInputProvider>
      <DragDropFormify />
    </DraggableInputProvider>
  );
};

export default App;

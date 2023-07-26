import React, { useState } from "react";
import DragDrop from "./components/DragDrop";

interface Task {
  id: number;
  title: string;
  type: string;
}

const tasks: Task[] = [
  { id: 1, title: "Task 1", type: "Todo" },
  { id: 2, title: "Task 2", type: "Todo" },
  { id: 3, title: "Task 3", type: "In Progress" },
  { id: 4, title: "Task 4", type: "In Progress" },
  { id: 5, title: "Task 5", type: "Done" },
  { id: 6, title: "Task 6", type: "Done" },
];

const App: React.FC = () => {
  const [tasksData, setTasksData] = useState<Task[]>(tasks);

  const handleDrop = (data: Task, targetContainerId: string) => {
    const updatedTasksData = tasksData.map((task) =>
      task.id === data.id ? { ...task, type: targetContainerId } : task
    );

    setTasksData(updatedTasksData);
  };

  const todoTasks = tasksData.filter((task) => task.type === "Todo");
  const inProgressTasks = tasksData.filter(
    (task) => task.type === "In Progress"
  );
  const doneTasks = tasksData.filter((task) => task.type === "Done");

  return (
    <div className="flex justify-center space-x-8 p-8">
      
      <DragDrop
        containerId="Todo"
        onDrop={handleDrop}
        acceptItemTypes={["In Progress", "Done"]}
        draggableProps={todoTasks.map((task) => ({
          customDragData: task,
          defaultClassName: "bg-blue-500 text-white p-2 rounded-md mb-2",
          children: task.title,
        }))}
        droppableProps={{
          defaultTailwindClasses: "bg-blue-200 p-4 rounded-md",
        }}
      />
      <DragDrop
        containerId="In Progress"
        onDrop={handleDrop}
        acceptItemTypes={["Todo", "Done"]}
        draggableProps={inProgressTasks.map((task) => ({
          customDragData: task,
          defaultClassName: "bg-yellow-500 text-white p-2 rounded-md mb-2",
          children: task.title,
        }))}
        droppableProps={{
          defaultTailwindClasses: "bg-yellow-200 p-4 rounded-md",
        }}
      />
      <DragDrop
        containerId="Done"
        onDrop={handleDrop}
        acceptItemTypes={["Todo", "In Progress"]}
        draggableProps={doneTasks.map((task) => ({
          customDragData: task,
          defaultClassName: "bg-green-500 text-white p-2 rounded-md mb-2",
          children: task.title,
        }))}
        droppableProps={{
          defaultTailwindClasses: "bg-green-200 p-4 rounded-md",
        
        }}
      />
    </div>
  );
};

export default App;

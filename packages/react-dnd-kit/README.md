# @futurionicmanu/react-dnd-kit

# React Drag and Drop Library

![React version](https://img.shields.io/badge/React-%5E18.2.0-blue)
![TypeScript version](https://img.shields.io/badge/TypeScript-%5E5.1.6-blue)

This library provides a set of React components and hooks to implement drag and drop functionality in your React applications. It's built using React and TypeScript to ensure type safety and ease of integration with your existing projects.

## Installation

You can install the library using npm or yarn.

Using npm:

```bash
npm install@futurionicmanu/react-dnd-kit
```

Using yarn:

```bash
yarn add@futurionicmanu/react-dnd-kit
```

## Features

- **`useDraggable` hook**: Allows you to make any element draggable within your React components.
- **`useDroppable` hook**: Enables elements to be made droppable within your React components.
- **`DraggableComponent`**: A component that makes its children draggable.
- **`DroppableComponent`**: A component that makes its children droppable.
- **`DragDrop` component**: Combines draggable and droppable components for drag and drop functionality.

## Usage

Here, we will explain how to use each feature provided by the library in detail.

### useDraggable Hook

The `useDraggable` hook allows you to make any element draggable within your React components. It provides various options to customize the drag behavior.

#### Options

The `useDraggable` hook accepts an options object as an argument with the following properties:

- `onDragStart`: A callback function to be executed when dragging starts. You can use this callback to perform actions when the user starts dragging the element.

- `onDragEnd`: A callback function to be executed when dragging ends. This callback can be used to perform actions when the user stops dragging the element.

- `onCustomDragStart`: A custom callback function to be executed when custom drag starts. This function can be used when you want to initiate dragging programmatically, such as on a button click.

- `onCustomDragEnd`: A custom callback function to be executed when custom drag ends. This function can be used to handle custom drag completion.

- `customDragData`: Data to be attached to the drag event. This data can be accessed in the drop zone when the element is dropped, allowing you to pass custom information between the draggable and droppable components.

- `dragImage`: The image to be shown during dragging. This can be used to customize the appearance of the drag image while dragging the element.

- `dragHandleSelectors`: An array of CSS selectors for drag handles. If provided, dragging will only be triggered when the user clicks and drags on elements matching the provided selectors. This is useful when you want to limit the dragging behavior to specific parts of the draggable element.

- `dragStartThreshold`: The threshold distance (in pixels) before initiating drag. If the user's mouse or touch movement exceeds this threshold, the dragging will start. This prevents accidental dragging when the user only intends to click on the element.

- `preventTouchScroll`: Whether to prevent touch scroll while dragging. When set to `true`, touch scrolling will be disabled while dragging, which can be helpful to avoid unintentional scrolling during drag operations.

- `disableDraggingOnMobile`: Whether to disable dragging on mobile devices. If set to `true`, dragging will be disabled on touch devices, which can be useful for better touch interactions with other UI elements.

#### Example

Let's create a simple example to demonstrate the use of the `useDraggable` hook:

```jsx
import React from 'react';
import { useDraggable } from '@futurionicmanu/react-dnd-hooks';

const DraggableItem = ({ name }) => {
  const { isDragging } = useDraggable({
    customDragData: { name }, // Attach custom data (e.g., name) to the drag event
    dragImage: '/path/to/drag-image.png', // Customize the drag image
    dragHandleSelectors: ['.drag-handle'], // Limit dragging to elements with the class 'drag-handle'
  });

  return (
    <div className={`draggable-item ${isDragging ? 'dragging' : ''}`}>
      <span className="drag-handle">Drag Me</span>
      <span>{name}</span>
    </div>
  );
};
```

In this example, we create a draggable item with a custom drag handle. The `useDraggable` hook is used to enable dragging for the component and customize its behavior.

### useDroppable Hook

The `useDroppable` hook allows you to make elements droppable within your React components. It provides options to customize the drop behavior.

#### Options

The `useDroppable` hook accepts an options object as an argument with the following properties:

- `onDrop`: A callback function to be executed when an item is dropped. This function will be called when a draggable element is dropped onto the droppable zone.

- `onDragEnter`: A callback function to be executed when a draggable item enters the droppable area. This function will be called when the user's cursor or touch enters the droppable zone.

- `onDragLeave`: A callback function to be executed when a draggable item leaves the droppable area. This function will be called when the user's cursor or touch leaves the droppable zone.

- `onDragOver`: A callback function to be executed when a draggable item is dragged over the droppable area. This function will be called repeatedly as the user's cursor or touch moves over the droppable zone during dragging.

- `onDragEnd`: A callback function to be executed when dragging ends. This function will be called when the user stops dragging the element, regardless of whether it was dropped on the droppable zone.

- `acceptItemTypes`: An array of accepted item types for dropping. If provided, only draggable items with matching types will be accepted when dropped on the droppable zone.

- `disableDropping`: Whether to disable dropping on the droppable area. When set to `true`, the droppable area will not accept any draggable items.

#### Example

Let's create a simple example to demonstrate the use of the `useDroppable` hook:

```jsx
import React from 'react';
import { useDroppable } from '@futurionicmanu/react-dnd-kit';

const DroppableZone = () => {
  const { isDragOver, handleDrop } = useDroppable({
    onDrop: (data, containerId) => {
      console.log('Dropped data:', data);
      console.log('Dropped into container:', containerId);
    },
    acceptItemTypes: ['text', 'image'], // Allow only draggable items with types 'text' or 'image'
    disableDropping: false, // Enable dropping in this zone
  });

  return (
    <div
      className={`droppable-zone ${isDragOver ? 'dragging-over' : ''}`}
      onDrop={handleDrop}
      onDragEnter={() => console.log('Dragging over the droppable zone')}
      onDragLeave={() => console.log('Leaving the droppable zone')}
      onDragOver

={(e) => e.preventDefault()}
    >
      Drop Zone
    </div>
  );
};
```

In this example, we create a droppable zone where draggable items can be dropped. The `useDroppable` hook is used to enable dropping functionality for the component and customize its behavior.

### DraggableComponent

The `DraggableComponent` is a reusable component that makes its children draggable. It encapsulates the behavior provided by the `useDraggable` hook.

#### Props

- `children`: The content to be rendered inside the draggable element.
- `defaultClassName`: The default class name for the draggable element. This class will be applied to the draggable element by default, but you can override it using the `additionalClassName` prop.
- `additionalClassName`: Additional class names to be added to the draggable element. You can use this prop to apply custom styles to the draggable element while dragging or based on other conditions.
- `disableDragging`: Whether to disable dragging for the element. When set to `true`, the element will not be draggable.
- `customDragData`: Data to be attached to the drag event. This data can be accessed in the drop zone when the element is dropped, allowing you to pass custom information between the draggable and droppable components.
- `dragImage`: The image to be shown during dragging. This can be used to customize the appearance of the drag image while dragging the element.
- `dragHandleSelectors`: An array of CSS selectors for drag handles. If provided, dragging will only be triggered when the user clicks and drags on elements matching the provided selectors. This is useful when you want to limit the dragging behavior to specific parts of the draggable element.
- `dragStartThreshold`: The threshold distance (in pixels) before initiating drag. If the user's mouse or touch movement exceeds this threshold, the dragging will start. This prevents accidental dragging when the user only intends to click on the element.
- `preventTouchScroll`: Whether to prevent touch scroll while dragging. When set to `true`, touch scrolling will be disabled while dragging, which can be helpful to avoid unintentional scrolling during drag operations.
- `disableDraggingOnMobile`: Whether to disable dragging on mobile devices. If set to `true`, dragging will be disabled on touch devices, which can be useful for better touch interactions with other UI elements.
- `onDragStart`: A callback function to be executed when dragging starts. You can use this callback to perform actions when the user starts dragging the element.
- `onDragEnd`: A callback function to be executed when dragging ends. This callback can be used to perform actions when the user stops dragging the element.
- `onCustomDragStart`: A custom callback function to be executed when custom drag starts. This function can be used when you want to initiate dragging programmatically, such as on a button click.
- `onCustomDragEnd`: A custom callback function to be executed when custom drag ends. This function can be used to handle custom drag completion.
- `as`: The HTML tag or component to be used for the draggable element (default is "div").

#### Example

Let's create a reusable DraggableComponent to demonstrate its usage:

```jsx
import React from 'react';
import DraggableComponent from '@futurionicmanu/react-dnd-kit';

const DraggableItem = ({ name }) => {
  return (
    <DraggableComponent
      customDragData={{ name }} // Attach custom data (e.g., name) to the drag event
      dragImage="/path/to/drag-image.png" // Customize the drag image
      dragHandleSelectors={['.drag-handle']} // Limit dragging to elements with the class 'drag-handle'
      onDragStart={() => console.log('Dragging started')}
      onDragEnd={() => console.log('Dragging ended')}
    >
      <div className="draggable-item">
        <span className="drag-handle">Drag Me</span>
        <span>{name}</span>
      </div>
    </DraggableComponent>
  );
};
```

In this example, we create a reusable DraggableComponent to wrap the draggable item content. The component will enable dragging for the wrapped content and customize its behavior based on the provided props.

### DroppableComponent

The `DroppableComponent` is a reusable component that makes its children droppable. It encapsulates the behavior provided by the `useDroppable` hook.

#### Props

- `containerId`: The ID of the droppable container. This ID can be used to identify the droppable container when handling dropped items.
- `onDrop`: A callback function to be executed when an item is dropped. This function will be called when a draggable element is dropped onto the droppable zone.
- `acceptItemTypes`: An array of accepted item types for dropping. If provided, only draggable items with matching types will be accepted when dropped on the droppable zone.
- `defaultTailwindClasses`: The default Tailwind CSS classes for the droppable container. These classes will be applied to the droppable container by default, but you can override them using the `customTailwindClasses` prop or additional CSS classes.
- `customTailwindClasses`: Custom Tailwind CSS classes to be added to the droppable container. You can use this prop to apply additional styles or modify the default styles based on your requirements.
- `className`: Additional class names to be added to the droppable container. You can use this prop to apply custom styles or add classes dynamically based on conditions.
- `style`: Additional styles to be applied to the droppable container. You can use this prop to add inline styles to the droppable container.

#### Example

Let's create a reusable DroppableComponent to demonstrate its usage:

```jsx
import React from 'react';
import DroppableComponent from '@futurionicmanu/react-dnd-kit';

const DroppableZone = () => {
  return (
    <DroppableComponent
      containerId="droppable-zone-1" // Set a unique ID for the droppable zone
      onDrop={(data, containerId) => {
        console.log('Dropped data:', data);
        console.log('Dropped into container:', containerId);
      }}
      acceptItemTypes={['text', 'image']} // Allow only draggable items with types 'text' or 'image'
      defaultTailwindClasses="bg-gray-200 p-4 rounded-md" // Set default Tailwind classes for the droppable container
      customTailwindClasses="border-2" // Add custom Tailwind classes to the droppable container
      className="custom-droppable-zone" // Add additional class names dynamically
      style={{ borderColor: 'blue' }} // Add inline styles to the droppable container
    >
      Drop Zone
    </DroppableComponent>
  );
};
```

In this example, we create a reusable DroppableComponent to wrap the droppable zone content. The component will enable dropping functionality for the wrapped content and customize its appearance and behavior based on the provided props.

### DragDrop Component

The `DragDrop` component is a higher-level component that combines the draggable and droppable components to create a drag and drop functionality.

#### Props

- `containerId`: The ID of the droppable container. This ID can be used to identify the droppable container when handling dropped items.
- `onDrop`: A callback function to be

 executed when an item is dropped. This function will be called when a draggable element is dropped onto the droppable zone.
- `acceptItemTypes`: An array of accepted item types for dropping. If provided, only draggable items with matching types will be accepted when dropped on the droppable zone.
- `draggableProps`: An array of props for the `DraggableComponent`. Each object in the array represents a draggable item to be rendered within the `DragDrop` component.

#### Example

Let's create an example using the `DragDrop` component to demonstrate its usage:

```jsx
import React from 'react';
import DragDrop from '@futurionicmanu/react-dnd-kit';

const MyDragDropComponent = () => {
  const handleDrop = (data, containerId) => {
    // Handle the dropped data here
    console.log('Dropped data:', data);
    console.log('Dropped into container:', containerId);
  };

  const draggableItems = [
    {
      customDragData: { id: 1, name: 'Item 1' },
      // Other props for DraggableComponent
    },
    {
      customDragData: { id: 2, name: 'Item 2' },
      // Other props for DraggableComponent
    },
    // Add more draggable items as needed
  ];

  return (
    <DragDrop
      containerId="my-droppable-container" // Set a unique ID for the droppable zone
      onDrop={handleDrop}
      acceptItemTypes={['text', 'image']} // Allow only draggable items with types 'text' or 'image'
      draggableProps={draggableItems} // Pass the array of draggable items as props
      droppableProps={{
        defaultTailwindClasses: 'bg-gray-200 p-4 rounded-md', // Set default Tailwind classes for the droppable container
        customTailwindClasses: 'border-2', // Add custom Tailwind classes to the droppable container
        className: 'custom-droppable-zone', // Add additional class names dynamically
        style: { borderColor: 'blue' }, // Add inline styles to the droppable container
      }}
    />
  );
};
```

In this example, we use the `DragDrop` component to create a drag and drop area with multiple draggable items. The component handles the dropped data and provides options to customize the appearance and behavior of the droppable zone.

### Future Development

We are committed to improving react-dnd-kit and adding new features to enhance its functionality. Here are some of the planned features, improvements, and testing initiatives for future releases:

- **Multi-Drag Support:** Allow users to drag multiple items simultaneously.
- **Nested Drag and Drop:** Enable drag and drop interactions within nested components.
- **Customizable Drag Handles:** Allow developers to customize the drag handles for individual draggable items.
- **Snap-to-Grid:** Implement a snap-to-grid feature for precise item positioning during drag.
- **Touch Gestures:** Support additional touch gestures for smoother interactions on touch devices.
- **Additional Styling Options:** Provide more built-in styling options and themes for easy customization.
- **Improved Accessibility:** Enhance accessibility features and ensure compliance with accessibility standards.
- **Comprehensive Testing:** Expand test coverage with additional unit tests, integration tests, and corner case scenarios.
- **Error Handling and Edge Cases:** Implement robust error handling and cover edge cases to enhance the library's stability.
- **Performance Optimization:** Continuously optimize performance to ensure smooth drag and drop interactions, even with large datasets.
- **Cross-Browser Compatibility:** Conduct thorough testing on different browsers (e.g., Chrome, Firefox, Safari, Edge) to ensure consistent behavior.

#### Corner Case Coverage:

- Test dragging multiple items from different source containers to the same target container.
- Test dragging an item and releasing it outside any valid droppable target.
- Verify that the library handles edge cases, such as adding and removing draggable/droppable elements dynamically.
- Test interactions on touch-enabled devices to ensure smooth behavior.
- Test interactions when a droppable target contains nested droppable elements.
- Test scenarios where draggable and droppable elements are dynamically disabled or enabled.
- Test dropping an item onto a target with multiple nested droppable elements.

#### Testing Initiatives:

- Expand test coverage to include various combinations of draggable and droppable elements.
- Create test scenarios for custom data and data transfer during drag and drop operations.
- Implement comprehensive error handling tests to ensure graceful failure.
- Conduct performance testing to measure and optimize performance metrics, including handling large datasets.
- Set up automated testing using Continuous Integration (CI) for better code quality control.
- Conduct cross-browser testing to ensure compatibility across different browsers and versions.
- Test the library in different screen sizes and resolutions to ensure responsiveness.

Please note that the list above is not exhaustive, and we are open to community feedback and contributions. If you have any feature requests, suggestions, or ideas for additional corner cases and testing scenarios, feel free to create an issue or a pull request. We value your input in making react-dnd-kit a reliable and feature-rich library!


## License

UNLICENSED
```

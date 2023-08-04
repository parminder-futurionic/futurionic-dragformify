import React from "react";
import { useForm } from "react-hook-form";
import { useDraggableInputContext } from "../DraggableInputContext";
import Input from "../Input";

const PropertyFields = () => {
  const methods = useForm();
  const { selectedInput, setSelectedInput } = useDraggableInputContext();
  console.log(selectedInput);
  const { control, handleSubmit } = methods;

  React.useEffect(() => {
    if (selectedInput) {
      // Set the form fields to the values from the selectedInput
      selectedInput.property.forEach((prop) => {
        methods.setValue(prop.name, prop.value);
      });
      methods.setValue("label", selectedInput.label);
    }
  }, [selectedInput, methods]);

  const onSubmit = (data: any) => {
    if (selectedInput) {
      const updatedProperties = selectedInput.property.map((item: any) => {
        return {
          ...item,
          value: data[item.name],
        };
      });

      setSelectedInput({
        ...selectedInput,
        label: data.label,
        property: updatedProperties,
      });
      console.log(selectedInput);
      console.log(data);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {selectedInput && (
        <>
          {" "}
          <h2 className="text-2xl font-semibold mb-6">Property</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {selectedInput?.property.map((val) => (
              <Input
                key={val.id}
                control={control}
                id={val.id}
                label={val.label}
                name={val.name}
                type={val.type}
                placeholder={val.placeholder}
                required={val.required}
                value={val.value}
                isReadOnly={val.isReadOnly}
                isDisabled={val.isDisabled}
                minLength={val.minLength}
                maxLength={val.maxLength}
              />
            ))}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PropertyFields;

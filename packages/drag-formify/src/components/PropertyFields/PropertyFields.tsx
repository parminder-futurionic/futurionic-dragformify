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
  const labelToCamelCase = (label: string) => {
    const cleanedLabel = label.replace(/[^a-zA-Z0-9]+/g, ' ').trim();
    const words = cleanedLabel.split(' ');
    
    const camelCased = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  
    return camelCased;
  };
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
        name: labelToCamelCase(data.label),
        property: updatedProperties,
      });
      console.log(selectedInput);
      console.log(data);
    }
  };

  return (
    <>
      {selectedInput && (
        <div className="max-w-md mx-auto mt-8 p-6 rounded-lg">
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
              className="w-full px-4 py-2 btn btn-primary mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PropertyFields;

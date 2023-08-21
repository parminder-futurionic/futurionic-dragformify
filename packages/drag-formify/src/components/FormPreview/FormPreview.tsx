import React from "react";
import { useDraggableInputContext } from "../DraggableInputContext";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { component } from "../../constant/enum";

const FormPreview: React.FC = () => {
  const { updatedInputArray } = useDraggableInputContext();
  const methods = useForm();
  const { control, handleSubmit } = methods;
  console.log(updatedInputArray);
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-primary">Form Preview</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {updatedInputArray.map((val) => (
          <React.Fragment key={val.id}>
            <div className="font-bold text-2xl mb-2">
              {val.heading}
              <div className="text-gray-500 text-sm">{val.subheading}</div>
            </div>
            
            {val.component === component.INPUT_COMPONENT && (
              <Input
                key={val.id}
                control={control}
                id={val.id}
                label={val.label}
                name={val.name}
                type={val.type}
                placeholder={val.placeholder}
                required={val.required}
                value={val?.value ? val.value :  ""}
                options={val.options}
                isReadOnly={false}
                isDisabled={false}
                minLength={val.minLength}
                maxLength={val.maxLength}
              />
            )}
          </React.Fragment>
        ))}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPreview;

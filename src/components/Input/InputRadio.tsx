import { InputProps } from "@/types";
import Input from "./Input";
import { classNames } from "@/components/classNames";

const InputRadio = ({
  title,
  value,  
  readOnly = true,
  onChange,
  required = false,
  support,
  classNameInput
}: InputProps) => {
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    onChange(value);
  };
  return (
    <div className={classNames("relative")}>
      <Input
        title={title}
        readOnly={readOnly}
        onChange={onChange}
        required={required}
        support={support}
        classNameInput={classNameInput}
      />
      <div className="absolute xl:top-2.5 top-3 lg:top-2.5 flex w-full flex-row justify-evenly">
        {value && Array.isArray(value) && value.map((item) => (
          <div key={item} className="flex flex-row gap-4">
            <input
              type="radio"
              key={item}
              id={item}
              name={title}
              value={item}
              className="accent-primary"
              onChange={handleInputChange}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputRadio;

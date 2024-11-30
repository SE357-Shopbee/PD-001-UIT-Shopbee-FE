import { InputProps } from "@/types";
import { classNames } from "@/components/classNames";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";

const Input = ({
  title,
  valid = "default",
  placeholder,
  value,
  readOnly = false,
  onChange,
  required = false,
  type = "text",
  support,
  classNameInput,
}: InputProps) => {
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    onChange(value);
  };

  const borderClass =
    valid === "error"
      ? "border-Error"
      : valid === "success"
      ? "border-Sucess"
      : "border-Outline";

  return (
    <div className={classNames("relative my-2", classNameInput ? classNameInput: "")}>
      <p className="absolute -top-2 left-2 bg-Highlight px-1 text-center text-xs text-Outline">
        {title} <span className="text-Error">{required && '*'}</span>
      </p>
      <input className={classNames('w-full rounded border bg-Highlight p-2 focus:outline-4 focus:outline-OnPrimary', borderClass)}
      value={value}
      placeholder={placeholder}
      id={title}
      readOnly={readOnly}
      disabled={readOnly}
      onChange={handleInputChange}
      required={required}
      type={type}/>
      {valid === 'error' && (<XMarkIcon className="absolute right-2 top-2 h-6 w-6 cursor-pointer text-Error"/>)}
      {valid === 'success' && (<CheckIcon className="absolute right-2 top-2 h-6 w-6 cursor-pointer text-Success"/>)}
      <p className={classNames('h-4 pl-4 text-xs', support ? (valid === 'error' ? 'text-Error' : 'visited:') : 'invisible')}>
        {support}
      </p>
    </div>
  )
};

export default Input;
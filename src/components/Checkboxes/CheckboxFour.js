import { useState, useId } from "react";

const CheckboxFour = () => {
  const [isChecked, setIsChecked] = useState(false);
  const id = useId(); // Generate a unique ID

  return (
    <div>
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
              isChecked ? "border-primary" : ""
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                isChecked ? "!bg-primary" : ""
              }`}
            ></span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default CheckboxFour;

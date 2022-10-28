import React from "react";
import { usePasswordContext } from "../context/PasswordProvider";

export function Input({ type, name, label }) {
  const { formData, handleForm } = usePasswordContext();
  return (
    <div className="flex gap-4 justify-between items-center">
      <label className="text-gray-300 font-bold text-lg " htmlFor={name}>
        {label}{" "}
      </label>
      {type === "number" ? (
        <input
          className="rounded-md placeholder:text-center placeholder:font-bold w-16"
          id={name}
          name={name}
          type={type}
          value={formData?.[name]}
          placeholder={name}
          onChange={handleForm}
          max="20"
          min="4"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          checked={formData?.[name]}
          onChange={handleForm}
        />
      )}
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => alert("Success");

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          type="text"
          placeholder="Your Email Address..."
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        <button type="submit" className="submit-btn cursor-pointer">
          Notify Me
        </button>
      </form>
      {errors.email && <span className="error">Invalid email</span>}
    </div>
  );
}

export default Form;

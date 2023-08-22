import React from "react";
import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <div className="form-container">
      <div>
        <input
          className="input-field"
          placeholder="Your Email Address..."
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
        {error && <h5 className="error">{error}</h5>}
      </div>
      <button className="submit-btn">Notify Me</button>
    </div>
  );
}

export default Form;

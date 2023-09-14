import { useState } from "react";
import Vision from "./Vision";
export default function Form() {
  const [formData, setFormData] = useState({
    question: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    for (const field in formData) {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Reveal a vision of your future</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Enter a question:</label>
          <input
            type="text"
            id="question"
            name="question"
            value={formData.question}
            onChange={handleChange}
          />
          <span className="error">{errors.question}</span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {submitted && (
        <div>
          <h3>Entered Data:</h3>
          <p>Your question: {formData.question}</p>
          <Vision />
        </div>
      )}
    </div>
  );
}

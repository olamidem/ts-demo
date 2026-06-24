import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}
const initialState = {
  name: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form:", formData);
    setFormData(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label htmlFor="">
            email:
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <label htmlFor="">
            message:
            <input
              type="text"
              value={formData.message}
              onChange={handleChange}
              name="message"
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

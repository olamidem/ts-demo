import { useRef, useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>(initialState);

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <div>
      <h1>Form Data</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" ref={name} />
        <input type="text" placeholder="Enter Your Email" ref={email} />
        <input type="text" placeholder="Enter Your Password" ref={password} />

        <button type="submit"> Submit</button>
      </form>

      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Name: {submittedData.password}</h1>
      </section>
    </div>
  );
};

export default Form;


import { useState } from 'react';
import validation from './validation.js';
import { ErroresConsola, FormContainer, FormContent, InputsLogin, Labels, SumbmitButton } from './Form.style.js';

function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((userData) => ({
      ...userData,
      [name]: value
    }));

    validation({ ...userData, [name]: value }, setErrors);
  }

  function submitHandler(event) {
    event.preventDefault();
    login(userData);
   
  }

  return (
    <FormContainer>
      <FormContent action="" onSubmit={submitHandler}>
        <div>
          <Labels>Email</Labels>
          <InputsLogin
            type="text"
            placeholder="Email here..."
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <ErroresConsola>{errors.email}</ErroresConsola>}
        </div>

        <div>
          <Labels>Password</Labels>
          <InputsLogin
            type="password"
            placeholder="Password here..."
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <ErroresConsola>{errors.password}</ErroresConsola>}
        </div>

        <SumbmitButton type="submit">Submit</SumbmitButton>
      </FormContent>
    </FormContainer>
  );
}

export default Form;